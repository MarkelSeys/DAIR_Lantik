/** @jsx jsx */
import { React, jsx, AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import * as XLSX from 'xlsx'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import './styles.css'
 
type Rec = Record<string, any>
 
// ---------- utils ----------
const toStr = (v: any) => (v == null ? '' : String(v))
 
// Clave segura para Tabulator (evita números/“.” en field)
const keyFromPk = (v: any) =>
  ('c_' + String(v).trim().replaceAll('.', '_').replace(/[^\w]/g, '_'))
 
function getAlias(layer: __esri.FeatureLayer | null, fieldName?: string) {
  if (!layer || !fieldName) return ''
  const f = (layer.fields as __esri.Field[]).find(ff => ff.name === fieldName)
  return f?.alias || fieldName
}
 
// Detecta el campo que usa la simbología (renderer) de la capa
function getSymbologyField(layer: __esri.FeatureLayer | null): string {
  const r: any = layer?.renderer
  if (!r) return ''
  if (r.type === 'unique-value') return r.field || r.field1 || r.field2 || r.field3 || ''
  if (r.type === 'class-breaks') return r.field || ''
  return (r as any).field || ''
}
 
// ---------- colores desde renderer ----------
function rgbaStr(r: number, g: number, b: number, a?: number) {
  const alpha = (a == null ? 1 : a)
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha})`
}
 
function colorFromSymbol(sym: any): string {
  if (!sym) return '#888888'
  const c = (sym as any).color
  if (c?.toCss || c?.toCSS) {
    try { return (c.toCss?.(true) || c.toCSS?.(true)) as string } catch { /* ignore */ }
  }
  if (typeof c?.r === 'number' && typeof c?.g === 'number' && typeof c?.b === 'number') {
    return rgbaStr(c.r, c.g, c.b, typeof c.a === 'number' ? c.a : 1)
  }
  const sl = (sym as any).symbolLayers?.items?.[0] || (sym as any).symbolLayers?.[0]
  const mat = sl?.material
  const arr = mat?.color || sl?.color
  if (Array.isArray(arr) && (arr.length === 3 || arr.length === 4)) {
    const [r, g, b, a] = arr
    return rgbaStr(r, g, b, a)
  }
  const o = (sym as any).outline?.color
  if (typeof o?.r === 'number') return rgbaStr(o.r, o.g, o.b, typeof o.a === 'number' ? o.a : 1)
  return '#888888'
}
 
// Devuelve un mapa valor->color
function buildColorMap(layer: __esri.FeatureLayer | null, rowField: string, rowValues: string[]): Record<string, string> {
  const map: Record<string, string> = {}
  if (!layer || !rowField) return map
  const r: any = layer.renderer
  if (!r) return map
 
  if (r.type === 'unique-value') {
    const uis = (r.uniqueValueInfos || r.infos || []) as any[]
    const dict: Record<string, string> = {}
    uis.forEach(info => {
      const key = toStr(info.value)
      dict[key] = colorFromSymbol(info.symbol)
    })
    rowValues.forEach(v => { map[v] = dict[v] ?? '#888888' })
    return map
  }
 
  if (r.type === 'class-breaks') {
    const cbis = (r.classBreakInfos || r.infos || []) as any[]
    rowValues.forEach(v => {
      const num = parseFloat(v.replace(',', '.'))
      const info = cbis.find((it: any) => {
        const min = (it.minValue ?? -Infinity)
        const max = (it.maxValue ?? Infinity)
        return !isNaN(num) && num >= min && num <= max
      })
      map[v] = colorFromSymbol(info?.symbol) || '#888888'
    })
    return map
  }
 
  rowValues.forEach(v => { map[v] = '#888888' })
  return map
}
 
// Construye pivote
function buildPivot(records: Rec[], rowField: string, colField: string, colorMap: Record<string, string>) {
  const colLabels = Array.from(new Set(records.map(r => Number(r[colField]))))
    .filter(v => !isNaN(v))
    .sort((a, b) => a - b)
    .map(v => v.toString())
 
  const rowVals = Array.from(new Set(records.map(r => toStr(r[rowField]) || 'Sin valor'))).sort()
 
  const rows = rowVals.map(rVal => {
    const row: Record<string, any> = {
      __color: colorMap[rVal] || '#888888',
      Categoria: rVal
    }
    let total = 0
    colLabels.forEach(label => {
      const cnt = records.reduce((acc, r) => {
        return acc + (toStr(r[rowField]) === rVal && toStr(r[colField]) === label ? 1 : 0)
      }, 0)
      row[keyFromPk(label)] = cnt
      total += cnt
    })
    row['Total'] = total
    return row
  })
 
  return { colLabels, rowVals, rows }
}
 
function exportToExcelFromTabulator(tab: Tabulator | undefined, fileName: string) {
  if (!tab) return
  const data = tab.getData()
  const ws = XLSX.utils.json_to_sheet(data as any[])
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Tabla')
  XLSX.writeFile(wb, fileName)
}
 
// ---------- widget ----------
const CustomFactorPkPivotTable = (props: AllWidgetProps<any>) => {
  const [jmvs, setJmvs] = React.useState<JimuMapView>()
  const [layerRef, setLayerRef] = React.useState<__esri.FeatureLayer | null>(null)
  const [records, setRecords] = React.useState<Rec[]>([])
  const [currentWhere, setCurrentWhere] = React.useState<string>('1=1')
  const [rowField, setRowField] = React.useState<string>('') // fila dinámica
  const colField = 'PK'
 
  const tableRef = React.useRef<HTMLDivElement>(null)
  const tabRef = React.useRef<Tabulator>()
 
  // estado para contraer/expandir categoría
  const [catCollapsed, setCatCollapsed] = React.useState(false)
 
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
 
    const resolveRowField = () => {
      const symField = getSymbologyField(layer)
      setRowField(symField || 'Factor_concurrente_1')
    }
 
    const runQuery = () => {
      const q = layer.createQuery()
      const where = layer.definitionExpression && layer.definitionExpression.trim() !== '' ? layer.definitionExpression : '1=1'
      q.where = where
      setCurrentWhere(where)
      q.outFields = ['*']
      q.returnGeometry = false
 
      layer.queryFeatures(q)
        .then((res: any) => {
          const feats = res.features || []
          setRecords(feats.map((f: any) => f.attributes))
        })
        .catch((err: any) => console.error('Error query:', err))
    }
 
    const watcherDef = layer.watch('definitionExpression', () => runQuery())
    const watcherRend = layer.watch('renderer', () => {
      resolveRowField()
      runQuery()
    })
 
    resolveRowField()
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
 
    if (!records.length || !rowField) {
      tableRef.current.innerHTML = '<p style="padding:8px">No hay datos para mostrar</p>'
      return
    }
 
    const tmpRowVals = Array.from(new Set(records.map(r => toStr(r[rowField]) || 'Sin valor'))).sort()
    const colorMap = buildColorMap(layerRef, rowField, tmpRowVals)
 
    const { colLabels, rowVals, rows } = buildPivot(records, rowField, colField, colorMap)
 
    const columns: any[] = [
      // swatch color (congelado)
      {
        title: '',
        field: '__color',
        headerSort: false,
        width: 36,
        widthGrow: 0,
        hozAlign: 'center',
        headerHozAlign: 'center',
        frozen: true,
        formatter: (cell: any) => {
          const color = cell.getValue() || '#888'
          return `<div style="display:inline-block;width:18px;height:18px;border-radius:4px;border:1px solid rgba(0,0,0,.2);background:${color}" title="${color}"></div>`
        }
      },
 
      // categoría (congelada)
      {
        title: '',
        field: 'Categoria',
        headerHozAlign: 'left',
        hozAlign: 'left',
        frozen: true,
        widthGrow: 0,
        minWidth: 60
      },
 
      // columnas PK
      ...colLabels.map(label => ({
        title: String(label),
        field: keyFromPk(label),
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        widthGrow: 0,
        minWidth: 80
      })),
 
      // total
      {
        title: 'Total',
        field: 'Total',
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        widthGrow: 0,
        minWidth: 80
      },
 
      // menú
      {
        title: '',
        formatter: () => '',
        headerSort: false,
        width: 34,
        widthGrow: 0,
        headerMenu: [
          { label: 'Exportar a Excel', action: () => exportToExcelFromTabulator(tabRef.current, 'factor_pk.xlsx') }
        ]
      }
    ]
 
    tabRef.current = new Tabulator(tableRef.current, {
      data: rows,
      layout: 'fitData',
      height: '100%',
      placeholder: 'No hay datos para mostrar',
      columns,
      columnDefaults: {
        headerSort: true,
        resizable: true
      },
      initialSort: [{ column: 'Total', dir: 'desc' }],
      nestedFieldSeparator: false
    })
  }, [records, rowField, layerRef])
 
  // --- botón contraer/expandir categoría ---
  const toggleCategoryWidth = () => {
    const tab = tabRef.current
    if (!tab) return
    const col = tab.getColumn('Categoria') // field = 'Categoria'
    if (!col) return
 
    if (!catCollapsed) {
      // contraer
      col.setWidth(80)
      col.getCells().forEach((cell: any) => {
        const el = cell.getElement()
        el.style.whiteSpace = 'nowrap'
        el.style.overflow = 'hidden'
        el.style.textOverflow = 'ellipsis'
      })
    } else {
      // expandir
      col.setWidth(240)
      col.getCells().forEach((cell: any) => {
        const el = cell.getElement()
        el.style.whiteSpace = ''
        el.style.overflow = ''
        el.style.textOverflow = ''
      })
    }
    setCatCollapsed(!catCollapsed)
  }
 
  return (
    <div className="h-full flex flex-col overflow-hidden bg-white" style={{ height: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={v => setJmvs(v)}
      />
 
      <div className="diag-bar" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <b>Filas (renderer):</b> {getAlias(layerRef, rowField) || '(sin resolver)'} &nbsp;|&nbsp;
          <b>Columnas:</b> {getAlias(layerRef, 'PK')} &nbsp;|&nbsp;
          <b>Registros:</b> {records.length}
        </div>
 
      </div>
 
      <div
        className="custom-tabulator"
        ref={tableRef}
        style={{ flex: 1, minHeight: 0, overflow: 'auto' }}
      />
    </div>
  )
}
 
export default CustomFactorPkPivotTable