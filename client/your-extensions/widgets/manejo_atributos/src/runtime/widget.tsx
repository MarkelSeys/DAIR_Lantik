// import { jsx, Immutable, JimuFieldType,ReactRedux ,appActions, type ImmutableArray, getAppStore, type AllWidgetProps } from 'jimu-core'
// import { type IMConfig } from '../config'
// import defaultMessages from './translations/default'
// import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
// import React, { useState, useEffect } from 'react'
// import {
//   SettingSection
// } from 'jimu-ui/advanced/setting-components'
// import UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer'
// import * as pieChartRendererCreator from 'esri/smartMapping/renderers/pieChart'
// import { Select, MultiSelect, type MultiSelectItem, Button, Loading, Switch } from 'jimu-ui'
// import { convertParameterInfosOfGPValueTable } from 'dist/widgets/arcgis/analysis/src/runtime/utils'

// // import Legend from "esri/widgets/Legend";
// // import LegendVM from "esri/widgets/Legend/LegendViewModel";

// export default function Widget (props: AllWidgetProps<unknown>) {
//   const supportedFieldTypes = Immutable([JimuFieldType.String])
//   const [nombre, setNombre] = useState('Tipo_accidente')
//   const [jimuMapView, setJimuMapView] = useState<JimuMapView>()
//   const [nombreCapa, setNombreCapa] = useState('')
//   const [seleccionables, setSeleccionables] = useState<ImmutableArray<MultiSelectItem>>(Immutable([]))
//   const [valoresAgg, setValoresAgg] = useState([])
//   const [ejecutar, setEjecutar] = useState(false)
//   const [cluster, setCluster] = useState(true)
//   const [attUnico, setAttUnico] = useState([])
//   // const [layer, setLayer] = useState<Layer>()
// const [selectKey, setSelectKey] = useState(0)

// // 👇 Muestra el id real del receptor (por si el emisor apunta al equivocado)
// useEffect(() => { console.log('[Receptor] props.id =', props.id); }, []);

// // Lee TODO tu widgetsState para poder inspeccionarlo fácilmente
// const myWS = ReactRedux.useSelector((s: any) => s.widgetsState?.[props.id]);

// // Log de lo que llega (verás el objeto completo al cambiar)
// useEffect(() => {
//   console.log('[Receptor] widgetsState mío cambió →', myWS);
// }, [myWS]);

// // Maneja el valuesOverride con nonce para que SIEMPRE entre
// useEffect(() => {
//   const p = myWS?.valuesOverride;
//   if (!p) return;

//   // Puede venir como string o como objeto { value, nonce }
//   const value = typeof p === 'string' ? p : p.value;
//   const nonce = typeof p === 'object' ? p.nonce : Date.now();

//   console.log('🔔 [Receptor] valuesOverride recibido:', value, 'nonce:', nonce);

//   // Aplica al <Select>
//   setNombre(value || undefined);
//   setSeleccionables(Immutable([]));
//   setValoresAgg([]);
//   setEjecutar(false);
//   setSelectKey(k => k + 1);
// }, [myWS?.valuesOverride?.nonce]);

//   useEffect(() => {
//     if (props.useDataSources && props.useDataSources.length > 0) {
//       const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
//       setNombreCapa(nombreCapa) // No cambia el estilo al cambiar la fuente de datos de la capa, mirarlo bien
//     }
//   }, [props.useDataSources])

//   function comparacion (atributos, listaNombres) {
//     const final = {}
//     listaNombres = listaNombres.map(String)
//     for (const atributo of atributos) {
//       const nAciertos = {}
//       const listaAciertos = []
//       for (const nombre of listaNombres) {
//         let aciertos = 0
//         if (atributo.length === nombre.length) {
//           for (let i = 0; i < atributo.length; i++) {
//             if (atributo[i] === nombre[i]) {
//               aciertos++
//             }
//           }
//         }
//         nAciertos[aciertos] = nombre
//         listaAciertos.push(aciertos)
//       }
//       function comparar (a, b) {
//         return b - a // Resta b de a para ordenar de mayor a menor
//       }
//       listaAciertos.sort(comparar)
//       if (listaAciertos[0] === 0) {
//         if (atributo === ' ') {
//           final[atributo] = ' '
//         } else {
//           final[atributo] = 'Agrupación'
//         }
//       } else {
//         final[atributo] = nAciertos[listaAciertos[0]]
//       }
//     }
//     return (final)
//   }

