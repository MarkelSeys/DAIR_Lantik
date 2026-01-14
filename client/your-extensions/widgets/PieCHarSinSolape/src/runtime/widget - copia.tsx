import React, { useEffect, useMemo, useState } from 'react'
import type { AllWidgetProps } from 'jimu-core'
import {
  DataSourceManager,
  type QueriableDataSource,
  getAppStore,
  appActions
} from 'jimu-core'
import ReactECharts from 'echarts-for-react'
import { type IMState } from 'jimu-core'
import { useSelector } from 'react-redux'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis' // <- añadido

type Row = { name: string; value: number }
type ColorMap = Record<string, string>

const MIN_PCT = 8
// paleta por defecto (ajústala si quieres afinar tonos)
const CATEGORY_COLORS: Record<string, string> = {
  'Alcances': '#ff8a00',
  'Atropellos de animales': '#ffff32',
  'Atropellos de peatones': '#d8ff65',
  'Caídas': '#00ff6a',
  'Choques': '#99ffe5',
  'Colisiones': '#65b2ff',
  'Otros': '#003fff',
  'Salidas de vía': '#cb00cb',
  'Sin datos': '#bfbfbf',
  'Vuelcos': '#ff00c5'
}



// normaliza attUnique -> ColorMap
function normalizeAttUnique(attUnique: Record<string, any> | undefined): ColorMap {
  if (!attUnique) return {}
  const toCss = (v: any) => {
    if (typeof v === 'string') return v
    if (Array.isArray(v) && v.length >= 3) {
      const [r, g, b] = v
      return `rgb(${r}, ${g}, ${b})`
    }
    return undefined
  }
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(attUnique)) {
    const c = toCss(v)
    if (c) out[k] = c
  }
  return out
}

