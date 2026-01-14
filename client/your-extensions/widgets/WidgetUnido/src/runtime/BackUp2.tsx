import React, { useEffect, useRef, useState } from 'react'
import type { AllWidgetProps, DataSource } from 'jimu-core'
import { DataSourceManager } from 'jimu-core'
import { Checkbox, Alert, Loading, Button, Collapse } from 'jimu-ui'

type Dict<T> = { [k: string]: T }
const NULL_TOKEN = '__ESRI_NULL__'
const TARGET_FIELDS = [
  'Tipo_accidente',
  'Subtipo_Accidente',
  'Sentido',
  'Superficie',
  'Luminosidad',
  'Factores_atmosfericos',
  'Tipo_dia',
  'Factor_concurrente_1'
] as const

// Etiquetas bonitas para la UI
const FIELD_LABELS: Record<string, string> = {
  Tipo_accidente: 'Tipo de accidente',
  Subtipo_Accidente: 'Subtipo de accidente',
  Sentido: 'Sentido',
  Superficie: 'Superficie',
  Luminosidad: 'Luminosidad',
  Factores_atmosfericos: 'Factores atmosféricos',
  Tipo_dia: 'Tipo de día',
  Factor_concurrente_1: 'Factor concurrente'
}
const prettyField = (f: string) => FIELD_LABELS[f] ?? f.replace(/_/g, ' ')

/** ========= NUEVO: Caché de módulo para evitar recargas filtradas =========
 * Vive mientras la app está cargada (cambio de página no la borra).
 */
type CacheRecord = {
  availableFields: string[]
  valuesByField: Dict<string[]>
  selectedByField: Dict<Set<string>>
}
const GLOBAL_CACHE: Record<string, CacheRecord> = {}

/** Helpers para clonar Sets al hidratar/guardar en caché */
const cloneSelected = (src: Dict<Set<string>>): Dict<Set<string>> =>
  Object.fromEntries(Object.entries(src).map(([k, v]) => [k, new Set(v)]))

export default function WidgetUnido (props: AllWidgetProps<any>) {
  const dsId = props.useDataSources?.[0]?.dataSourceId
  const dsRef = useRef<DataSource | null>(null)

  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)

  const [availableFields, setAvailableFields] = useState<string[]>([])
  const [valuesByField, setValuesByField] = useState<Dict<string[]>>({})
  const [selectedByField, setSelectedByField] = useState<Dict<Set<string>>>({})

  const [error, setError] = useState<string | null>(null)
  const [openField, setOpenField] = useState<string | null>(null)
