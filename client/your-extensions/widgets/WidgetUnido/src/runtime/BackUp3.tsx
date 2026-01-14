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

type CacheRecord = {
  availableFields: string[]
  valuesByField: Dict<string[]>
  selectedByField: Dict<Set<string>>
}
const GLOBAL_CACHE: Record<string, CacheRecord> = {}

const cloneSelected = (src: Dict<Set<string>>): Dict<Set<string>> =>
  Object.fromEntries(Object.entries(src).map(([k, v]) => [k, new Set(v)]))

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

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

  // “Esperando resultados” al pulsar Consultar
  const [applying, setApplying] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  // Trigger externo enviado por el widget de "Actualizar"
  const doClearAllTs = (props as any)?.stateProps?.doClearAllTs
  const lastHandledTs = useRef<number | null>(null)

  // --------------------------- estilos ---------------------------
  const styles = {
    wrapper: {
      position: 'relative' as const,
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      background: 'var(--light-200, #f5f5f7)',
      borderRadius: 12,
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      overflow: 'hidden'
    },
    header: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 2,
      padding: '10px 12px',
      background: 'linear-gradient(135deg, #005e95, #0090c5)',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },
    titleIcon: {
    width: 24,
    height: 24,
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.12)',
    color: '#ffffff'
},

    title: {
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: 0.2
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    },
    content: {
      padding: 10,
      paddingTop: 8,
      overflow: 'auto' as const,
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 8
    },
    badgeRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 6,
      fontSize: 11,
      color: 'var(--dark-600, #555)'
    },
    badge: {
      padding: '2px 8px',
      borderRadius: 999,
      background: '#ffffff',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.04)'
    },
    groupCard: {
      background: '#ffffff',
      borderRadius: 10,
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      padding: '6px 8px'
    },
    headRow: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 2px'
    },
    headLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--dark-700, #333)'
    },
    chevronBox: {
      width: 18,
      height: 18,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      background: 'var(--light-200, #f3f3f5)',
      color: 'var(--dark-500, #666)'
    },
    chip: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 999,
      background: 'var(--light-200, #f3f3f5)',
      color: 'var(--dark-600, #555)'
    },
    inner: {
      marginTop: 6,
      paddingTop: 6,
      borderTop: '1px dashed var(--light-400, #e0e0e0)',
      display: 'grid',
      gap: 6
    },
    smallBtns: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: 6,
      marginBottom: 4
    },
    pillBtn: {
      borderRadius: 999
    },
    optionRow: {
      display: 'flex',
      alignItems: 'center',
      padding: '2px 0'
    },
    optionLabel: {
      marginLeft: 6,
      fontSize: 12,
      color: 'var(--dark-700, #333)'
    },
    applyOverlay: {
      position: 'absolute' as const,
      inset: 0,
      background: 'rgba(255,255,255,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5
    },
    applyOverlayInner: {
      background: '#ffffff',
      padding: '8px 14px',
      borderRadius: 999,
      boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--dark-700,#333)'
    }
  }

  // --------------------------- lógica DS ---------------------------

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

  useEffect(() => {
    if (!ready || !dsRef.current || !dsId) return
    const schema = dsRef.current.getSchema()
    const layerFields = Object.keys(schema?.fields ?? {})
    const present = TARGET_FIELDS.filter(f => layerFields.includes(f))
    setAvailableFields(present)
    if (present.length === 0) setError('Los campos de filtro no existen en esta capa.')

    const cached = GLOBAL_CACHE[dsId]
    if (cached) {
      setValuesByField({ ...cached.valuesByField })
      setSelectedByField(cloneSelected(cached.selectedByField))
    }
  }, [ready, dsId])

  useEffect(() => {
    if (!ready || !dsRef.current || availableFields.length === 0 || !dsId) return
    if (GLOBAL_CACHE[dsId]?.valuesByField && Object.keys(GLOBAL_CACHE[dsId].valuesByField).length) {
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    const load = async (field: string) => {
      const q: any = {
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
        setSelectedByField(prev => ({ ...prev, [field]: new Set(uniq) }))
      }
    }

    ;(async () => {
      try {
        for (const f of availableFields) await load(f)
      } catch (e) {
        console.error(e)
        if (!cancelled) setError('Error consultando categorías.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => { cancelled = true }
  }, [ready, availableFields, dsId])

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

  const applyWhere = async (overrideSelected?: Dict<Set<string>>) => {
    const ds = dsRef.current
    if (!ds || availableFields.length === 0) return

    const selection = overrideSelected ?? selectedByField
    const parts: string[] = []

    for (const field of availableFields) {
      const all = valuesByField[field] ?? []
      const sel = selection[field]
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
      if (on) next.add(value)
      else next.delete(value)
      return { ...prev, [field]: next }
    })
  }

  const toggleOpen = (field: string) => setOpenField(prev => (prev === field ? null : field))

  const labelFor = (raw: string) => (raw === NULL_TOKEN ? '(valor vacío)' : raw)

  const clearAll = async (applyNow = false) => {
    const next: Dict<Set<string>> = {}
    for (const f of availableFields) next[f] = new Set(valuesByField[f] ?? [])

    setSelectedByField(next)
    setOpenField(null)

    if (dsId) {
      if (!GLOBAL_CACHE[dsId]) {
        GLOBAL_CACHE[dsId] = {
          availableFields: [...availableFields],
          valuesByField: { ...valuesByField },
          selectedByField: {} as any
        }
      }
      GLOBAL_CACHE[dsId].selectedByField = Object.fromEntries(
        Object.entries(next).map(([k, v]) => [k, new Set(v)])
      ) as any
    }

    if (applyNow) {
      await applyWhere(next)
    }
  }

  useEffect(() => {
    const ts = Number(doClearAllTs) || 0
    if (!ts || ts === lastHandledTs.current) return

    const readyValues =
      availableFields.length > 0 &&
      availableFields.every(f => Array.isArray(valuesByField[f]))

    if (!readyValues) return

    void clearAll(true)
    lastHandledTs.current = ts
  }, [doClearAllTs, availableFields, valuesByField])

  // Botón Consultar: añade pequeña espera visual
  const handleConsultar = async () => {
    try {
      setApplying(true)
      await sleep(350) // pequeña pausa para que se note el estado de carga
      await applyWhere()
      setLastUpdated(new Date().toLocaleTimeString())
    } finally {
      setApplying(false)
    }
  }

  // pequeño resumen de filtros activos
  const totalCampos = availableFields.length
  const camposFiltrados = availableFields.filter(f => {
    const all = valuesByField[f] ?? []
    const sel = selectedByField[f]
    if (!sel) return false
    return sel.size > 0 && sel.size < all.length
  }).length

  return (
    <div style={styles.wrapper}>
      {/* Overlay de “espera” al aplicar filtros */}
      {applying && (
        <div style={styles.applyOverlay}>
          <div style={styles.applyOverlayInner}>
            <Loading />
            <span>Actualizando gráficos…</span>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div style={styles.header}>
      <div style={styles.headerLeft} title="Filtros">
        <div style={styles.titleIcon}>
          <svg
            viewBox="0 0 24 24"
            width={14}
            height={14}
            aria-hidden="true"
            focusable="false"
            style={{ display: 'block' }}
          >
            {/* Icono tipo embudo/funnel */}
            <path
              d="M4 4h16l-5.5 6.6v4.7l-4 2.5v-7.2L4 4z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div style={styles.headerRight}>
        <Button
          size="sm"
          type="primary"
          onClick={handleConsultar}
          disabled={!ready || loading || availableFields.length === 0 || applying}
        >
          {applying ? 'Consultando…' : 'Consultar'}
        </Button>
        <Button
          size="sm"
          type="default"
          onClick={() => { void clearAll(false) }}
          disabled={applying}
          title="Restablece todos los filtros (requiere Consultar)"
        >
          Limpiar
        </Button>
      </div>
    </div>

      {/* CONTENIDO */}
      <div style={styles.content}>
        {/* Estado / avisos */}
        <div style={styles.badgeRow}>
          {!dsId
            ? <span style={{ ...styles.badge, background: '#ffe9e5', color: '#b43424' }}>Sin DataSource configurado</span>
            : (
              <>
                <span style={styles.badge}>
                  Campos: <strong>{totalCampos}</strong>
                </span>
                <span style={styles.badge}>
                  Filtros activos: <strong>{camposFiltrados}</strong>
                </span>
                {lastUpdated && (
                  <span style={{ ...styles.badge, opacity: 0.8 }}>
                    Última consulta: {lastUpdated}
                  </span>
                )}
              </>
              )}
        </div>

        {error && <Alert type="error" text={error} className="mt-1 mb-1" />}
        {loading && <Loading />}

        {!dsId && (
          <Alert
            type="warning"
            text="Selecciona un DataSource en el panel de configuración del widget."
            className="mt-2"
          />
        )}

        {/* grupos de filtros */}
        {availableFields.map((field) => {
          const vals = valuesByField[field] ?? []
          const sel = selectedByField[field] ?? new Set<string>()
          const isOpen = openField === field

          const allCount = vals.length
          const isFiltered = sel.size > 0 && sel.size < allCount
          const isAll = allCount > 0 && sel.size === allCount

          const statusDotStyle: React.CSSProperties = {
            width: 8,
            height: 8,
            borderRadius: '50%',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
            backgroundColor: isFiltered
              ? '#ffb020'   // ámbar: parcialmente filtrado
              : isAll
                ? '#22a160' // verde: todo seleccionado
                : '#d0d0d0' // gris: nada
          }

          const chipStyle: React.CSSProperties = {
            ...styles.chip,
            background: isFiltered ? '#fff4e5' : (styles.chip as any).background,
            color: isFiltered ? '#b15c00' : (styles.chip as any).color
          }

          return (
            <div key={field} style={styles.groupCard}>
              <div style={styles.headRow} onClick={() => toggleOpen(field)}>
                <div style={styles.headLeft}>
                  <div style={styles.chevronBox}>
                    {isOpen ? '▾' : '▸'}
                  </div>
                  <span>{prettyField(field)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={statusDotStyle} />
                  <span style={chipStyle}>
                    {sel.size}/{vals.length || 0}
                  </span>
                </div>
              </div>

              <Collapse isOpen={isOpen}>
                <div style={styles.inner}>
                  <div style={styles.smallBtns}>
                    <Button
                      size="sm"
                      type="tertiary"
                      style={styles.pillBtn}
                      onClick={() =>
                        setSelectedByField(prev => ({ ...prev, [field]: new Set(vals) }))
                      }
                    >
                      Seleccionar todo
                    </Button>
                    <Button
                      size="sm"
                      type="tertiary"
                      style={styles.pillBtn}
                      onClick={() =>
                        setSelectedByField(prev => ({ ...prev, [field]: new Set() }))
                      }
                    >
                      Deseleccionar todo
                    </Button>
                  </div>

                  {vals.length === 0 && (
                    <div style={{ fontSize: 12, color: 'var(--dark-500,#666)' }}>
                      Cargando valores…
                    </div>
                  )}

                  {vals.map(v => (
                    <div key={`${field}|${v}`} style={styles.optionRow}>
                      <Checkbox
                        checked={sel.has(v)}
                        onChange={(_, on) => toggle(field, v, on)}
                      />
                      <span style={styles.optionLabel}>{labelFor(v)}</span>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          )
        })}

        {ready && dsId && availableFields.length === 0 && !error && !loading && (
          <Alert
            type="info"
            text="No se han encontrado campos configurados para filtrar en esta capa."
          />
        )}
      </div>
    </div>
  )
}
