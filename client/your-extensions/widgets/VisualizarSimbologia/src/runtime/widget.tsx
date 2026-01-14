import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { AllWidgetProps, DataSource } from 'jimu-core'
import { DataSourceManager } from 'jimu-core'
import { Alert, Button, Checkbox, Collapse, Loading, Select } from 'jimu-ui'

type Dict<T> = { [k: string]: T }
const NULL_TOKEN = '__ESRI_NULL__'

// 🔧 ←——— FÍJALO AQUÍ
const TARGET_FIELDS = ['Tipo_accidente', 'Sentido'] as const

export default function WidgetSimbologia (props: AllWidgetProps<any>) {
  const dsId = props.useDataSources?.[0]?.dataSourceId
  const dsRef = useRef<DataSource | null>(null)

  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Campos que mostraremos en el combo
  const [fields, setFields] = useState<{ name: string; alias: string; type?: string }[]>([])
  const [fieldName, setFieldName] = useState<string>('')

  // Categorías del campo
  const [values, setValues] = useState<string[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  // ---------- 1) DS ----------
  useEffect(() => {
    setError(null)
    setReady(false)
    if (!dsId) return
    const ds = DataSourceManager.getInstance().getDataSource(dsId)
    dsRef.current = ds ?? null
    ds?.ready().then(() => setReady(true)).catch((e) => {
      console.error(e); setError('No se pudo inicializar el DataSource.')
    })
  }, [dsId])

  // ---------- 2) Lee esquema y usa SOLO los TARGET_FIELDS ----------
  useEffect(() => {
    if (!ready || !dsRef.current) return
    const schema = dsRef.current.getSchema()
    const all = Object.values(schema?.fields ?? {})
      .map((f: any) => ({ name: f.name, alias: f.alias ?? f.name, type: f.type }))

    const wanted = all.filter(f => (TARGET_FIELDS as readonly string[]).includes(f.name))
    wanted.sort((a, b) => (a.alias || a.name).localeCompare(b.alias || b.name))
    setFields(wanted)

    if (wanted.length === 0) {
      setError(`No se encontraron en la capa los campos: ${TARGET_FIELDS.join(', ')}`)
    } else {
      setFieldName(prev => prev && wanted.some(f => f.name === prev) ? prev : wanted[0].name)
    }
  }, [ready])

  // ---------- 3) Carga categorías ----------
  useEffect(() => {
    if (!ready || !dsRef.current || !fieldName) return
    let cancelled = false
    setLoading(true); setError(null)

    ;(async () => {
      try {
        const q: any = {
          where: '1=1',
          groupByFieldsForStatistics: [fieldName],
          outStatistics: [{ statisticType: 'count', onStatisticField: fieldName, outStatisticFieldName: 'n' }],
          orderByFields: [`${fieldName} ASC`],
          returnGeometry: false,
          pageSize: 2000
        }
        const res = await dsRef.current!.query(q)
        const vs = (res?.records ?? []).map(r => {
          const v = r.getFieldValue(fieldName)
          return (v === null || typeof v === 'undefined') ? NULL_TOKEN : String(v)
        })
        const uniq = Array.from(new Set(vs))
        if (!cancelled) { setValues(uniq); setSelected(new Set(uniq)) }
      } catch (e) {
        console.error(e); if (!cancelled) setError('Error consultando categorías del campo.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => { cancelled = true }
  }, [ready, fieldName])

  // ---------- 4) Aplica WHERE ----------
  useEffect(() => { void applyWhere() }, [selected, fieldName]) // eslint-disable-line

  const currentFieldType = useMemo(
    () => fields.find(f => f.name === fieldName)?.type ?? 'esriFieldTypeString',
    [fields, fieldName]
  )

  const applyWhere = async () => {
    const ds = dsRef.current
    if (!ds || !fieldName) return

    if (selected.size === 0) { await ds.updateQueryParams({ where: '1=0' }, props.id); return }
    if (selected.size === values.length) { await ds.updateQueryParams({ where: '1=1' }, props.id); return }

    const notNull = Array.from(selected).filter(v => v !== NULL_TOKEN)
    const hasNull = selected.has(NULL_TOKEN)

    const isString = currentFieldType === 'esriFieldTypeString'
    const cooked = notNull.map(v => {
      if (isString) return `'${v.replace(/'/g, "''")}'`
      const n = Number(v); return Number.isFinite(n) ? String(n) : `'${v.replace(/'/g, "''")}'`
    })

    const inClause = cooked.length ? `${fieldName} IN (${cooked.join(',')})` : ''
    const nullClause = hasNull ? `${fieldName} IS NULL` : ''
    const where = [inClause, nullClause].filter(Boolean).map(s => `(${s})`).join(' OR ') || '1=0'

    await ds.updateQueryParams({ where }, props.id)
  }

  // ---------- UI ----------
  const toggleValue = (val: string, on: boolean) => {
    setSelected(prev => {
      const next = new Set(prev); if (on) next.add(val); else next.delete(val); return next
    })
  }
  const selectAll = () => setSelected(new Set(values))
  const selectNone = () => setSelected(new Set())
  const labelFor = (raw: string) => (raw === NULL_TOKEN ? '(vacío)' : raw)

  return (
    <div className="p-3" style={{ overflow: 'auto', height: '100%' }}>
      {!dsId && <Alert type="warning" text="Selecciona un DataSource en la configuración del widget." />}
      {error && <Alert className="mb-2" type="error" text={error} />}

      <div className="mb-3">
        <div className="mb-1 font-weight-bold">Simbología (campo)</div>
        <Select
          size="sm"
          value={fieldName}
          onChange={(e) => setFieldName((e.target as HTMLSelectElement).value)}
          disabled={!ready || fields.length === 0}
        >
          {fields.map(f => (
            <option key={f.name} value={f.name}>{f.alias} ({f.name})</option>
          ))}
        </Select>
      </div>

      <div className="border-top pt-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="font-weight-bold">Categorías de {fieldName || '—'}</div>
          <div className="text-muted" style={{ fontSize: 12 }}>
            {values.length ? `${selected.size}/${values.length}` : '—'}
          </div>
        </div>

        <div className="d-flex gap-2 my-2">
          <Button size="sm" type="tertiary" onClick={selectAll} disabled={loading || values.length === 0}>Todo</Button>
          <Button size="sm" type="tertiary" onClick={selectNone} disabled={loading || values.length === 0}>Ninguno</Button>
        </div>

        {loading && <Loading />}

        {!loading && values.length === 0 && (
          <div className="text-muted">Sin categorías (o pendiente de carga).</div>
        )}

        <Collapse isOpen>
          <div className="pl-1" style={{ maxHeight: 320, overflow: 'auto' }}>
            {values.map(v => (
              <div key={`${fieldName}|${v}`} className="d-flex align-items-center mb-1">
                <Checkbox checked={selected.has(v)} onChange={(_, on) => toggleValue(v, on)} />
                <span className="ml-2">{labelFor(v)}</span>
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  )
}