//   const campos = {
//     Tipo_accidente: 'Tipo de accidente',
//     Subtipo_Accidente: 'Subtipo de Accidente',
//     Sentido: 'Sentido',
//     Superficie: 'Superficie',
//     Luminosidad: 'Luminosidad',
//     Factores_atmosfericos: 'Factores atmosféricos',
//     Tipo_dia: 'Tipo de día',
//     Año: 'Año'//,
//     Factor_concurrente_1: 'Factor concurrente'
//   }

//   const activeViewChangeHandler = (jmv: JimuMapView) => {
//     if (jmv) {
//       setJimuMapView(jmv)
//     }
//   }

//   function generarColorAleatorio () {
//     return [
//       Math.floor(Math.random() * 256),
//       Math.floor(Math.random() * 256),
//       Math.floor(Math.random() * 256)
//     ]
//   }

//   const fieldsListChangeHandler = (evt, item) => {
//     // if (evt) {
//     //   setNombre(evt.target.value)
//     // }
//       if (!evt) return
//       const v = evt.target.value
//       setNombre(v === '' ? undefined : v)  // ← admite limpiar a vacío
//   }

//   const ejecucion = () => {
//     setEjecutar(true)
//   }

//   function selectAgregate (listaItems) {
//     return (
//       <SettingSection
//         className="attribute-selector-section"
//         title='Seleccione los atributos que no se quieran resumir'
//         >
//         <MultiSelect
//           items = {listaItems}
//           placeholder="Selecione 9 atributos únicos"
//           displayByValues={function displayValues (values) {
//             return `${values.length} seleccionados`
//           } }
//           onClickItem={function seleccionValores (evt, value, selectedValues) {
//             if (selectedValues.length <= 9) {
//               setValoresAgg(selectedValues)
//             }
//           } }
//         />
//       </SettingSection>
//     )
//   }
//   const createPieChartRenderer = async (layer, attUnique) => {
//     const { renderer, fields } = await pieChartRendererCreator.createRendererForClustering({
//       layer,
//       legendOptions: {
//         title: campos[nombre]
//       }
//     })

//     const atributos = []
//     fields.forEach(field => {
//       atributos.push(field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length))
//     })
//     let nombresCod
//     if (nombre === 'Tipo_accidente') {
//       nombresCod = {
//         'Salidas de v a': 'Salidas de vía',
//         Colisiones: 'Colisiones',
//         Alcances: 'Alcances',
//         Choques: 'Choques',
//         Otros: 'Otros',
//         'Atropellos de animales': 'Atropellos de animales',
//         Caidas: 'Caídas',
//         Vuelcos: 'Vuelcos',
//         'Atropellos de peatones': 'Atropellos de peatones',
//         'cluster default': 'Agrupación',
//         'Sin datos': 'Sin datos'
//       }
//     } else {
//       nombresCod = comparacion(atributos, attUnique)
//     }
//     const fieldInfos = fields.map(field => {
//       return {
//         fieldName: field.name,
//         label: nombresCod[field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)],
//         format: {
//           places: 0,
//           digitSeparator: true
//         }
//       }
//     }
//     )
//     if (attUnique.length < 11) {
//       fieldInfos.pop()
//     }

//     // maps the field names for the popup chart
//     const fieldNames = fieldInfos.map(field => {
//       return field.fieldName
//     })

//     const popupTemplate = {
//       title: 'Resumen del clúster',
//       content: [{
//         type: 'text',
//         text: 'This cluster represents <b>{cluster_count}</b> features. '
//       },
//       {
//         type: 'media',
//         mediaInfos: [{
//           title: 'Reports',
//           type: 'pie-chart',
//           value: {
//             fields: fieldNames
//           }
//         }]
//       },
//       {
//         type: 'fields'
//       }],
//       fieldInfos
//     }
//     renderer.attributes.map((field) => {
//       if (attUnique.length < 11 && field.field.includes('default')) {
//         return (renderer.attributes.splice(renderer.attributes.findIndex(function (elemento) {
//           return elemento.field === field.field
//         }), 1))
//       } else {
//         return (field.label = nombresCod[field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)])
//       }
//     })

