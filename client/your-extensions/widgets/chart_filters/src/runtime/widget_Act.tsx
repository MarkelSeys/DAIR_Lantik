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

  const useDataSource = props.useDataSources[0]
  const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Filtra la capa seleccionada en la configuración del widget
  function filter (clausula) {
    const queryParams: SqlQueryParams = {
      where: clausula
    }
    ds.updateQueryParams(queryParams, props.id)
  }

  // Formatea la clausula para mostrar los filtros activos por pantalla
  function coolFilter (clausula) {
    console.log('clausula')
    console.log(clausula)
    const manualFilter = []
    if (clausula.includes(' and ')) {
      const currentList = clausula.split(' and ')
      currentList.forEach((elem) => {
        if (!(elem.includes('PK') || elem.includes('Año') || elem.includes('V') || elem.includes('NACVS') || elem.includes('Carretera') || elem.includes('NACV') || elem.includes('NACVM'))) {
          manualFilter.push(elem)
        }
      })
    }
    clausula = manualFilter.length > 1 ? manualFilter.join(' and ') : manualFilter.length === 1 ? manualFilter[0] : null
    if (clausula) {
      clausula = clausula.replace(/\(/g, '').replace(/\)/g, '')
      const filterList = []
      if (clausula.includes(' and ')) {
        const lista = clausula.split(' and ')
        lista.forEach((elem) => {
          let condicion = elem.split(' IN ')[1]
          let noDotsList = []
          console.log(condicion)
          console.log('condicion')
          if (condicion.includes("', '")) {
            condicion = condicion.split("', '")
            condicion.forEach((elem) => {
              let noDots = elem.includes(',') ? elem.replace(',', ';') : elem
              noDots = noDots.includes("'") ? noDots.replace(/'/g, '') : noDots
              noDotsList.push(noDots)
            })
            noDotsList = noDotsList.join(', ')
            filterList.push(noDotsList)
          } else {
            filterList.push(condicion.includes(',') ? condicion.replace(',', ';').replace(/'/g, '') : condicion.replace(/'/g, ''))
          }
        })
      } else {
        // const condicion = clausula.split(' IN ')[1].replace(/'/g, '')
        let condicion = clausula.split(' IN ')[1]
        let noDotsList = []
        if (condicion.includes("', '")) {
          condicion = condicion.split("', '")
          condicion.forEach((elem) => {
            let noDots = elem.includes(',') ? elem.replace(',', ';') : elem
            noDots = noDots.includes("'") ? noDots.replace(/'/g, '') : noDots
            noDotsList.push(noDots)
          })
          noDotsList = noDotsList.join(', ')
          filterList.push(noDotsList)
        } else {
          filterList.push(condicion.includes(',') ? condicion.replace(',', ';') : condicion)
        }
      }
      const newFilter = filterList.join(', ')
      return newFilter
    } else {
      return 'Ninguno'
    }
  }

  // Selecciona la capa de accidentes
  const selectSeysAccLayer = (items) => {
    let currentFilter
    items.forEach(item => {
      if (item.url === 'https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer' && item.title === 'Accidentes') {
        console.log(item)
        currentFilter = item.definitionExpression
      }
    })
    if (!currentFilter) { console.log('No se ha encotrado la capa https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer') }
    console.log('currentFilter')
    console.log(currentFilter)
    return currentFilter
  }

  // Al iniciar el widget establece el año máximo del filtro de años y la acción de hacer zoom
  useEffect(() => {
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

        getAppStore().dispatch(appActions.widgetConfigLoaded(
          'widget_19',
          widgetConfig
        ))
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
                "isUseCustomZoomToOption": false, 
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
        'Año': []}
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
      setCampo(field)
    }
  }, [field])

  useEffect(() => {
    const elemComp = filtroAc.includes(', ') ? filtroAc.split(', ') : [filtroAc]
    if (atributos) {
      for (const elem of atributos) {
        let continueLoop = true
        for (const elem1 of elemComp) {
          if (elem.label === elem1.replace(';', ',')) {
            let defE = selectSeysAccLayer(jmvs.view.map.layers.items)
            if (defE.includes(' and ')) {
              defE = defE.split(' and ')
              defE.forEach(elem => {
                if (!(elem.includes('PK') || elem.includes('Año') || elem.includes('V') || elem.includes('NACVS') || elem.includes('Carretera') || elem.includes('NACV') || elem.includes('NACVM'))) {
                  if (elem.includes(campo)) {
                    let nElem = elem.split(' IN (')[1]
                    if (nElem.includes("', '")) {
                      nElem = nElem.replace(/', '/g, ';')
                      nElem = nElem.replace(/\)/g, '').replace(/'/g, '')
                      nElem = nElem.split(';')
                      setAttFiltro(nElem)
                    } else {
                      nElem = nElem.replace(/\(/g, '').replace(/\)/g, '').replace(/'/g, '')
                      setAttFiltro([nElem])
                    }
                  }
                } else {
                  if (!(defE.includes('PK') || defE.includes('Año') || defE.includes('V') || defE.includes('NACVS') || defE.includes('Carretera') || defE.includes('NACV') || defE.includes('NACVM'))) {
                    if (defE.includes(campo)) {
                      let nElem = elem.split(' IN (')[1]
                      if (nElem.includes("', '")) {
                        nElem = nElem.replace(/', '/g, ';')
                        nElem = nElem.replace(/\)/g, '').replace(/'/g, '')
                        nElem = nElem.split(';')
                        setAttFiltro(nElem)
                      } else {
                        nElem = nElem.replace(/\(/g, '').replace(/\)/g, '').replace(/'/g, '')
                        setAttFiltro([nElem])
                      }
                    }
                  }
                }
              })
            }
            const listAtt = []
            attObj[campo].forEach((att) => {
              const item = {}
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
      let item = {}
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

  // Se ejecuta cada vez que se cambia el atributo a mostrar
  useEffect(() => {
    if (checkFilter) {
      let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items)
      const finalFilter = []
      if (currentFilter.includes(' and ')) {
        const currentList = currentFilter.split(' and ')
        currentList.forEach((elem) => {
          if (!(elem.includes('PK') || elem.includes('Año') || elem.includes('V') || elem.includes('NACVS') || elem.includes('Carretera') || elem.includes('NACV') || elem.includes('NACVM'))) {
            let elemMod = elem.replace(/\(/g, '').replace(/\)/g, '')
            elemMod = '(' + elemMod + ')'
            elemMod = elemMod.split(' IN ')
            elemMod = elemMod[0] + ' IN ' + '(' + elemMod[1] + ')'
            finalFilter.push(elemMod)
          }
        })
      }

      currentFilter = finalFilter.join(' and ')
      filter(currentFilter)
      setFiltroActivo(false)
      setAttFiltro([])
    }
  }, [checkFilter])

  // Limpia el filtro
  const handleProps = () => {
    if (jmvs) {
      filter(null)
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
    if (attFiltro && jmvs && needFilter) {
      const where = createWhere(attFiltro)
      let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items)
      const finalFilter = []
      console.log('jmvs.view.map')
      console.log(jmvs.view.map)
      if (currentFilter.includes(' and ')) {
        const currentList = currentFilter.split(' and ')
        currentList.forEach((elem) => {
          if (!(elem.includes('PK') || elem.includes('Año') || elem.includes('V') || elem.includes('NACVS') || elem.includes('Carretera') || elem.includes('NACV') || elem.includes('NACVM'))) {
            let elemMod = elem.replace(/\(/g, '').replace(/\)/g, '')
            elemMod = '(' + elemMod + ')'
            elemMod = elemMod.split(' IN ')
            elemMod = elemMod[0] + ' IN ' + '(' + elemMod[1] + ')'
            finalFilter.push(elemMod)
          }
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
      const clausula = selectSeysAccLayer(jmvs.view.map.layers.items)
      setFiltroAc(coolFilter(clausula))
    }
  }, [filtroActivo])

  function handleAtt (evt) {
    const att = evt.target.textContent
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
    parent = parent.includes(' X') ? parent.replace(' X', '') : parent
    parent = parent.includes(';') ? parent.replace(';', ',') : parent
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

      let currentFilter = selectSeysAccLayer(jmvs.view.map.layers.items)
      const finalFilter = []
      if (currentFilter.includes(' and ')) {
        const currentList = currentFilter.split(' and ')
        currentList.forEach((elem) => {
          if (!(elem.includes('PK') || elem.includes('Año') || elem.includes('V') || elem.includes('NACVS') || elem.includes('Carretera') || elem.includes('NACV') || elem.includes('NACVM'))) {
            if (elem.includes("', '")) {
              if (elem.includes(`'${parent}', `)) {
                const finalElem = elem.replace(`'${parent}', `, '')
                finalFilter.push(finalElem)
              } else {
                finalFilter.push(elem)
              }
            } else {
              if (elem.includes(`'${parent}'`)) {
                // const finalElem = elem.replace(`'${parent}'`, '')
                // finalFilter.push(finalElem)
              } else {
                finalFilter.push(elem)
              }
            }
          }
        })
        let currentFinalFilter = []
        finalFilter.forEach(elem => {
          let nElem = elem.replace(/\(/g, '').replace(/\)/g, '')
          nElem = `(${nElem}))`
          nElem = nElem.replace('IN ', 'IN (')
          currentFinalFilter.push(nElem)
        })
        currentFinalFilter = currentFinalFilter.join(' and ')
        filter(currentFinalFilter)
      }
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: '100%' }}>
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
      )}
      <div style={{ marginRight: '-10px', marginLeft: '5px' }}>
       <div style={ { marginTop: '5px' } }>
          <Switch checked={filtroActivo} onChange={() => {
            setFiltroActivo(!filtroActivo)
          }} />
        </div>
        <div>
          {dropOn
            ? <Dropdown style={{ margin: '4px 0px 0px 5px', height: '60%' }} isOpen>
            <DropdownButton onClick={() => { setDropOn(!dropOn) }} >Filtrar</DropdownButton>
            <DropdownMenu>
              {atributos.map((elem, index) => <DropdownItem onClick={filtroActivo ? () => {} : handleAtt} style={attFiltro.includes(elem.value) && filtroActivo === false ? { backgroundColor: 'rgba(5, 115, 194, 0.5)' } : attFiltro.includes(elem.value) && filtroActivo ? { backgroundColor: 'rgba(5, 115, 194, 0.5)', cursor: 'default' } : !attFiltro.includes(elem.value) && filtroActivo ? { cursor: 'default', backgroundColor: 'white', color: 'black' } : {}} key={index}>{elem.value}</DropdownItem>)}
            </DropdownMenu>
          </Dropdown>
            : <Dropdown style={{ margin: '4px 0px 0px 5px', height: '60%' }}>
            <DropdownButton onClick={() => { setDropOn(!dropOn) }} >Filtrar</DropdownButton>
          </Dropdown>}
        </div>
      </div>
      <div>
        <Dropdown style={{ margin: '15px', height: '60%' }} >
          <DropdownButton onClick={() => {
            console.log(selectSeysAccLayer(jmvs.view.map.layers.items))
          }}>
            Filtros activos</DropdownButton>
          <DropdownMenu>
            {filtroAc !== 'Ninguno' && (
              <DropdownItem active onClick={handleProps} style={{ fontWeight: 'bold' }}>
                Limpiar todos los filtros
              </DropdownItem>
            )}
            {filtroAc.includes(', ')
              ? filtroAc.split(', ').map((elem, index) => <DropdownItem key={index} header style={{ width: '100%' }}>
                {elem} {attFiltro.includes(elem.includes(';') ? elem.replace(';', ',') : elem) ? '' : <Button size='sm' style={{ float: 'right', border: '0px', maxHeight: '30px', color: 'red', backgroundColor: 'white' }} onClick={handleIndividualAtt}>X</Button>}
                </DropdownItem>)
              : <DropdownItem header>{filtroAc}</DropdownItem>}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
