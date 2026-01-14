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
const keyFromPk = (v: any) => 'c_' + String(v).trim().replaceAll('.', '_').replace(/[^\w]/g, '_')

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
  const alpha = a == null ? 1 : a
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha})`
}

function colorFromSymbol(sym: any): string {
  if (!sym) return '#888888'
  const c = (sym as any).color

  if (c?.toCss || c?.toCSS) {
    try {
      return (c.toCss?.(true) || c.toCSS?.(true)) as string
    } catch {
      /* ignore */
    }
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
    rowValues.forEach(v => {
      map[v] = dict[v] ?? '#888888'
    })
    return map
  }

  if (r.type === 'class-breaks') {
    const cbis = (r.classBreakInfos || r.infos || []) as any[]
    rowValues.forEach(v => {
      const num = parseFloat(v.replace(',', '.'))
      const info = cbis.find((it: any) => {
        const min = it.minValue ?? -Infinity
        const max = it.maxValue ?? Infinity
        return !isNaN(num) && num >= min && num <= max
      })
      map[v] = colorFromSymbol(info?.symbol) || '#888888'
    })
    return map
  }

  rowValues.forEach(v => {
    map[v] = '#888888'
  })
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
      const cnt = records.reduce((acc, r) => acc + (toStr(r[rowField]) === rVal && toStr(r[colField]) === label ? 1 : 0), 0)
      row[keyFromPk(label)] = cnt
      total += cnt
    })
    row.Total = total
    row.__menu = ''
    row.__pad = ''
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

// ---------- DOM helpers: coger SOLO el holder NO frozen ----------
function getTabEl(tab: Tabulator | undefined, mount: HTMLDivElement | null): HTMLElement | null {
  const t: any = tab as any
  return (t?.element ?? mount?.querySelector?.('.tabulator') ?? null) as HTMLElement | null
}

type TabParts = {
  holder?: HTMLElement // holder NO frozen (el que scrollea en X)
}

function resolveTabParts(tabEl: HTMLElement | null): TabParts {
  if (!tabEl) return {}

  const holders = Array.from(tabEl.querySelectorAll<HTMLElement>('.tabulator-tableholder, .tabulator-tableHolder'))
  // Nos quedamos con el holder que NO está dentro de .tabulator-frozen
  const holder = holders.find(h => !h.closest('.tabulator-frozen')) || undefined
  return { holder }
}

// ---------- métricas (el gráfico sigue a la tabla) ----------
type Metrics = {
  kmW: number
  frozenW: number
  rightPadW: number
}
const nearlyEq = (a: number, b: number) => Math.abs(a - b) <= 0.5

function computeMetrics(tab: Tabulator | undefined, colLabels: string[], fallbacks: Metrics): Metrics {
  if (!tab || !colLabels.length) return fallbacks

  const kmField = keyFromPk(colLabels[0])
  const kmW = (tab.getColumn(kmField) as any)?.getWidth?.() ?? fallbacks.kmW

  const sw = (tab.getColumn('__color') as any)?.getWidth?.() ?? 0
  const cw = (tab.getColumn('Categoria') as any)?.getWidth?.() ?? 0
  const frozenW = sw + cw

  const totalW = (tab.getColumn('Total') as any)?.getWidth?.() ?? 0
  const menuW = (tab.getColumn('__menu') as any)?.getWidth?.() ?? 0
  const padW = (tab.getColumn('__pad') as any)?.getWidth?.() ?? 0
  const rightPadW = totalW + menuW + padW

  return { kmW, frozenW, rightPadW }
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

  // chart
  const chartCanvasRef = React.useRef<HTMLCanvasElement>(null)
  const chartRef = React.useRef<Chart<'bar'> | null>(null)
  const chartRightInnerRef = React.useRef<HTMLDivElement>(null)

  // scrollbar compartido
  const hScrollRef = React.useRef<HTMLDivElement>(null)
  const hScrollInnerRef = React.useRef<HTMLDivElement>(null)

  const partsRef = React.useRef<TabParts>({})
  const scrollXRef = React.useRef<number>(0)
  const syncingRef = React.useRef<'bar' | 'table' | null>(null)

  const [pivot, setPivot] = React.useState<{ colLabels: string[]; rows: any[] }>({ colLabels: [], rows: [] })
  const [leftShiftPx, setLeftShiftPx] = React.useState(0)

  // fallbacks
  const FALLBACK: Metrics = React.useMemo(() => ({ kmW: 80, frozenW: 38 + 140, rightPadW: 120 + 34 + 18 }), [])
  const metricsRef = React.useRef<Metrics>(FALLBACK)
  const [metrics, setMetrics] = React.useState<Metrics>(FALLBACK)

  const CHART_H = 360

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

      layer
        .queryFeatures(q)
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
    if (!tableMountRef.current) return

    if (tabRef.current) {
      tabRef.current.destroy()
      tabRef.current = undefined
    }
    partsRef.current = {}

    if (!records.length || !rowField) {
      tableMountRef.current.innerHTML = '<p style="padding:8px">No hay datos para mostrar</p>'
      setPivot({ colLabels: [], rows: [] })
      const bar = hScrollRef.current
      const inner = hScrollInnerRef.current
      if (bar && inner) inner.style.width = `${bar.clientWidth + 2}px`
      return
    }

    const tmpRowVals = Array.from(new Set(records.map(r => toStr(r[rowField]) || 'Sin valor'))).sort()
    const colorMap = buildColorMap(layerRef, rowField, tmpRowVals)

    const { colLabels, rows } = buildPivot(records, rowField, colField, colorMap)
    setPivot({ colLabels, rows })

    const SWATCH_W = 38
    const CAT_W = 140
    const KM_COL_W = metricsRef.current.kmW || 80
    const TOTAL_W = 120
    const MENU_W = 34
    const PAD_W = 18

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
        field: '__menu',
        formatter: () => '',
        headerSort: false,
        width: MENU_W,
        widthGrow: 0,
        headerMenu: [{ label: 'Exportar a Excel', action: () => exportToExcelFromTabulator(tabRef.current, 'factor_pk.xlsx') }]
      },
      {
        title: '',
        field: '__pad',
        headerSort: false,
        width: PAD_W,
        widthGrow: 0,
        formatter: () => ''
      }
    ]

    const tab = new Tabulator(tableMountRef.current, {
      data: rows,
      layout: 'fitDataTable',
      height: '100%',
      placeholder: 'No hay datos para mostrar',
      columns,
      columnDefaults: { headerSort: true },
      initialSort: [{ column: 'Total', dir: 'desc' }],
      nestedFieldSeparator: false,
      renderComplete: () => {
        const next = computeMetrics(tabRef.current, colLabels, metricsRef.current)
        const prev = metricsRef.current
        const changed = !nearlyEq(next.kmW, prev.kmW) || !nearlyEq(next.frozenW, prev.frozenW) || !nearlyEq(next.rightPadW, prev.rightPadW)
        if (changed) {
          metricsRef.current = next
          setMetrics(next)
        }

        const tabEl = getTabEl(tabRef.current, tableMountRef.current)
        partsRef.current = resolveTabParts(tabEl)
      }
    })

    tabRef.current = tab
  }, [records, rowField, layerRef])

  // construir chart (ancho SIEMPRE por kmW de tabla)
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

    const labels = pivot.colLabels
    const rowsSorted = [...pivot.rows].sort((a, b) => (b.Total ?? 0) - (a.Total ?? 0))

    const plotW = Math.max(1, labels.length) * metrics.kmW
    const guessAxisW = Math.max(90, metrics.frozenW)
    const initialW = plotW + guessAxisW + 10

    canvas.width = Math.round(initialW)
    canvas.height = CHART_H
    ;(canvas.style as any).width = `${Math.round(initialW)}px`
    ;(canvas.style as any).height = `${CHART_H}px`

    if (chartRef.current) {
      chartRef.current.destroy()
      chartRef.current = null
    }

    const datasets = rowsSorted.map(r => ({
      label: r.Categoria,
      data: labels.map(km => Number(r[keyFromPk(km)] ?? 0)),
      backgroundColor: r.__color || '#888888',
      stack: 'stack1',
      borderWidth: 0,
      // mantiene “hueco” entre barras
      categoryPercentage: 0.9,
      barPercentage: 0.85
    }))

    const options: ChartOptions<'bar'> = {
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      plugins: { legend: { display: false } },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          stacked: true,
          offset: true,
          bounds: 'ticks',
          ticks: { autoSkip: true, maxRotation: 0 },
          grid: { offset: true }
        },
        y: { stacked: true, beginAtZero: true, ticks: { precision: 0, padding: 2 } }
      }
    }

    const chart = new Chart(canvas.getContext('2d')!, { type: 'bar', data: { labels, datasets } as any, options })
    chartRef.current = chart

    // ajustar leftShift (chartArea.left)
    requestAnimationFrame(() => {
      try {
        const caLeft = Math.round((chartRef.current as any)?.chartArea?.left ?? 0)
        setLeftShiftPx(prev => (prev === caLeft ? prev : caLeft))
      } catch {
        setLeftShiftPx(0)
      }
    })
  }, [pivot, metrics.kmW, metrics.frozenW])

  // sincronizar tamaños + scrollWidth real desde el holder de Tabulator
  React.useEffect(() => {
    const bar = hScrollRef.current
    const inner = hScrollInnerRef.current
    if (!bar || !inner) return

    const resolve = (tries = 0) => {
      const tabEl = getTabEl(tabRef.current, tableMountRef.current)
      const parts = resolveTabParts(tabEl)
      partsRef.current = parts

      // si todavía no está listo, reintenta
      if (!parts.holder) {
        inner.style.width = `${bar.clientWidth + 2}px`
        if (tries < 30) requestAnimationFrame(() => resolve(tries + 1))
        return
      }

      // ✅ ancho REAL scrolleable de la tabla
      const scrollW = parts.holder.scrollWidth
      const clientW = parts.holder.clientWidth
      inner.style.width = `${Math.max(scrollW, clientW) + 2}px`

      // reaplicar scroll guardado
      const x = scrollXRef.current
      syncingRef.current = 'bar'
      bar.scrollLeft = x
      parts.holder.scrollLeft = x
      syncingRef.current = null

      // gráfico sigue al scrollbar
      if (chartRightInnerRef.current) chartRightInnerRef.current.style.transform = `translateX(${-x}px)`
    }

    requestAnimationFrame(() => resolve(0))
  }, [pivot.colLabels.length, metrics.kmW, metrics.rightPadW])

  // barra -> tabla + gráfico
  React.useEffect(() => {
    const bar = hScrollRef.current
    const chartInner = chartRightInnerRef.current
    if (!bar || !chartInner) return

    let raf = 0
    const onScroll = () => {
      if (syncingRef.current === 'table') return
      const x = bar.scrollLeft
      scrollXRef.current = x

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        chartInner.style.transform = `translateX(${-x}px)`
        const holder = partsRef.current.holder
        if (holder) {
          syncingRef.current = 'bar'
          holder.scrollLeft = x
          syncingRef.current = null
        }
      })
    }

    bar.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      bar.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // tabla (trackpad) -> barra + gráfico (por si alguien scrollea encima de la tabla)
  React.useEffect(() => {
    let holder: HTMLElement | undefined

    const hook = () => {
      const tabEl = getTabEl(tabRef.current, tableMountRef.current)
      const parts = resolveTabParts(tabEl)
      partsRef.current = parts
      holder = parts.holder
      if (!holder) return

      const bar = hScrollRef.current
      const chartInner = chartRightInnerRef.current
      if (!bar || !chartInner) return

      const onHolderScroll = () => {
        if (syncingRef.current === 'bar') return
        const x = holder!.scrollLeft
        scrollXRef.current = x
        syncingRef.current = 'table'
        bar.scrollLeft = x
        syncingRef.current = null
        chartInner.style.transform = `translateX(${-x}px)`
      }

      holder.addEventListener('scroll', onHolderScroll, { passive: true })
      return () => holder?.removeEventListener('scroll', onHolderScroll)
    }

    const cleanup = hook()
    return () => {
      cleanup?.()
    }
  }, [pivot.colLabels.length])

  // left spacer = frozenW - leftShift (para alinear chart con tabla)
  const leftSpacerW = Math.max(0, metrics.frozenW - leftShiftPx)

  return (
    <div className="h-full flex flex-col bg-white" style={{ height: '100%', overflow: 'hidden' }}>
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={v => setJmvs(v)} />

      <div className="diag-bar">
        <b>Filas (renderer):</b> {getAlias(layerRef, rowField) || '(sin resolver)'} &nbsp;|&nbsp;
        <b>Columnas:</b> {getAlias(layerRef, 'Kilometro')} &nbsp;|&nbsp;
        <b>Registros:</b> {records.length} &nbsp;|&nbsp;
        <b>Filtro:</b> {currentWhere}
      </div>

      {/* --- GRÁFICO --- */}
      <div className="acc-chart-wrapper" style={{ flex: 2, minHeight: 0 }}>
        <div className="acc-chart-row" style={{ flex: '1 1 auto', minHeight: 0 }}>
          <div className="acc-chart-left" style={{ width: leftSpacerW }} />
          <div className="acc-chart-right-viewport">
            <div className="acc-chart-right-inner" ref={chartRightInnerRef} style={{ display: 'flex', alignItems: 'stretch' }}>
              <canvas ref={chartCanvasRef} />
              <div style={{ width: metrics.rightPadW, flex: `0 0 ${metrics.rightPadW}px` }} />
            </div>
          </div>
        </div>

        {/* --- SCROLLBAR COMPARTIDO --- */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ width: leftSpacerW }} />
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
