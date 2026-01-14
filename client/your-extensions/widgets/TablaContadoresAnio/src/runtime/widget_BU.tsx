/** @jsx jsx */
import { React, jsx, AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import * as XLSX from 'xlsx'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import './styles.css'

type Rec = Record<string, any>

// ---------- Utils ----------
function toInt(v: any) {
  const n = Number(v)
  return Number.isFinite(n) ? n : v
}
function normVal(x: any) {
  return String(x ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar acentos
}
function fallbackColorFor(value: any): string {
  const s = String(value || '')
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360
  return `hsl(${h}, 60%, 60%)`
}

// ---------- Colores (robusto) ----------
function colorToCss(c: any): string | undefined {
  console.log(c)
  if (!c) return undefined
  if (typeof c === 'string') return c
  if (Array.isArray(c)) {
    const [r, g, b, a = 255] = c
    if ([r, g, b].every(n => Number.isFinite(n))) return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, a / 255))})`
  } else if (typeof c === 'object') {
    if (typeof c.toJSON === 'function') {
      const j = c.toJSON()
      const { r, g, b } = j
      const a = j.a ?? 1
      if ([r, g, b].every(Number.isFinite)) return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, a))})`
    }
    const r = c.r, g = c.g, b = c.b, a = c.a
    if ([r, g, b].every(Number.isFinite)) return `rgba(${r}, ${g}, ${b}, ${Number.isFinite(a) ? Math.max(0, Math.min(1, a)) : 1})`
  }
  return undefined
}

function symbolToCss(sym: any): string | undefined {
  if (!sym) return undefined
  const direct = colorToCss(sym.color)
  if (direct) return direct
  const sl = Array.isArray(sym.symbolLayers) ? sym.symbolLayers[0] : undefined
  const material = sl?.material?.color
  const outline = sym?.outline?.color || sl?.outline?.color
  return colorToCss(material) || colorToCss(outline)
}

type ColorResolver = (value: any) => string | undefined

function makeColorResolver(layer: __esri.FeatureLayer): { field?: string; resolver: ColorResolver } {
  const r: any = layer.renderer
  if (!r) return { resolver: () => undefined }

  // Unique values
  if (r.type === 'unique-value') {
    const field = r.field || r.field1 || r.field2 || r.field3
    const map = new Map<string, string>()
    const delimiter = r.fieldDelimiter ?? ', '
    ;(r.uniqueValueInfos || []).forEach((info: any) => {
      const css = symbolToCss(info?.symbol)
      // value puede venir como string, número o array (para field2/3)
      const raw = info?.value ?? (Array.isArray(info?.values) ? info.values.join(delimiter) : undefined)
      if (css && raw != null) map.set(normVal(raw), css)
    })
    console.log('🎨 Mapa colores (unique-value):', Array.from(map.entries()))
    return {
      field,
      resolver: (v: any) => map.get(normVal(v))
    }
  }

  // Class breaks
  if (r.type === 'class-breaks') {
    const field = r.field
    const infos = (r.classBreakInfos || []).map((i: any) => ({
      min: i.minValue ?? -Infinity,
      max: i.maxValue ?? Infinity,
      css: symbolToCss(i?.symbol)
    }))
    console.log('🎨 Mapa colores (class-breaks):', infos)
    return {
      field,
      resolver: (v: any) => {
        const n = Number(v)
        if (!Number.isFinite(n)) return undefined
        const hit = infos.find(i => n >= i.min && n < i.max)
        return hit?.css
      }
    }
  }

  console.log('🎨 Renderer no mapeable a color por valor:', r?.type)
  return { field: (r as any).field, resolver: () => undefined }
}

function getAlias(layer: __esri.FeatureLayer, fieldName?: string) {
  if (!fieldName) return ''
  const f = (layer.fields as __esri.Field[]).find(ff => ff.name === fieldName)
  return f?.alias || fieldName
}

// ---------- Pivote ----------
function buildPivot(records: Rec[], yearField: string, typeField: string) {
  const years = Array.from(new Set(records.map(r => toInt(r[yearField]))))
    .filter(y => y !== undefined && y !== null && y !== '')
    .sort((a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0))

  const types = Array.from(new Set(records.map(r => r[typeField] ?? 'Sin valor'))).sort()

  const rows = types.map(t => {
    const row: Record<string, any> = { Tipo: t }
    let total = 0
    years.forEach(y => {
      const cnt = records.reduce((acc, r) => {
        return acc + ((r[typeField] ?? 'Sin valor') === t && String(r[yearField]) === String(y) ? 1 : 0)
      }, 0)
      row[String(y)] = cnt
      total += cnt
    })
    row['Total'] = total
    return row
  })

  return { years, rows }
}

// ---------- Export ----------
function exportToExcelFromTabulator(tab: Tabulator | undefined, fileName: string) {
  if (!tab) return
  const data = tab.getData()
  const ws = XLSX.utils.json_to_sheet(data as any[])
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Tabla')
  XLSX.writeFile(wb, fileName)
}

