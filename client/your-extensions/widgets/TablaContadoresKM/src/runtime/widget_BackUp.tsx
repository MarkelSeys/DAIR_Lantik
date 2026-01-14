/** @jsx jsx */
import { React, jsx, AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import * as XLSX from 'xlsx'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import './styles.css'
import { Chart, registerables, ChartOptions } from 'chart.js'

Chart.register(...registerables)

type Rec = Record<string, any>

// ---------- utils ----------
const toStr = (v: any) => (v == null ? '' : String(v))
const keyFromPk = (v: any) =>
  ('c_' + String(v).trim().replaceAll('.', '_').replace(/[^\w]/g, '_'))

function getAlias(layer: __esri.FeatureLayer | null, fieldName?: string) {
  if (!layer || !fieldName) return ''
  const f = (layer.fields as __esri.Field[]).find(ff => ff.name === fieldName)
  return f?.alias || fieldName
}

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

// ---------- DOM helpers para mover SOLO la parte NO frozen por transform ----------
function getTabEl(tab: Tabulator | undefined, mount: HTMLDivElement | null): HTMLElement | null {
  const t: any = tab as any
  return (t?.element ?? mount?.querySelector?.('.tabulator') ?? null) as HTMLElement | null
}

type TabXParts = {
  holder?: HTMLElement
  table?: HTMLElement
  headerContents?: HTMLElement
}

function resolveTabXParts(tabEl: HTMLElement | null): TabXParts {
  if (!tabEl) return {}

  const holders = Array.from(tabEl.querySelectorAll<HTMLElement>('.tabulator-tableholder, .tabulator-tableHolder'))
  const holder = holders.find(h => !h.closest('.tabulator-frozen')) || undefined
  if (!holder) return {}

  const table = holder.querySelector<HTMLElement>('.tabulator-table') || undefined

  const header = tabEl.querySelector<HTMLElement>('.tabulator-header')
  const headerContents =
    header?.querySelector<HTMLElement>('.tabulator-header-contents') ||
    header?.querySelector<HTMLElement>('.tabulator-headers') ||
    undefined

  return { holder, table, headerContents }
}

function applyTranslateX(parts: TabXParts, px: number) {
  const t = `translateX(${-px}px)`
  if (parts.table) {
    parts.table.style.transform = t
    parts.table.style.willChange = 'transform'
  }
  if (parts.headerContents) {
    parts.headerContents.style.transform = t
    parts.headerContents.style.willChange = 'transform'
  }
}

// ---------- widget ----------
const CustomFactorPkPivotTable = (props: AllWidgetProps<any>) => {
  const [jmvs, setJmvs] = React.useState<JimuMapView>()
  const [layerRef, setLayerRef] = React.useState<__esri.FeatureLayer | null>(null)

  const [records, setRecords] = React.useState<Rec[]>([])
  const [currentWhere, setCurrentWhere] = React.useState<string>('1=1')

  const [rowField, setRowField] = React.useState<string>('')
  const colField = 'Kilometro'

  const tableMountRef = React.useRef<HTMLDivElement>(null)
  const tabRef = React.useRef<Tabulator>()

  // --- chart ---
  const chartCanvasRef = React.useRef<HTMLCanvasElement>(null)
  const chartRef = React.useRef<Chart<'bar'> | null>(null)
  const chartRightInnerRef = React.useRef<HTMLDivElement>(null)

  // --- scrollbar compartido (SOLO zona derecha) ---
  const hScrollRef = React.useRef<HTMLDivElement>(null)
  const hScrollInnerRef = React.useRef<HTMLDivElement>(null)

  const tabXPartsRef = React.useRef<TabXParts>({})
  const scrollXRef = React.useRef<number>(0)

  const [pivot, setPivot] = React.useState<{ colLabels: string[]; rows: any[] }>({ colLabels: [], rows: [] })
  const [leftShiftPx, setLeftShiftPx] = React.useState(0)

  // tamaños
  const SWATCH_W = 38
  const CAT_W = 140
  const LEFT_SPACER = SWATCH_W + CAT_W
  const KM_COL_W = 80

  const CHART_H = 360
  const TOTAL_W = 120
  const MENU_W = 34
  const rightPadW = TOTAL_W + MENU_W

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

  // construir tabla (Tabulator)
  React.useEffect(() => {
    if (!tableMountRef.current) return

    if (tabRef.current) {
      tabRef.current.destroy()
      tabRef.current = undefined
    }
    tabXPartsRef.current = {}

    if (!records.length || !rowField) {
      tableMountRef.current.innerHTML = '<p style="padding:8px">No hay datos para mostrar</p>'
      setPivot({ colLabels: [], rows: [] })
      // no “matar” la barra
      if (hScrollInnerRef.current && hScrollRef.current) {
        hScrollInnerRef.current.style.width = `${hScrollRef.current.clientWidth + 2}px`
      }
      return
    }

    const tmpRowVals = Array.from(new Set(records.map(r => toStr(r[rowField]) || 'Sin valor'))).sort()
    const colorMap = buildColorMap(layerRef, rowField, tmpRowVals)

    const { colLabels, rows } = buildPivot(records, rowField, colField, colorMap)
    setPivot({ colLabels, rows })

    const columns: any[] = [
      {
        title: '',
        field: '__color',
        headerSort: false,
        width: SWATCH_W,
        widthGrow: 0,
        hozAlign: 'center',
        headerHozAlign: 'center',
        frozen: true,
        formatter: (cell: any) => {
          const color = cell.getValue() || '#888'
          return `<div style="display:inline-block;width:18px;height:18px;border-radius:4px;border:1px solid rgba(0,0,0,.2);background:${color}" title="${color}"></div>`
        }
      },
      {
        title: getAlias(layerRef, rowField) || 'Categoría',
        field: 'Categoria',
        headerHozAlign: 'left',
        hozAlign: 'left',
        width: CAT_W,
        widthGrow: 0,
        frozen: true
      },
      ...colLabels.map(label => ({
        title: String(label),
        field: keyFromPk(label),
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        width: KM_COL_W,
        widthGrow: 0
      })),
      {
        title: 'Total',
        field: 'Total',
        hozAlign: 'center',
        headerHozAlign: 'center',
        sorter: 'number',
        bottomCalc: 'sum',
        width: TOTAL_W,
        widthGrow: 0
      },
      {
        title: '',
        formatter: () => '',
        headerSort: false,
        width: MENU_W,
        widthGrow: 0,
        headerMenu: [
          { label: 'Exportar a Excel', action: () => exportToExcelFromTabulator(tabRef.current, 'factor_pk.xlsx') }
        ]
      }
    ]

    tabRef.current = new Tabulator(tableMountRef.current, {
      data: rows,
      layout: 'fitDataTable',
      height: '100%',
      placeholder: 'No hay datos para mostrar',
      columns,
      columnDefaults: { headerSort: true },
      initialSort: [{ column: 'Total', dir: 'desc' }],
      nestedFieldSeparator: false
    })
  }, [records, rowField, layerRef])

  // construir chart
  React.useEffect(() => {
    const canvas = chartCanvasRef.current
    if (!canvas) return

    if (!pivot.colLabels.length || !pivot.rows.length) {
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
      }
      return
    }

    const rowsSorted = [...pivot.rows].sort((a, b) => (b.Total ?? 0) - (a.Total ?? 0))
    const labels = pivot.colLabels

    const datasets = rowsSorted.map(r => ({
      label: r.Categoria,
      data: labels.map(km => Number(r[keyFromPk(km)] ?? 0)),
      backgroundColor: r.__color || '#888888',
      stack: 'stack1',
      borderWidth: 0
    }))

    const chartW = Math.max(1, labels.length) * KM_COL_W
    canvas.width = chartW
    canvas.height = CHART_H

    if (chartRef.current) {
      chartRef.current.destroy()
      chartRef.current = null
    }

    const options: ChartOptions<'bar'> = {
      responsive: false,
      maintainAspectRatio: false,
      layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
      plugins: {
        legend: { display: false } // ✅ quita la leyenda
      },
      scales: {
        x: { stacked: true, ticks: { autoSkip: true, maxRotation: 0 } },
        y: { stacked: true, beginAtZero: true, ticks: { precision: 0, padding: 2 } }
      }
    }

    chartRef.current = new Chart(canvas.getContext('2d')!, {
      type: 'bar',
      data: { labels, datasets } as any,
      options
    })

    requestAnimationFrame(() => {
      try {
        const caLeft = Math.round((chartRef.current as any)?.chartArea?.left ?? 0)
        setLeftShiftPx(prev => (prev === caLeft ? prev : caLeft))
      } catch {
        setLeftShiftPx(0)
      }
    })
  }, [pivot])

  // resolver partes Tabulator + ancho scrollbar (sin depender del DOM) y reaplicar scrollX
  React.useEffect(() => {
    const bar = hScrollRef.current
    const inner = hScrollInnerRef.current
    if (!bar || !inner) return

    // ✅ ancho esperado SOLO de la zona scrollable (Km + padding derecha)
    const expectedW = (pivot.colLabels.length * KM_COL_W) + rightPadW

    const resolve = (tries = 0) => {
      const tabEl = getTabEl(tabRef.current, tableMountRef.current)
      const parts = resolveTabXParts(tabEl)

      // si aún no está montado, reintenta (pero NO mates el scrollbar)
      if (!parts.holder || !parts.table) {
        inner.style.width = `${Math.max(expectedW, bar.clientWidth) + 2}px`
        if (tries < 30) requestAnimationFrame(() => resolve(tries + 1))
        return
      }

      tabXPartsRef.current = parts

      // ✅ ancho scrollbar por fórmula (evita desaparición al cambiar renderer)
      inner.style.width = `${Math.max(expectedW, bar.clientWidth) + 2}px`

      // reaplicar el scroll actual tras cambios de renderer/campo
      const x = scrollXRef.current
      bar.scrollLeft = x
      applyTranslateX(parts, x)

      // alinear gráfico también
      if (chartRightInnerRef.current) {
        chartRightInnerRef.current.style.transform = `translateX(${-x}px)`
      }
    }

    requestAnimationFrame(() => resolve(0))
  }, [pivot, rowField])

  // scroll coordinado: barra -> (tabla por transform) + (grafico por transform)
  React.useEffect(() => {
    const bar = hScrollRef.current
    const chartInner = chartRightInnerRef.current
    if (!bar || !chartInner) return

    let raf = 0

    const onScroll = () => {
      const x = bar.scrollLeft
      scrollXRef.current = x

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        // chart
        chartInner.style.transform = `translateX(${-x}px)`
        // table (NO frozen)
        applyTranslateX(tabXPartsRef.current, x)
      })
    }

    bar.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      bar.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="h-full flex flex-col bg-white" style={{ height: '100%', overflow: 'hidden' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={v => setJmvs(v)}
      />

      <div className="diag-bar">
        <b>Filas (renderer):</b> {getAlias(layerRef, rowField) || '(sin resolver)'} &nbsp;|&nbsp;
        <b>Columnas:</b> {getAlias(layerRef, 'Kilometro')} &nbsp;|&nbsp;
        <b>Registros:</b> {records.length} &nbsp;|&nbsp;
        <b>Filtro:</b> {currentWhere}
      </div>

      {/* --- GRÁFICO --- */}
      <div className="acc-chart-wrapper" style={{ flex: 2, minHeight: 0 }}>
        <div className="acc-chart-row" style={{ flex: '1 1 auto', minHeight: 0 }}>
          <div className="acc-chart-left" style={{ width: Math.max(0, LEFT_SPACER - leftShiftPx) }} />
          <div className="acc-chart-right-viewport">
            <div
              className="acc-chart-right-inner"
              ref={chartRightInnerRef}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              <canvas ref={chartCanvasRef} />
              <div style={{ width: rightPadW, flex: `0 0 ${rightPadW}px` }} />
            </div>
          </div>
        </div>

        {/* --- SCROLLBAR SOLO PARA LA ZONA DERECHA (NO incluye frozen) --- */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ width: Math.max(0, LEFT_SPACER - leftShiftPx) }} />
          <div className="acc-hscroll" ref={hScrollRef} style={{ flex: '1 1 auto' }}>
            <div className="acc-hscroll-inner" ref={hScrollInnerRef} />
          </div>
        </div>
      </div>

      {/* --- TABLA --- */}
      <div className="custom-tabulator" ref={tableMountRef} style={{ flex: 1, minHeight: 0, overflow: 'hidden' }} />
    </div>
  )
}

export default CustomFactorPkPivotTable
