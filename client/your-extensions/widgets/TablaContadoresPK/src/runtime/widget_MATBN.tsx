/** @jsx jsx */
import { React, jsx, AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import * as XLSX from 'xlsx'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import './styles.css' // opcional, para estilos bonitos

type Rec = Record<string, any>

// --- utils ---
const toStr = (v: any) => (v == null ? '' : String(v))

// Clave segura para Tabulator (evita números/“.” en field)
const keyFromPk = (v: any) =>
  ('c_' + String(v).trim().replaceAll('.', '_').replace(/[^\w]/g, '_'))

// Construye pivote: filas=rowField (Factor concurrente), columnas=colField (PK)
function buildPivot(records: Rec[], rowField: string, colField: string) {
  const colLabels = Array.from(new Set(records.map(r => Number(r[colField]))))
    .filter(v => !isNaN(v))
    .sort((a, b) => a - b)
    .map(v => v.toString())

  const rowVals = Array.from(new Set(records.map(r => toStr(r[rowField]) || 'Sin valor'))).sort()

  const rows = rowVals.map(rVal => {
    const row: Record<string, any> = { Categoria: rVal }
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

  return { colLabels, rows }
}

function exportToExcelFromTabulator(tab: Tabulator | undefined, fileName: string) {
  if (!tab) return
  const data = tab.getData()
  const ws = XLSX.utils.json_to_sheet(data as any[])
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Tabla')
  XLSX.writeFile(wb, fileName)
}

const CustomFactorPkPivotTable = (props: AllWidgetProps<any>) => {
  const [jmvs, setJmvs] = React.useState<JimuMapView>()
  const [records, setRecords] = React.useState<Rec[]>([])
  const [layerRef, setLayerRef] = React.useState<__esri.FeatureLayer | null>(null)
  const [currentWhere, setCurrentWhere] = React.useState<string>('1=1')

  const tableRef = React.useRef<HTMLDivElement>(null)
  const tabRef = React.useRef<Tabulator>()

  // Ajusta estos nombres si en tu capa son distintos
  const rowField = 'Factor_concurrente_1' // campo de filas (alias/fieldName real)
  const colField = 'PK'                 // campo de columnas

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

    // (Opcional) inspeccionar campos para verificar nombres reales
    // console.log("📑 Campos:", layer.fields.map((f:any)=>({name:f.name, alias:f.alias})))

    const runQuery = () => {
      const q = layer.createQuery()
      const where = layer.definitionExpression && layer.definitionExpression.trim() !== '' ? layer.definitionExpression : '1=1'
      q.where = where
      setCurrentWhere(where)
      q.outFields = ['*'] // trae todos; optimiza si quieres
      q.returnGeometry = false

      layer.queryFeatures(q).then((res: any) => {
        const feats = res.features || []
        const recs = feats.map((f: any) => f.attributes)
        setRecords(recs)
      }).catch((err: any) => console.error('Error query:', err))
    }

    const watcherDef = layer.watch('definitionExpression', () => runQuery())
    const watcherRend = layer.watch('renderer', () => runQuery())

    runQuery()

    return () => {
      watcherDef?.remove?.()
      watcherRend?.remove?.()
    }
  }, [jmvs])

  React.useEffect(() => {
    if (!tableRef.current) return

    if (tabRef.current) {
      tabRef.current.destroy()
      tabRef.current = undefined
    }

    if (!records.length) {
      tableRef.current.innerHTML = '<p style="padding:8px">No hay datos para mostrar</p>'
      return
    }

    const { colLabels, rows } = buildPivot(records, rowField, colField)

    const columns: any[] = [
      {
        title: 'Factor concurrente',
        field: 'Categoria',
        headerHozAlign: 'left',
        hozAlign: 'left',
        frozen: true,
        minWidth: 220
      },
      ...colLabels.map(label => ({
        title: String(label),      // visible (PK original, puede tener números/puntos)
        field: keyFromPk(label),   // clave segura interna
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        width: 80
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
          { label: 'Exportar a Excel', action: () => exportToExcelFromTabulator(tabRef.current, 'factor_pk.xlsx') }
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
      nestedFieldSeparator: false // evita interpretar '.' en nombres de campo
    })
  }, [records])

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white" style={{ height: '100%' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={v => setJmvs(v)}
      />

      {/* Panel de diagnóstico */}
      <div className="diag-bar">
        <b>Filas:</b> {rowField} &nbsp;|&nbsp;
        <b>Columnas:</b> {colField} &nbsp;|&nbsp;
        <b>Registros:</b> {records.length} &nbsp;|&nbsp;
     
      </div>

      <div className="custom-tabulator" ref={tableRef} style={{ flex: 1, minHeight: 0, overflow: 'auto' }} />
    </div>
  )
}

export default CustomFactorPkPivotTable