//     layer.featureReduction = {
//       type: 'cluster',
//       fields: fields,
//       clusterMinSize: 16,
//       renderer,
//       popupTemplate,
//         labelingInfo: []      
//     }
//     setEjecutar(false)
//   }
//   useEffect(() => {
//     if (jimuMapView && nombre && nombreCapa !== '') {
//       const layer1 = jimuMapView.view.map.findLayerById(nombreCapa)
//       const field = layer1.getField(nombre)
//       const query = layer1.createQuery()
//       query.outFields = [field.name]
//       query.maxRecordCountFactor = 3
//       const obtenerAttUnique = async () => {
//         const attributes = []
//         const result = await layer1.queryFeatures(query)
//         result.features.forEach((feature) => {
//           const value = feature.attributes[field.name]
//           attributes.push(value)
//         })
//         const attUnique = Array.from(new Set(attributes))
//         return (attUnique)
//       }

//       obtenerAttUnique().then((attUnique) => {
//         const items = []
//         console.log(attUnique)
//         attUnique.forEach((att) => {
//           const item = {}
//           if (att === null) {
//             item['value'] = 'Sin datos'
//             item['label'] = 'Sin datos'
//           } else {
//             item['value'] = att.toString()
//             item['label'] = att.toString()
//           }
//           items.push(item)
//         })
//         setSeleccionables(items)

//         if (ejecutar) {
//           if (valoresAgg.length <= 9 && valoresAgg.length !== 0) {
//             for (const att of attUnique) {
//               let coincidencias = 0
//               for (const att2 of valoresAgg) {
//                 if (att === att2) {
//                   coincidencias++
//                 }
//               }
//               if (coincidencias === 0) {
//                 valoresAgg.push(att)
//                 break
//               }
//             }
//             simbologia(valoresAgg.slice(0, -1), layer1, field.name)
//           } else {
//             simbologia(attUnique, layer1, field.name)
//           }
//           setAttUnico(attUnique)
//           cluster ? createPieChartRenderer(layer1, attUnique) : layer1.featureReduction = {}; setEjecutar(false)
//         }
//       })

//       function simbologia (listaValores, capa, campo) {
//         let valueColor = {}
//         const symbology = []
//         if (campo === 'Tipo_accidente') {
//           const tipoAcci = {
//             'Salidas de vía': [203, 0, 203],
//             Colisiones: [101, 178, 255],
//             Alcances: [255, 153, 50],
//             Choques: [153, 255, 229],
//             Otros: [0, 63, 255],
//             'Atropellos de animales': [255, 255, 50],
//             Caidas: [140, 255, 101],
//             Vuelcos: [255, 0, 197],
//             'Atropellos de peatones': [216, 255, 101],
//             'Sin datos': [255,0,0]
//           }
//           valueColor = tipoAcci
//           for (const atributo in tipoAcci) {
//             const fielSimb = {
//               value: atributo,
//               label: atributo,
//               symbol: {
//                 type: 'simple-marker',
//                 color: tipoAcci[atributo],
//                 outline: null,
//                 size: 6
//               }
//             }
//             symbology.push(fielSimb)
//           }
//         } else if (campo === 'Subtipo_Accidente' || campo === 'Año' || campo === 'Factores_atmosfericos' || campo === 'Superficie' || campo==='Factor_concurrente_1') {
//           for (const atributo of listaValores.slice(0, 10)) {
//             const color = generarColorAleatorio()
//             valueColor[atributo] = color
//             const fielSimb = {
//               value: atributo,
//               label: atributo,
//               symbol: {
//                 type: 'simple-marker',
//                 color: color,
//                 outline: null,
//                 size: 6
//               }
//             }
//             symbology.push(fielSimb)
//           }
//         } else {
//           for (const atributo of listaValores) {
//             const color = generarColorAleatorio()
//             valueColor[atributo] = color
//             const fielSimb = {
//               value: atributo,
//               label: atributo,
//               symbol: {
//                 type: 'simple-marker',
//                 color: color,
//                 outline: null,
//                 size: 6
//               }
//             }
//             symbology.push(fielSimb)
//           }
//         }