// ---------- Widget ----------
const CustomAccidentPivotTable = (props: AllWidgetProps<any>) => {
  const [jmvs, setJmvs] = React.useState<JimuMapView>()
  const [records, setRecords] = React.useState<Rec[]>([])
  const [yearField, setYearField] = React.useState<string>('')
  const [typeField, setTypeField] = React.useState<string>('')
  const [layerRef, setLayerRef] = React.useState<__esri.FeatureLayer | null>(null)
  const [currentWhere, setCurrentWhere] = React.useState<string>('1=1')
  const [colorResolver, setColorResolver] = React.useState<ColorResolver>(() => () => undefined)

  const tableRef = React.useRef<HTMLDivElement>(null)
  const tabRef = React.useRef<Tabulator>()

  // localizar capa + watchers
  React.useEffect(() => {
    if (!jmvs) return
    const all = jmvs.view.map.layers?.items ?? []
    const layer: any =
      all.find((it: any) => (it.title || '').toLowerCase().includes('accidentes')) ||
      all.find((it: any) => (it.url || '').toLowerCase().includes('accidentes'))
    if (!layer) {
      console.warn('No se encontró la capa de Accidentes')
      return
    }
    setLayerRef(layer)

    // Año por nombre/alias comunes
    const yearCandidate =
      layer.fields.find((f: any) => ['anio', 'año', 'ano', 'year'].includes((f.name || '').toLowerCase())) ||
      layer.fields.find((f: any) => ['anio', 'año', 'ano', 'year'].includes((f.alias || '').toLowerCase()))
    if (yearCandidate) setYearField(yearCandidate.name)

    // Campo de simbología + colores
    const { field: symField, resolver } = makeColorResolver(layer)
    if (symField) setTypeField(symField)
    setColorResolver(() => resolver)

    const runQuery = () => {
      const q = layer.createQuery()
      const where = layer.definitionExpression && layer.definitionExpression.trim() !== '' ? layer.definitionExpression : '1=1'
      q.where = where
      setCurrentWhere(where)
      q.outFields = ['*']
      q.returnGeometry = false
      layer.queryFeatures(q).then((res: any) => {
        const feats = res.features || []
        setRecords(feats.map((f: any) => f.attributes))
      })
    }

    const watcherDef = layer.watch('definitionExpression', () => runQuery())
    const watcherRend = layer.watch('renderer', () => {
      const { field: f, resolver: r } = makeColorResolver(layer)
      if (f) setTypeField(f)
      setColorResolver(() => r)
      runQuery()
    })

    runQuery()
    return () => {
      watcherDef?.remove?.()
      watcherRend?.remove?.()
    }
  }, [jmvs])

  // construir tabla
  React.useEffect(() => {
    if (!tableRef.current) return
    if (tabRef.current) {
      tabRef.current.destroy()
      tabRef.current = undefined
    }
    if (!records.length || !yearField || !typeField) {
      tableRef.current.innerHTML = '<p style="padding:8px">No hay datos para mostrar</p>'
      return
    }

    const { years, rows } = buildPivot(records, yearField, typeField)
    const typeAlias = layerRef ? getAlias(layerRef, typeField) : 'Categoría'

    const columns: any[] = [
          {
          title: '',
          field: '_color',
          width: 44,                    // un pelín más ancho
          headerSort: false,
          formatter: (cell: any) => {
            const row = cell.getRow().getData()
            const color = colorResolver(row?.Tipo) || fallbackColorFor(row?.Tipo)
            // HTML directo con wrapper flex para centrar
            return `
              <div class="swatch-cell">
                <span class="color-swatch" style="background-color:${color}"></span>
              </div>
            `
          }
        },
      {
        title: typeAlias || 'Categoría',
        field: 'Tipo',
        headerHozAlign: 'left',
        hozAlign: 'left',
        frozen: true,
        minWidth: 220
      },
      ...years.map(y => ({
        title: String(y),
        field: String(y),
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        width: 90
      })),
      {
        title: 'Total',
        field: 'Total',
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        width: 100
      },
      {
        title: '',
        formatter: () => '',
        headerSort: false,
        width: 34,
        headerMenu: [
          { label: 'Exportar a Excel', action: () => exportToExcelFromTabulator(tabRef.current, 'accidentes_pivote.xlsx') }
        ]
      }
    ]

    tabRef.current = new Tabulator(tableRef.current, {
      data: rows,
      layout: 'fitDataStretch',
      height: '100%',
      placeholder: 'No hay datos para mostrar',
      columns,
      columnDefaults: { headerSort: true },
      initialSort: [{ column: 'Total', dir: 'desc' }],
      rowFormatter: (row: any) => {
        const data = row.getData()
        const color = colorResolver(data?.Tipo) || fallbackColorFor(data?.Tipo)
        const el: HTMLElement = row.getElement()
        el.style.setProperty('--row-accent', color)
        el.classList.add('row-accent')
      }
    })
  }, [records, yearField, typeField, layerRef, colorResolver])

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white" style={{ height: '100%' }}>
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={v => setJmvs(v)} />
      <div className="diag-bar">
        <b>Campo Año:</b> <code>{yearField || '(sin resolver)'}</code> &nbsp;|&nbsp;
        <b>Campo simbología:</b> <code>{typeField || '(sin resolver)'}</code> &nbsp;|&nbsp;
        <b>Registros:</b> {records.length} &nbsp;|&nbsp;
        {/* <b>WHERE:</b> <code>{currentWhere}</code> */}
      </div>
      <div className="custom-tabulator" ref={tableRef} style={{ flex: 1, minHeight: 0, overflow: 'auto' }} />
    </div>
  )
}

export default CustomAccidentPivotTable