export default function Widget (props: AllWidgetProps<any>) {
  
  const useDS = props.useDataSources?.[0]
  const dsWhere = useSelector((st: IMState) =>
  useDS?.dataSourceId
    ? st?.dataSourcesInfo?.[useDS.dataSourceId]?.queryParams?.where
    : undefined
)

  // ---- añadidos para escuchar definitionExpression de la capa ----
  const [jmv, setJmv] = useState<JimuMapView | null>(null)
  const [layerDefExp, setLayerDefExp] = useState<string | undefined>(undefined)

  // Estado
  const [rows, setRows] = useState<Row[]>([])
  const [categoryOverride, setCategoryOverride] = useState<string | undefined>()
  const [colorMap, setColorMap] = useState<ColorMap | undefined>()
  const [valuesOverride, setValuesOverride] = useState<string[] | undefined>() // nombres seleccionados


  // ======= Lee overrides desde widgetsState[props.id] =======
  useEffect(() => {
    const store = getAppStore()
    const readCategory = () =>
      store.getState()?.widgetsState?.[props.id]?.categoryFieldOverride as string | undefined
    const readColors = () =>
      store.getState()?.widgetsState?.[props.id]?.categoryColorsOverride as ColorMap | undefined
    const readValues = () =>
      store.getState()?.widgetsState?.[props.id]?.categoryValuesOverride as string[] | undefined

  // 👇 Añade este console para ver cuándo cambian los names

    setCategoryOverride(readCategory())
    setColorMap(readColors())
    setValuesOverride(readValues())

    const unsub = store.subscribe(() => {
      const nextCat = readCategory()
      const nextColors = readColors()
      const nextValues = readValues()
      setCategoryOverride(prev => (prev !== nextCat ? nextCat : prev))
      setColorMap(prev => (prev !== nextColors ? nextColors : prev))
      setValuesOverride(prev => (prev !== nextValues ? nextValues : prev))
    })
    return () => unsub?.()
  }, [props.id])

  // ======= localizar la capa del DS y escuchar su definitionExpression (añadido) =======
  useEffect(() => {
    if (!jmv || !useDS?.dataSourceId) return
    const ds: any = DataSourceManager.getInstance().getDataSource(useDS.dataSourceId)
    const dsLayerId = ds?.layer?.id
    const dsLayerUrl = ds?.layer?.url
    const layers = jmv?.view?.map?.layers?.toArray?.() || []
    const fl = layers.find((lyr: any) =>
      (dsLayerId && lyr.id === dsLayerId) || (dsLayerUrl && lyr.url === dsLayerUrl)
    ) as __esri.FeatureLayer | undefined
    if (!fl) return
    setLayerDefExp(fl.definitionExpression)
    const h = fl.watch('definitionExpression', (v) => setLayerDefExp(v))
    return () => { try { h?.remove?.() } catch {} }
  }, [jmv, useDS?.dataSourceId])

  // Campos efectivos
  const effectiveCategoryField =
    categoryOverride || props.config?.categoryField || 'Tipo_accidente'
  const effectiveValueField = props.config?.valueField || 'OBJECTID'
  const extraWhere = props.config?.extraWhere

  // ======= Carga de datos (aplica WHERE IN si hay names) =======
  const load = async () => {
    if (!useDS) return
    const ds = DataSourceManager.getInstance().getDataSource(
      useDS.dataSourceId
    ) as QueriableDataSource
    if (!ds) return

    // Construye WHERE por selección (names)
    const selected = (valuesOverride && valuesOverride.length) ? valuesOverride : []
    const whereFromValues = selected.length
      ? `${effectiveCategoryField} IN (${selected.map(s => `'${s.replace(/'/g, "''")}'`).join(',')})`
      : ''

    // Respeta where/extent actuales
    const current = ds.getCurrentQueryParams?.() || {}
    const query: any = ds.buildQuery?.() || {}
    query.outFields = []
    query.groupByFieldsForStatistics = [effectiveCategoryField]
    query.outStatistics = [{
      statisticType: 'count',
      onStatisticField: effectiveValueField,
      outStatisticFieldName: 'count_of_OBJECTID'
    }]
    query.orderByFields = [`${effectiveCategoryField} ASC`]
    // <- combinación con definitionExpression (añadido)
    query.where = [layerDefExp, current.where, extraWhere, whereFromValues]
      .filter(Boolean)
      .join(' AND ')

    // 🔎 LOG: muestra la WHERE final aplicada a la capa
    // (Incluye la parte que venga de otros filtros + extraWhere + selección IN)
    console.log(`[${props.id}] WHERE aplicada ->`, query.where || '(vacía)')

  //   console.log(query.where.split("AND"))
  //  var whereNueva='';
  //   for (let index = 0; index < query.where.split("AND").length; index++) {
  //     const element = query.where.split("AND")[index];
  //     if(index<query.where.split("AND").length-1){
  //       console.log(element)
  //       whereNueva+=element
  //     }
      
  //   }
  //   query.where=whereNueva
  //   console.log(query.where)

    const result = await ds.query(query)
    const features = result?.records ?? []
    const nameField = effectiveCategoryField
    const valueField = 'count_of_OBJECTID'

    const data: Row[] = features.map((r: any) => ({
      name: r.getFieldValue(nameField),
      value: Number(r.getFieldValue(valueField) ?? 0)
    }))

    setRows(data)



  }
  
  useEffect(() => {
  const store = getAppStore()
  const current = store.getState()?.widgetsState?.[props.id]?.categoryColorsOverride
  if (!current || Object.keys(current).length === 0) {
    store.dispatch(
      appActions.widgetStatePropChange(props.id, 'categoryColorsOverride', CATEGORY_COLORS)
    )
  }
}, [props.id])
useEffect(() => {
  if (!rows.length) return
  const names = rows.map(r => String(r.name).trim())
  console.log('Nombres en datos:', names)
  console.log('colorMap recibido:', colorMap)
  console.log('Color aplicado a la primera categoría:',
    names[0], '->', toCssColor(names[0]))
}, [rows, colorMap])

  // Reactividad
  useEffect(() => { load() }, [useDS?.dataSourceId])
  useEffect(() => { load() }, [props.queryVersion])
  useEffect(() => { load() }, [categoryOverride])
  useEffect(() => { load() }, [valuesOverride]) // si cambian names, recarga con IN(...)
  useEffect(() => { load() }, [dsWhere]) // Recarga al cambiar WHERE externo (otros filtros)
  useEffect(() => { load() }, [layerDefExp]) // <- recarga cuando cambie definitionExpression

  // ======= Filtrado visual adicional (por si la query devuelve más) =======
  const allowedNames = useMemo(() => new Set(valuesOverride || []), [valuesOverride])
  const filteredRows = useMemo(
    () => (allowedNames.size ? rows.filter(r => allowedNames.has(r.name)) : rows),
    [rows, allowedNames]
  )

  const total = useMemo(
    () => filteredRows.reduce((s, r) => s + r.value, 0),
    [filteredRows]
  )

  // ======= Orden descendente para dibujar en sentido horario (mayor -> menor) =======
  const sortedRows = useMemo(
    () => [...filteredRows].sort((a, b) => (b.value - a.value) || String(a.name).localeCompare(String(b.name))),
    [filteredRows]
  )

  // ======= Util color =======
  const toCssColor = (v: any): string | undefined => {
    if (!v) return undefined
    if (typeof v === 'string') return v
    if (Array.isArray(v) && v.length >= 3) {
      const [r, g, b] = v
      const clamp = (n: number) => Math.max(0, Math.min(255, Number(n) || 0))
      return `rgb(${clamp(r)}, ${clamp(g)}, ${clamp(b)})`
    }
    return undefined
  }

  // ======= Datos serie (usando filas ordenadas) =======
  const seriesData = sortedRows.map((d) => {
   
    const pct = total > 0 ? (d.value / total) * 100 : 0;
    const small = pct < MIN_PCT;
    const explicitColor = colorMap ? toCssColor(colorMap[d.name]) : undefined;
    return {
      name: d.name,
      value: d.value,
      itemStyle: explicitColor ? { color: explicitColor } : undefined,
      label: {
        show: true,
       // backgroundColor: 'rgba(255,255,255,0.8)'
        color:"#000",
        position: small ? "outside" : "inside",
        rich: {
          name: { fontWeight: "bold" }, // 👈 define el estilo “negrita” para el nombre
        },
        formatter: (p: any) =>
          `{name|${p.name}}\n${p.percent?.toFixed(2)}% (${p.value})`,
      },
      labelLine: {
        show: small, // solo se muestra si la etiqueta está fuera
        length: 20,
        length2: 8,
        lineStyle: {
          color: "#000", // 👈 flecha siempre negra
          width: 1,
        },
      },
    };
  });

  // ======= Opción ECharts =======
  const option = {
    tooltip: { trigger: 'item' ,formatter: (p: any) => {
      // p.name → nombre
      // p.percent → porcentaje
      // p.value → valor numérico
      return `<b>${p.name}</b><br/>${p.percent?.toFixed(2)}% (${p.value})`
    } },
    series: [{
      type: 'pie',
      radius: '70%',
      avoidLabelOverlap: true,
      minAngle: 2,
      clockwise: true,          // <- asegura sentido horario
      // startAngle: 90,        // (opcional, 90 por defecto: primer sector arriba)
      data: seriesData
    }]
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Necesario para disponer del definitionExpression de la capa */}
      {props.useMapWidgetIds && props.useMapWidgetIds.length > 0 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={setJmv}
        />
      )}
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