// Trigger externo enviado por el widget de "Actualizar"
const doClearAllTs = (props as any)?.stateProps?.doClearAllTs;
const lastHandledTs = useRef<number | null>(null);
  // ===== Estilos ligeros (no necesitan CSS externo) =====
  const styles = {
    wrapper: { height: '100%', display: 'flex', flexDirection: 'column' as const },
    header: {
      position: 'sticky' as const, top: 0, zIndex: 1,
      background: 'var(--light-100, #fff)', padding: '8px 10px',
      borderBottom: '1px solid var(--light-500, #e5e5e5)',
      display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between'
    },
    headerLeft: { display: 'flex', alignItems: 'center', gap: 10 },
    title: { fontWeight: 600, fontSize: 14 },
    content: { padding: 10, overflow: 'auto' as const, flex: 1 },
    group: { borderBottom: '1px solid var(--light-500, #e5e5e5)', padding: '8px 0' },
    headRow: {
      cursor: 'pointer', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '6px 2px'
    },
    headLeft: { display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 },
    chevron: { display: 'inline-block', width: 16 },
    chip: {
      fontSize: 11, padding: '2px 6px', borderRadius: 999,
      background: 'var(--light-300, #f2f2f2)', color: 'var(--dark-600, #555)'
    },
    headRowHover: { background: 'rgba(0,0,0,0.03)', borderRadius: 6 },
    inner: { marginTop: 6, marginLeft: 22, display: 'grid', gap: 6 },
    smallBtns: { display: 'flex', gap: 6, marginBottom: 6 }
  }

  // 1) Inicializar DataSource
  useEffect(() => {
    setError(null)
    if (!dsId) return
    const ds = DataSourceManager.getInstance().getDataSource(dsId)
    dsRef.current = ds
    ds?.ready().then(() => setReady(true)).catch((e) => {
      console.error(e)
      setReady(false)
      setError('No se pudo inicializar el DataSource.')
    })
  }, [dsId])

  // 2) Validar campos + intentar hidratar desde caché
  useEffect(() => {
    if (!ready || !dsRef.current || !dsId) return
    const schema = dsRef.current.getSchema()
    const layerFields = Object.keys(schema?.fields ?? {})
    const present = TARGET_FIELDS.filter(f => layerFields.includes(f))
    setAvailableFields(present)
    if (present.length === 0) setError('Los campos de filtro no existen en esta capa.')

    // ==== NUEVO: hidratar desde caché si existe ====
    const cached = GLOBAL_CACHE[dsId]
    if (cached) {
      setValuesByField({ ...cached.valuesByField })
      setSelectedByField(cloneSelected(cached.selectedByField))
    }
  }, [ready, dsId])

  // 3) Cargar categorías por campo (groupBy + COUNT) SOLO si no hay caché
  useEffect(() => {
    if (!ready || !dsRef.current || availableFields.length === 0 || !dsId) return
    if (GLOBAL_CACHE[dsId]?.valuesByField && Object.keys(GLOBAL_CACHE[dsId].valuesByField).length) {
      // Ya tenemos cacheado; no recargar (evita el where activo)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    const load = async (field: string) => {
      const q: any = {
        // Esta consulta puede verse afectada por WHERE global, por eso cacheamos la 1ª vez
        where: '1=1',
        groupByFieldsForStatistics: [field],
        outStatistics: [{ statisticType: 'count', onStatisticField: field, outStatisticFieldName: 'n' }],
        orderByFields: [`${field} ASC`],
        returnGeometry: false,
        pageSize: 2000
      }
      const res = await dsRef.current!.query(q)
      const vals = (res?.records ?? []).map(r => {
        const v = r.getFieldValue(field)
        return (v === null || typeof v === 'undefined') ? NULL_TOKEN : String(v)
      })
      const uniq = Array.from(new Set(vals))
      if (!cancelled) {
        setValuesByField(prev => ({ ...prev, [field]: uniq }))
        setSelectedByField(prev => ({ ...prev, [field]: new Set(uniq) })) // todo activo
      }
    }

    ;(async () => {
      try { for (const f of availableFields) await load(f) }
      catch (e) { console.error(e); if (!cancelled) setError('Error consultando categorías.') }
      finally { if (!cancelled) setLoading(false) }
    })()

    return () => { cancelled = true }
  }, [ready, availableFields, dsId])

  // 3.b) Guardar en caché cuando tengamos los valores por campo completos
  useEffect(() => {
    if (!dsId) return
    const haveAll = availableFields.length > 0 &&
      availableFields.every(f => Array.isArray(valuesByField[f]))
    if (!haveAll) return

    GLOBAL_CACHE[dsId] = {
      availableFields: [...availableFields],
      valuesByField: { ...valuesByField },
      selectedByField: cloneSelected(selectedByField)
    }
  }, [dsId, availableFields, valuesByField, selectedByField])

  // 4) Aplicar WHERE combinado al cambiar selección
  useEffect(() => { void applyWhere() }, [selectedByField])

  const applyWhere = async () => {
    const ds = dsRef.current
    if (!ds || availableFields.length === 0) return
    const parts: string[] = []

    for (const field of availableFields) {
      const all = valuesByField[field] ?? []
      const sel = selectedByField[field]
      if (!sel) continue
      if (sel.size === 0) { parts.push('1=0'); continue }
      if (sel.size === all.length) continue

      const notNull = Array.from(sel).filter(v => v !== NULL_TOKEN)
      const hasNull = sel.has(NULL_TOKEN)
      const quoted = notNull.map(v => `'${v.replace(/'/g, "''")}'`)
      const inClause = quoted.length ? `${field} IN (${quoted.join(',')})` : ''
      const nullClause = hasNull ? `${field} IS NULL` : ''
      const clause = [inClause, nullClause].filter(Boolean).join(' OR ')
      parts.push(`(${clause})`)
    }

    const where = parts.length ? parts.join(' AND ') : '1=1'
    await ds.updateQueryParams({ where }, props.id)
  }

  const toggle = (field: string, value: string, on: boolean) => {
    setSelectedByField(prev => {
      const next = new Set(prev[field] ?? [])
      if (on) next.add(value); else next.delete(value)
      return { ...prev, [field]: next }
    })
  }

  const toggleOpen = (field: string) => setOpenField(prev => (prev === field ? null : field))

  const labelFor = (raw: string) => (raw === NULL_TOKEN ? '(vacío)' : raw)

