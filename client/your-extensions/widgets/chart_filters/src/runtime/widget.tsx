import { React, type AllWidgetProps, getAppStore, type FeatureLayerDataSource, type SqlQueryParams, DataSourceManager, type ImmutableArray, Immutable, appActions, type WidgetProps, WidgetManager, type IMState, type IMAppConfig, WidgetState } from 'jimu-core'
import { useSelector } from 'react-redux'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  type MultiSelectItem,
  Switch
} from 'jimu-ui'
const { useState, useEffect } = React

// ------------------ 🔒 Utilidades robustas de parseo SQL ------------------
const AND_SPLIT = /\s+and\s+/i
const IN_SPLIT = / IN\s*\(/i
const CAMPOS_IGNORAR = /(PK|Año|V|NACVS|Carretera|NACV|NACVM)\b/i
const hasIN = (s: string) => IN_SPLIT.test(s)
const isIgnored = (s: string) => CAMPOS_IGNORAR.test(s)
/** Quita paréntesis exteriores */
const stripOuterParens = (t: string) => (t || '').replace(/^\(+|\)+$/g, '')
/** Quita ) de cierre al final */
const stripClosingParen = (t: string) => (t || '').replace(/\)\s*$/, '')
/** Devuelve RHS de un IN (...). Si no hay IN, devuelve null. */
const safeGetRHS = (part: string): string | null => {
  const segs = (part || '').split(IN_SPLIT)
  return segs[1] ? stripClosingParen(segs[1]) : null
}
/** Normaliza a (CAMPO IN (...)) si es IN y no es de campos ignorados; si no, null. */
const normalizeIN = (part: string): string | null => {
  if (!part) return null
  const raw = stripOuterParens(part.trim())
  if (!hasIN(raw) || isIgnored(raw)) return null
  const segs = raw.split(IN_SPLIT)
  if (!segs[1]) return null
  return `(${segs[0]} IN (${stripClosingParen(segs[1])}))`
}
/** Extrae solo cláusulas IN no-ignoradas, normalizadas, de una expresión compuesta */
const extractINClauses = (expr: string): string[] => {
  const out: string[] = []
  if (!expr) return out
  const parts = expr.split(AND_SPLIT)
  parts.forEach(p => {
    const n = normalizeIN(p)
    if (n) out.push(n)
  })
  return out
}
// -------------------------------------------------------------------------