// =================== Helpers opcionales (control externo) ===================

// Establecer los valores seleccionados (names) desde fuera o desde este widget
export function setChartCategoryValues (widgetId: string, selected: string[]) {
  const store = getAppStore()
  store.dispatch(
    appActions.widgetStatePropChange(widgetId, 'categoryValuesOverride', selected || [])
  )
}

// Establecer campo + colores desde otro widget (compatible con tu código existente)
export function setChartCategoryAndColors (
  widgetId: string,
  fieldName: string,
  colorMap: ColorMap
) {
  const store = getAppStore()
  store.dispatch(appActions.widgetStatePropChange(widgetId, 'categoryFieldOverride', fieldName))
  store.dispatch(appActions.widgetStatePropChange(widgetId, 'categoryColorsOverride', colorMap))
}


export async function readCheckedFromDropdown() {
  const trigger =
    Array.from(document.querySelectorAll('button, [role="button"]'))
      .find(el => /\bseleccionad/i.test(el.textContent || '') y el.getAttribute('aria-haspopup') === 'menu')
    || Array.from(document.querySelectorAll('[aria-haspopup="menu"]'))
      .find(el => /\bseleccionad/i.test(el.textContent || ''));

  if (!trigger) {
    console.warn('No encontré el botón del dropdown.');
    return [];
  }

  const wasOpen = trigger.getAttribute('aria-expanded') === 'true';
  if (!wasOpen) trigger.click();
  await new Promise(r => setTimeout(r, 60));

  let names = Array.from(
    document.querySelectorAll(
      '.dropdown-menu--inner button[role="menuitemcheckbox"][aria-checked="true"] .item-text'
    )
  ).map(el => el.textContent.trim());

  if (!names.length) {
    const checkedButtons = Array.from(
      document.querySelectorAll('.dropdown-menu--inner button')
    ).filter(btn =>
      btn.querySelector('span.jimu-checkbox[checked], input[type="checkbox"]:checked')
    );
    names = checkedButtons
      .map(btn => btn.querySelector('.item-text')?.textContent?.trim())
      .filter(Boolean);
  }

  if (!wasOpen) trigger.click();

  console.log('Seleccionados:', names);
  return names;
}