const clearAll = () => {
  const next: Dict<Set<string>> = {};
  for (const f of availableFields) next[f] = new Set(valuesByField[f] ?? []);

  // 1) Estado React
  setSelectedByField(next);
  setOpenField(null);

  // 2) **Clave**: sincronizar la caché para evitar rehidratación con selección vieja
  if (dsId) {
    if (!GLOBAL_CACHE[dsId]) {
      GLOBAL_CACHE[dsId] = {
        availableFields: [...availableFields],
        valuesByField: { ...valuesByField },
        selectedByField: {} as any
      };
    }
    GLOBAL_CACHE[dsId].selectedByField = Object.fromEntries(
      Object.entries(next).map(([k, v]) => [k, new Set(v)])
    ) as any;
  }
};
useEffect(() => {
  const ts = Number(doClearAllTs) || 0;
  if (!ts || ts === lastHandledTs.current) return;

  // Asegúrate de que ya están cargados los valores de cada campo
  const readyValues =
    availableFields.length > 0 &&
    availableFields.every(f => Array.isArray(valuesByField[f]));

  if (!readyValues) return;

  clearAll();
  lastHandledTs.current = ts;
}, [doClearAllTs, availableFields, valuesByField]);
  // --------------------------- UI --------------------------------
  return (
    <div style={styles.wrapper}>
      {/* Header fijo con acciones */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.title}>Filtros</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button size="sm" onClick={clearAll} title="Restablece todos los filtros">Limpiar todo</Button>
        </div>
      </div>

      <div style={styles.content}>
        {!dsId && <Alert type="warning" text="Selecciona un DataSource en el panel de configuración." />}
        {error && <Alert type="error" text={error} className="mb-2" />}
        {loading && <Loading />}

        {availableFields.map((field) => {
          const vals = valuesByField[field] ?? []
          const sel = selectedByField[field] ?? new Set<string>()
          const isOpen = openField === field

          return (
            <div key={field} style={styles.group}>
              {/* Cabecera clickable */}
              <div
                style={styles.headRow}
                onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLDivElement).style, styles.headRowHover)}
                onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLDivElement).style, { background: 'transparent' })}
                onClick={() => toggleOpen(field)}
              >
                <div style={styles.headLeft}>
                  <span style={styles.chevron}>{isOpen ? '▼' : '▶'}</span>
                  <span>{prettyField(field)}</span>
                </div>
                <span style={styles.chip}>{sel.size}/{vals.length}</span>
              </div>

              {/* Panel desplegable */}
              <Collapse isOpen={isOpen}>
                <div style={styles.inner}>
                  <div style={styles.smallBtns}>
                    <Button size="sm" type="tertiary"
                      onClick={() => setSelectedByField(prev => ({ ...prev, [field]: new Set(vals) }))}>
                      Todo
                    </Button>
                    <Button size="sm" type="tertiary"
                      onClick={() => setSelectedByField(prev => ({ ...prev, [field]: new Set() }))}>
                      Ninguno
                    </Button>
                  </div>

                  {vals.length === 0 && <div className="text-muted">Cargando…</div>}
                  {vals.map(v => (
                    <div key={`${field}|${v}`} className="d-flex align-items-center">
                      <Checkbox
                        checked={sel.has(v)}
                        onChange={(_, on) => toggle(field, v, on)}
                      />
                      <span className="ml-2">{labelFor(v)}</span>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          )
        })}
      </div>
    </div>
  )
}