export default function Widget (props: AllWidgetProps<unknown>) {
  const [jmvs, setJmvs] = useState<JimuMapView>()
  const [filtroAc, setFiltroAc] = useState('Ninguno') // Filtros activos
  const [atributos, setAtributos] = useState<ImmutableArray<MultiSelectItem>>(Immutable([]))
  const [attFiltro, setAttFiltro] = useState([])
  const [filtroActivo, setFiltroActivo] = useState(false)
  const [campo, setCampo] = useState('Tipo_accidente')
  const [dropOn, setDropOn] = useState(false)
  const [needFilter, setNeedFilter] = useState(true)
  const [attObj, setAttObj] = useState({})
  const dsManager = DataSourceManager.getInstance()
  const [filtrosActivos, setFiltrosActivos] = useState([]);
  const useDataSource = props.useDataSources[0]
  const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Filtra la capa seleccionada en la configuración del widget
  function filter (clausula) {
    const queryParams: SqlQueryParams = {
      where: clausula || '' // 🔒 nunca null/undefined
    }
    ds.updateQueryParams(queryParams, props.id)
  }
 function extractInValues(where: string): string[] {
  if (!where) return []
  const match = where.match(/\bIN\s*\(\s*([^)]+)\s*\)/i)
  if (!match) return []

  // match[1] es el texto dentro de los paréntesis
  return match[1]
    .split(',')
    .map(s => s.trim().replace(/^'+|'+$/g, '')) // elimina comillas y espacios
    .filter(Boolean)
}
  // Formatea la clausula para mostrar los filtros activos por pantalla (robusto a partes no IN)
  function coolFilter (clausula: string) {
    console.log('clausula')
    console.log(clausula)
    //Filtramos el gráfico tipo tarta maximizado
      const store = getAppStore()
    store.dispatch(appActions.widgetStatePropChange('widget_168', 'categoryFieldOverride', extractInValues(clausula)))
    if (!clausula || typeof clausula !== 'string') return 'Ninguno'

    // Quedarnos solo con IN no-ignorados
    const ins = extractINClauses(clausula)
    if (!ins.length) return 'Ninguno'

    const labels: string[] = []
    ins.forEach((elem) => {
      const sinParens = stripOuterParens(elem)
      const segs = sinParens.split(IN_SPLIT)
      const rhs = segs[1] ? stripClosingParen(segs[1]) : ''
      if (!rhs) return
      if (rhs.includes("', '")) {
        const parts = rhs.split("', '").map(x => x.replace(/'/g, '').replace(/,/g, ';'))
        labels.push(parts.join(', '))
      } else {
        labels.push(rhs.replace(/'/g, '').replace(/,/g, ';'))
      }
    })
    const newFilter = labels.join(', ')
    return newFilter || 'Ninguno'
  }

  // Selecciona la capa de accidentes
  const selectSeysAccLayer = (items) => {
    let currentFilter = ''
    items.forEach(item => {
      if (item.url === 'https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer' && item.title === 'Accidentes') {
        console.log(item)
        currentFilter = item.definitionExpression || ''
      }
    })
    if (!currentFilter) { console.log('No se ha encotrado la capa https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer') }
    console.log('currentFilter')
    console.log(currentFilter)
    return currentFilter || ''
  }
// 🔔 Escuchar la orden externa de "borrar filtros"
React.useEffect(() => {
  const trigger = (props as any)?.stateProps?.clearAllFiltersTrigger
  if (trigger) {
    // Ejecuta tu borrado actual
    handleProps()

    // Opcional: si también quieres limpiar definitionExpression del mapa aquí:
    try {
      if (jmvs?.view) {
        jmvs.view.map.layers.items.forEach((lyr: any) => {
          if (lyr?.definitionExpression) lyr.definitionExpression = null
        })
        jmvs.view.requestRender?.()
      }
    } catch {}

    // Reset del flag para poder volver a disparar
    getAppStore().dispatch(
      appActions.widgetStatePropChange(props.id, 'clearAllFiltersTrigger', 0)
    )
  }
}, [(props as any)?.stateProps?.clearAllFiltersTrigger])
  // Al iniciar el widget establece el año máximo del filtro de años y la acción de hacer zoom
  useEffect(() => {
    if (!jmvs) {
      console.warn('jmvs aún no está definido')
      return
    }
    if (jmvs) {
      let layer
      jmvs.view.map.layers.items.forEach((item) => {
        if (item.url === 'https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer' && item.title === 'Accidentes') {
          layer = item
        }
      })
      const query = layer.createQuery()
      query.maxRecordCountFactor = 3
      query.outFields = ['Año']
      let anios = []
      layer.queryFeatures(query).then((result) => {
        result.features.forEach((feature) => {
          const value = feature.attributes['Año']
          anios.push(value)
        })
        anios = Array.from(new Set(anios))
        const mayor = Math.max(...anios)
        const appConf = JSON.parse(JSON.stringify(getAppStore().getState().appConfig))

        const widgetConfig = appConf.widgets.widget_19.config
        const sql = widgetConfig.filterItems[0].sqlExprObj.displaySQL

        widgetConfig.filterItems[0].sqlExprObj.displaySQL = sql.replace('2025', mayor.toString())
        widgetConfig.filterItems[0].sqlExprObj.parts[0].valueOptions.value[1].label = mayor.toString()
        widgetConfig.filterItems[0].sqlExprObj.parts[0].valueOptions.value[1].value = mayor
        widgetConfig.filterItems[0].sqlExprObj.sql = widgetConfig.filterItems[0].sqlExprObj.sql.replace('2025', mayor.toString())

        // getAppStore().dispatch(appActions.widgetConfigLoaded(
        //   'widget_19',
        //   widgetConfig
        // ))
        const action = {
          id: 'messageConfig_1',
          "widgetId": "widget_17",
          "messageType": "DATA_SOURCE_FILTER_CHANGE",
          actions: [
            {
              "actionId": "widget_1-zoomToFeature-1718779068116",
              "widgetId": "widget_1",
              "messageWidgetId": "widget_17",
              "actionName": "zoomToFeature",
              "description": null,
              config: {
                useDataSource: {
                  "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                  "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                  "rootDataSourceId": "dataSource_1"
                },
                useDataSources: [
                  {
                    "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                    "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                    rootDataSourceId: "dataSource_1"
                  }
                ],
                "isUseCustomZoomToOption": true,
                zoomToOption: {
                  scale: 100000
                }
              },
              "version": "1.14.0",
              "useDataSources": []
            }
          ]
        }
        const prueba = getAppStore().getState().appConfig
        prueba.messageConfigs.messageConfig_1 = action
      })
      const funcFields = {'Tipo_accidente': [],
        'Subtipo_Accidente': [],
        'Sentido': [],
        'Superficie': [],
        'Luminosidad': [],
        'Factores_atmosfericos': [],
        'Tipo_dia': [],
        'Año': [],
        'Factor_concurrente_1': []}
      layer.load().then(() => {
        const query2 = layer.createQuery()
        query2.maxRecordCountFactor = 3
        layer.queryFeatures(query2).then((result) => {
          result.features.forEach((feature) => {
            for (const ffield in funcFields) {
              const value = feature.attributes[ffield]
              funcFields[ffield].push(value)
            }
          })
          for (const ffield in funcFields) {
            funcFields[ffield] = Array.from(new Set(funcFields[ffield]))
          }
          setAttObj(funcFields)
        })
      })
    }
  }, [jmvs])

  // Setea el widget mapa como un estado
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    console.log('JimuMapView recibido:', jmv)
    if (jmv) {
      setJmvs(jmv)
    }
  }

  // Checkea las propiedades de appConfig y setea los estados cuando cambia
  const checkFilter = useSelector(
    (state) => state.appConfig.counter,
    (left, right) => left === right
  )
  const attUnique = useSelector(
    (state) => state.appConfig.attUnique,
    (left, right) => left === right
  )
  const field = useSelector(
    (state) => state.appConfig.campo,
    (left, right) => left === right
  )
  // ######################################################################

  // Setea el campo seleccionado en el otro widget como un estado cada vez que cambia
  useEffect(() => {
    if (field) {
      setCampo(field);
      handleProps();
    }
  }, [field])

  useEffect(() => {
    const elemComp = filtroAc.includes(', ') ? filtroAc.split(', ') : [filtroAc]
    if (atributos && jmvs) {
      for (const elem of atributos) {
        let continueLoop = true
        for (const elem1 of elemComp) {
          if (elem.label === elem1.replace(';', ',')) {
            let defE = selectSeysAccLayer(jmvs.view.map.layers.items) || ''
            if (defE && defE.includes(' and ')) {
              const parts = defE.split(' and ')
              parts.forEach(part => {
                const n = normalizeIN(part)
                if (!n) return
                if (!isIgnored(n) && n.includes(campo)) {
                  const rhs = safeGetRHS(n)
                  if (rhs) {
                    if (rhs.includes("', '")) {
                      const list = rhs.split("', '").map(x => x.replace(/'/g, ''))
                      setAttFiltro(list)
                    } else {
                      setAttFiltro([rhs.replace(/'/g, '')])
                    }
                  }
                }
              })
            }
            const listAtt = []
            attObj[campo]?.forEach((att) => {
              const item = { } as any
              item.label = att
              item.value = att
              listAtt.push(item)
            })
            setAtributos(listAtt)
            continueLoop = false
            break
          }
        }
        if (!continueLoop) break
      }
    }
  }, [campo])

  useEffect(() => {
    let attUnico
    if (attUnique) {
      attUnico = attUnique
      attUnico = Array.isArray(attUnico) ? attUnico : Object.keys(attUnico)
    } else {
      attUnico = [
        'Salidas de vía',
        'Colisiones',
        'Alcances',
        'Choques',
        'Otros',
        'Atropellos de animales',
        'Caídas',
        'Vuelcos',
        'Atropellos de peatones',
        'Sin datos'
      ]
    }
    const listAtt = []
    attUnico.forEach((att) => {
      let item = {} as any
      item.label = att
      item.value = att
      listAtt.push(item)
    })
    setAtributos(listAtt)

    const elemComp = filtroAc.includes(', ') ? filtroAc.split(', ') : [filtroAc]
    for (const elem of listAtt) {
      let continueLoop = true
      for (const elem1 of elemComp) {
        if (elem.label === elem1.replace(';', ',')) {
          setNeedFilter(false)
          setFiltroActivo(true)
          continueLoop = false
          break
        }
      }
      if (!continueLoop) break
    }
    sleep(500).then(() => { setNeedFilter(true) })
  }, [attUnique])


  useEffect(() => {
    const interval = setInterval(() => {
      if (checkFilter && jmvs?.view?.map?.layers?.items?.length) {
        let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items) || ''
        // 🔒 Solo IN no-ignorados y normalizados
        const finalFilter = extractINClauses(currentFilter)
        currentFilter = finalFilter.join(' and ')
        filter(currentFilter)
        setFiltroActivo(false)
        setAttFiltro([])
        clearInterval(interval); // detener cuando ya lo tengas
      }
    }, 200); // verifica cada 200ms
  
    return () => clearInterval(interval); // limpiar el intervalo si el componente se desmonta
  }, [checkFilter]);

  // Limpia el filtro
  const handleProps = () => {
    if (jmvs) {
      filter('')
      setAttFiltro([])
      setFiltroAc('Ninguno')
      setFiltroActivo(false)
    }
  }

  function createWhere (listaAtt) {
    let where = ''
    if (listaAtt.length > 1) {
      const elem = listaAtt.join("', '")
      where = campo ? "(" + campo + " IN ('" + elem + "'))" : "(" + 'Tipo_accidente' + " IN ('" + elem + "'))"
    } else {
      const elem = listaAtt[0]
      where = campo ? "(" + campo + " IN ('" + elem + "'))" : "(" + 'Tipo_accidente' + " IN ('" + elem + "'))"
    }
    return where
  }
  useEffect(() => {
    if (attFiltro.length === 0) {
      const seleccionados = Object.keys(atributos).filter(key => atributos[key]);
      setAttFiltro(seleccionados);
    }
  }, []);

  const quitarFiltro = (filtro: string) => {
    setAttFiltro(prev => prev.filter(item => item !== filtro));
  };

  useEffect(() => {
    if (attFiltro && jmvs && needFilter) {
      const where = createWhere(attFiltro)
      let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items) || ''
      const finalFilter = []
      console.log('jmvs.view.map')
      console.log(jmvs.view.map)
      if (currentFilter.includes(' and ')) {
        const parts = currentFilter.split(' and ')
        parts.forEach((elem) => {
          const n = normalizeIN(elem)
          if (n) finalFilter.push(n)
        })
      }
      currentFilter = finalFilter.join(' and ')
      if (filtroActivo) {
        currentFilter === '' ? filter(where) : filter(currentFilter + ' and ' + where)
      } else {
        if (currentFilter.includes(' and ' + where + ')')) {
          filter(currentFilter.replace(' and ' + where + ')', ''))
        } else if (currentFilter.includes(' and ' + where)) {
          filter(currentFilter.replace(' and ' + where, ''))
        } else {
          if (currentFilter.includes(where + ' and ')) {
            filter(currentFilter.replace(where + ' and ', ''))
          } else {
            filter(currentFilter.replace(where, ''))
          }
        }
      }
      const clausula = selectSeysAccLayer(jmvs.view.map.layers.items) || ''
      setFiltroAc(coolFilter(clausula))
    }
  }, [filtroActivo])

  function handleAtt (evt) {
    // const att = evt.target.textContent
    const att = evt.value;
    if (attFiltro.includes(att)) {
      let lista = [...attFiltro]
      lista = lista.filter((elem) => { return elem !== att })
      setAttFiltro(lista)
    } else {
      setAttFiltro([...attFiltro, att])
    }
  }

  function handleIndividualAtt (evt) {
    let parent = evt.target.parentElement.textContent
    parent = parent.includes(' X') ? parent.replace(' X', '') : parent.includes('X')?parent.replace('X', ''):parent;
    parent = parent.includes(';') ? parent.replace(';', ',') : parent;
    if (parent) {
      let lista
      if (filtroAc.includes(', ')) {
        lista = filtroAc.split(', ')
      } else {
        lista = [filtroAc]
      }
      lista = lista.filter((elem) => { return elem !== parent })
      lista = lista.join(', ')
      setFiltroAc(lista)

      let lista1
      if (attFiltro.includes(parent)) {
        lista1 = [...attFiltro]
        lista1 = lista1.filter((elem) => { return elem !== parent })
        setAttFiltro(lista1)
      }

      let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items) || ''
      const finalFilter = []
      if (currentFilter.includes(' and ')) {
        const currentList = currentFilter.split(' and ')
        currentList.forEach((elem) => {
          // 🔒 Mantener solo IN válidos; si contiene el valor, lo quitamos del RHS
          const n = normalizeIN(elem)
          if (!n) return
          const rhs = safeGetRHS(n)
          if (!rhs) return
          if (rhs.includes("', '")) {
            const removed = rhs
              .split("', '")
              .filter(x => x.replace(/'/g,'') !== parent)
              .join("', '")
            finalFilter.push(removed ? n.replace(rhs, removed) : '') // si queda vacío, lo omitiremos abajo
          } else {
            if (rhs.replace(/'/g,'') !== parent) finalFilter.push(n)
          }
        })
        let currentFinalFilter: string[] = []
        finalFilter.forEach(elem => {
          if (!elem) return
          let nElem = elem.replace(/\(/g, '').replace(/\)/g, '');
          nElem = `(${nElem})`;
          if (!/IN\s*\(/i.test(nElem)) {
            nElem = nElem.replace(/IN\s+/i, 'IN (') + ')';
          }
          currentFinalFilter.push(nElem);
        })
        const joined = currentFinalFilter.filter(Boolean).join(' and ')
        filter(joined)
      }
    }
  }
  // 🔔 Escuchar la orden externa de "reiniciar"
React.useEffect(() => {
  const trigger = (props as any)?.stateProps?.restartTrigger;
  if (!trigger) return;

  handleRestart();

  // resetear el flag para poder volver a disparar
  getAppStore().dispatch(
    appActions.widgetStatePropChange(props.id, 'restartTrigger', 0)
  );
}, [(props as any)?.stateProps?.restartTrigger]);
// 🔁 Reinicio completo del widget (estado + filtros + mapa)
function handleRestart() {
  try {
    // 1) limpia el DS de este widget
    ds.updateQueryParams({ where: '' }, props.id);

    // 2) resetea todos los hooks “a fábrica”
    setCampo('Tipo_accidente');
    setFiltroActivo(false);
    setAttFiltro([]);            // ninguna selección
    setFiltroAc('Ninguno');      // etiqueta visible
    setAtributos(Immutable([])); // lista reiniciada
    setNeedFilter(true);
    setDropOn(false);

   
    

     // 👇 repoblar la lista inmediatamente
    repoblarAtributos('Tipo_accidente');
  } catch (e) {
    console.warn('Restart falló:', e);
  }
}

function repoblarAtributos(fieldName: string) {
  // 1) intenta con attObj[fieldName] (únicos ya calculados en tu init)
  let uniques: any[] =
    Array.isArray((attObj as any)[fieldName]) ? (attObj as any)[fieldName] : [];

  // 2) si no hay, cae a attUnique (puede venir como array o como objeto)
  if (!uniques.length) {
    if (Array.isArray(attUnique)) uniques = attUnique;
    else if (attUnique) uniques = Object.keys(attUnique as any);
  }

  // 3) si tampoco hay, deja una lista por defecto (opcional)
  if (!uniques?.length && fieldName === 'Tipo_accidente') {
    uniques = [
      'Alcances','Atropellos de animales','Atropellos de peatones','Caidas','Choques',
      'Colisiones','Otros','Salidas de vía','Sin datos'
    ];
  }

  const list: MultiSelectItem[] = (uniques || [])
    .filter(v => v !== null && v !== undefined && v !== '')
    .map(v => ({ label: v, value: v }));

  setAtributos(Immutable(list));
}
  return (
    <div style={{ display: 'flex,', width: '100%', height: '100%' }}>
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
      )}
  
      <div style={{ marginRight: '10px', marginLeft: '5px', marginTop: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <Switch
            checked={filtroActivo}
            onChange={() => {
              setFiltroActivo(!filtroActivo);
            }}
          />
           
        </div>
  
        <div style={{ maxHeight: '240px', overflow: 'auto' }}>
        {atributos
        .filter((f) => f && f.value && f.value !== "")
        .map((elem, index) => {
          const isChecked = attFiltro.includes(elem.value);
          return (
            <label
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px',
                cursor: filtroActivo ? 'default' : 'pointer',
                userSelect: 'none'
              }}
            >
              {/* Invisible native checkbox */}
              <input
                type="checkbox"
                disabled={filtroActivo}
                checked={isChecked}
                onChange={() => handleAtt(elem)}
                style={{
                  opacity: 0,
                  width: 0,
                  height: 0,
                  position: 'absolute'
                }}
              />

              {/* Custom checkbox */}
              <span
                style={{
                  height: '18px',
                  width: '18px',
                  border: `2px solid ${isChecked ? '#007BFF' : '#ccc'}`,
                  backgroundColor: isChecked ? '#007BFF' : 'white',
                  display: 'inline-block',
                  marginRight: '10px',
                  borderRadius: '4px',
                  position: 'relative'
                }}
              >
                {isChecked && (
                  <span
                    style={{
                      content: '',
                      position: 'absolute',
                      top: '1px',
                      left: '4px',
                      width: '5px',
                      height: '10px',
                      border: 'solid white',
                      borderWidth: '0 2px 2px 0',
                      transform: 'rotate(45deg)'
                    }}
                  />
                )}
              </span>

              {/* Text label */}
              <span style={{ color: isChecked ? '#007BFF' : '#999' }}>
                {elem.value}
              </span>
            </label>
          );
        })}
        </div>
  
        {/* Botón para borrar todos los filtros */}
        {filtroAc !== 'Ninguno' && filtroAc.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={handleProps}
              style={{
                backgroundColor: 'white',     // gris claro
                color: '#333',                  // texto oscuro
                border: '1px solid #ccc',       // borde suave
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#d5d5d5')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
            >
              Eliminar todos los filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
