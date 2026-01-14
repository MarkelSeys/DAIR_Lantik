import { React, AllWidgetProps, jsx, getAppStore, appActions, DataSourceManager, type QueriableDataSource } from 'jimu-core'
import { Button, Icon, Tooltip } from 'jimu-ui'
import { useState } from 'react'
import MyLocalRefreshIcon from '../../../RefrescarPagina/assets/actualizar.svg'

/** Filtros a mantener */
const WIDGETS_A_CONSERVAR = ['widget_17', 'widget_18', 'widget_19'] as const
/** DataSource afectado */
const DS_ID = 'dataSource_1-AccidentesSeys_1709_5211'
/** Incluir Carretera en el WHERE del DS */
const INCLUDE_CARRETERA_IN_DS = true

/** NO tocar widgets cuyo propósito es reflejar/encadenar filtros */
const ETIQUETAS_FILTROS_A_IGNORAR = ['Filtros cruzados', 'Filtros activos']

const deepClone = <T,>(o: T): T => JSON.parse(JSON.stringify(o))

type SavedFilters = {
  carretera?: string
  pk?: { min: number; max: number }
  anio?: { min: number; max: number }
}

function readCurrentWhere(): string {
  const s = getAppStore().getState() as any
  return s?.dataSourcesInfo?.[DS_ID]?.queryParams?.where ?? ''
}

function parseWhere(where: string): SavedFilters {
  const out: SavedFilters = {}
  if (!where) return out
  const mCar = where.match(/Carretera\s*=\s*'([^']+)'/i)
  if (mCar) out.carretera = mCar[1]
  const mPK = where.match(/PK\s+BETWEEN\s+(-?\d+(?:\.\d+)?)\s+AND\s+(-?\d+(?:\.\d+)?)/i)
  if (mPK) out.pk = { min: Number(mPK[1]), max: Number(mPK[2]) }
  const mAn = where.match(/Año\s+BETWEEN\s+(-?\d+)\s+AND\s+(-?\d+)/i)
  if (mAn) out.anio = { min: Number(mAn[1]), max: Number(mAn[2]) }
  return out
}

function buildWhere(f: SavedFilters): string {
  const parts: string[] = []
  if (f.carretera && INCLUDE_CARRETERA_IN_DS) parts.push(`(Carretera = '${f.carretera.replace(/'/g, "''")}')`)
  if (f.pk) parts.push(`((PK BETWEEN ${f.pk.min} AND ${f.pk.max}))`)
  if (f.anio) parts.push(`((Año BETWEEN ${f.anio.min} AND ${f.anio.max}))`)
  return parts.join(' AND ')
}

/** Forzar cambio de cadena sin romper SQL (ArcGIS REST permite 1=1 y espacios) */
function bumpWhere(baseWhere: string): string {
  const spaces = ' '.repeat((Date.now() % 7) + 1) // 1–7 espacios
  if (!baseWhere || baseWhere.trim() === '') return `1=1${spaces}`
  const trimmed = baseWhere.trim().replace(/\s+$/,'')
  const has1eq1 = /\b1\s*=\s*1\b$/i.test(trimmed)
  return has1eq1 ? `${trimmed}${spaces}` : `(${trimmed}) AND 1=1${spaces}`
}

function applyWhereToDS(where: string, sourceWidgetId: string) {
  const dsm = DataSourceManager.getInstance()
  const ds = dsm.getDataSource(DS_ID) as unknown as QueriableDataSource
  if (!ds) return
  ds.updateQueryParams({ where }, sourceWidgetId)
}

/** Limpia por CONFIG (JSON) un Filter widget (todos sus items/parts) usando widgetConfigLoaded */
function clearFilterConfigByJson(widgetId: string) {
  const store = getAppStore()
  const widgets = (store.getState() as any)?.appConfig?.widgets ?? {}
  const w = widgets?.[widgetId]
  if (!w?.config) return
  const newCfg = deepClone(w.config)

  const items = Array.isArray(newCfg?.filterItems) ? newCfg.filterItems : []
  items.forEach((it: any) => {
    const parts = Array.isArray(it?.sqlExprObj?.parts) ? it.sqlExprObj.parts : []
    parts.forEach((p: any) => {
      if (p?.valueOptions) p.valueOptions.value = [] // sin selección
    })
    if (it?.sqlExprObj) {
      it.sqlExprObj.sql = ''
      it.sqlExprObj.displaySQL = ''
    }
  })

  getAppStore().dispatch(appActions.widgetConfigLoaded(widgetId, newCfg))
}

const Widget = (props: AllWidgetProps<any>) => {
  const [isHovering, setIsHovering] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const softResetExceptKeepers = () => {
    // 1) Leer lo que hay realmente aplicado en el DS
    const currentWhere = readCurrentWhere()
    const keep = parseWhere(currentWhere)
    const keeperWhere = buildWhere(keep)
    const bumped = bumpWhere(keeperWhere)

    // 2) Limpiar TODOS los Filter widgets excepto 17/18/19 y EXCEPTO los “especiales”
    const store = getAppStore()
    const widgets = (store.getState() as any)?.appConfig?.widgets ?? {}
    Object.values<any>(widgets)
      .filter(w => w?.uri === 'widgets/common/filter/')
      .forEach(w => {
        if (WIDGETS_A_CONSERVAR.includes(w.id)) return
        // No tocar filtros “especiales” por etiqueta ni los que no tengan filterItems reales
        const label: string = (w.label ?? '').toString()
        const isEspecial = ETIQUETAS_FILTROS_A_IGNORAR.some(txt => label.toLowerCase().includes(txt.toLowerCase()))
        const hasItems = Array.isArray(w?.config?.filterItems) && w.config.filterItems.length > 0
        if (!hasItems || isEspecial) return
        clearFilterConfigByJson(w.id)
      })

    // 3) APLICAR DIRECTAMENTE el WHERE con “bump” (sin estado intermedio vacío)
    //    Evita que “Filtros activos/cruzados” reaccionen a un where=''
    applyWhereToDS(bumped, props.id)
  }

  const buttonStyle = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    minWidth: 'unset',
    minHeight: 'unset',
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    paddingLeft: '25px',
    ...(isHovering ? { backgroundColor: 'rgba(0, 0, 0, 0.1)' } : {}),
  } as const

  return (
    <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <Tooltip
        title="Eliminar filtros (mantener 17, 18 y 19)"
        placement="top"
        showArrow
        open={showTooltip}
        style={{ backgroundColor: '#333', color: '#fff', fontSize: '0.9rem', borderRadius: '6px' }}
      >
        <Button
          type="primary"
          onClick={softResetExceptKeepers}
          aria-label="Eliminar filtros"
          style={buttonStyle}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Icon
            icon={MyLocalRefreshIcon}
            size="m"
            style={{ display: 'block', width: '40px', height: '40px' }}
          />
        </Button>
      </Tooltip>
    </div>
  )
}

export default Widget