//         const colorAgg = [195, 195, 195]
//         const renderer = new UniqueValueRenderer({
//           field: campo,
//           defaultSymbol: {
//             type: 'simple-marker',
//             color: colorAgg,
//             outline: null,
//             size: 6
//           },
//           uniqueValueInfos: symbology
//         })

//         capa.renderer = renderer
//       }
//     }
//     setValoresAgg([])
//   }, [jimuMapView, nombre, nombreCapa, ejecutar])

//   useEffect(() => {
//     if (jimuMapView && nombre && nombreCapa !== undefined) {
//       const layer1 = jimuMapView.view.map.findLayerById(nombreCapa)
//       cluster ? createPieChartRenderer(layer1, attUnico) : layer1.featureReduction = {}; setEjecutar(false)
//     }
//   }, [cluster])
// // 👉 deja el Select vacío al recibir el trigger
// useEffect(() => {
//   const trig = (props as any)?.stateProps?.resetCampoTrigger
//   if (!trig) return

//   // “vaciar” el select y estados ligados a él (ajusta lo que necesites)
//   setNombre(undefined)                  // o setNombre('')
//   setSeleccionables(Immutable([]))
//   setValoresAgg([])
//   setEjecutar(false)

//   // si el Select no se redibuja, fuerza remount
//   setSelectKey(k => k + 1)

//   // resetear el trigger para futuros usos
//   getAppStore().dispatch(
//     appActions.widgetStatePropChange(props.id, 'resetCampoTrigger', 0)
//   )
// }, [(props as any)?.stateProps?.resetCampoTrigger])



//   return (
//     <div className="widget-setting-get-map-coordinates">
//       <div className="widget-starter jimu-widget">
//           {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
//           <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
//           )}
//       </div>
//       {props.useDataSources && props.useDataSources.length > 0 &&
//           <SettingSection
//             className="attribute-selector-section"
//             title={props.intl.formatMessage({
//               id: 'chooseAttributeSelectorLabel',
//               defaultMessage: defaultMessages.chooseAttribute
//             })}
//           >
//             <Select
//             id='seleccioneCampo'
//               key={selectKey}  
//              value={nombre ?? ''}  
//               onChange={fieldsListChangeHandler}
//               placeholder="Seleccione un campo..."
//               autoWidth
//               menuProps={{
//                 showArrow: true
//               }}>
//                 {/* opción vacía para que el select pueda estar vacío */}
//                 <option value="">{/* placeholder visual */}Seleccione un campo…</option>
//               {
//                 Object.keys(campos).map((campo) => (
//                   <option key={campo} value={campo}>{campos[campo]}</option>
//                 ))
//               }
//             </Select>
//           </SettingSection>
//         }
//         {(nombre === 'Subtipo_Accidente') &&
//           selectAgregate(seleccionables)
//         }
//         {(nombre === 'Año') &&
//           selectAgregate(seleccionables)
//         }
//         {(nombre === 'Superficie') &&
//           selectAgregate(seleccionables)
//         }
//         {(nombre === 'Factores_atmosfericos') &&
//           selectAgregate(seleccionables)
//         }
//         {(nombre === 'Factor_concurrente_1') &&
//           selectAgregate(seleccionables)
//         }
        
//         <SettingSection
//           className="attribute-selector-section"
//         >
//             <Button
//               onClick={ejecucion}
//               size="sm"
//             >
//               Ejecutar
//             </Button>
//             {ejecutar &&
//              <Loading
//               height={200}
//               type="DONUT"
//               width={200}
//               />
//              }
//         </SettingSection>
//         <SettingSection
//           className="attribute-selector-section"
//         >
//             <Switch style={ { paddingTop: '10px' } } checked={cluster} onChange={() => {
//               setCluster(!cluster)
//             }} />   Activa o desactiva el clúster
//         </SettingSection>
//     </div>
//   )
// }
