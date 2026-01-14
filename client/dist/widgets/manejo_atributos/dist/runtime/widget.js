System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/manejo_atributos/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__)
/* harmony export */ });
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
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYW5lam9fYXRyaWJ1dG9zL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDTm5ELDBJQUEwSTtBQUMxSSw0Q0FBNEM7QUFDNUMsdURBQXVEO0FBQ3ZELHVFQUF1RTtBQUN2RSxxREFBcUQ7QUFDckQsV0FBVztBQUNYLG1CQUFtQjtBQUNuQiwrQ0FBK0M7QUFDL0MsdUVBQXVFO0FBQ3ZFLGtGQUFrRjtBQUNsRiwrRkFBK0Y7QUFDL0YsdUdBQXVHO0FBRXZHLCtDQUErQztBQUMvQyxpRUFBaUU7QUFFakUsb0VBQW9FO0FBQ3BFLGtFQUFrRTtBQUNsRSwyREFBMkQ7QUFDM0Qsa0VBQWtFO0FBQ2xFLHFEQUFxRDtBQUNyRCx5R0FBeUc7QUFDekcscURBQXFEO0FBQ3JELG9EQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFFaEQsZ0ZBQWdGO0FBQ2hGLDRFQUE0RTtBQUU1RSxtRUFBbUU7QUFDbkUsK0VBQStFO0FBRS9FLCtEQUErRDtBQUMvRCxvQkFBb0I7QUFDcEIsK0RBQStEO0FBQy9ELGNBQWM7QUFFZCwrREFBK0Q7QUFDL0Qsb0JBQW9CO0FBQ3BCLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFFcEIsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCxnRUFBZ0U7QUFFaEUsbUZBQW1GO0FBRW5GLDBCQUEwQjtBQUMx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QUFtRDtBQUNuRCxxREFBcUQ7QUFDckQsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSwyRkFBMkY7QUFDM0Ysa0JBQWtCO0FBQ2xCLHVEQUF1RDtBQUN2RCwrRUFBK0U7QUFDL0UscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWix3Q0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixtREFBbUQ7QUFDbkQsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixrREFBa0Q7QUFDbEQsMkNBQTJDO0FBQzNDLFlBQVk7QUFFWiwwQkFBMEI7QUFDMUIsbURBQW1EO0FBQ25ELFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsb0NBQW9DO0FBQ3BDLDBCQUEwQjtBQUMxQixnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQixtREFBbUQ7QUFDbkQsWUFBWTtBQUNaLDJGQUEyRjtBQUMzRixxQ0FBcUM7QUFDckMsb0RBQW9EO0FBQ3BELDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFFSSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFuZWpvX2F0cmlidXRvcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8vIGltcG9ydCB7IGpzeCwgSW1tdXRhYmxlLCBKaW11RmllbGRUeXBlLFJlYWN0UmVkdXggLGFwcEFjdGlvbnMsIHR5cGUgSW1tdXRhYmxlQXJyYXksIGdldEFwcFN0b3JlLCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG4vLyBpbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG4vLyBpbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbi8vIGltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7XHJcbi8vICAgU2V0dGluZ1NlY3Rpb25cclxuLy8gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuLy8gaW1wb3J0IFVuaXF1ZVZhbHVlUmVuZGVyZXIgZnJvbSAnZXNyaS9yZW5kZXJlcnMvVW5pcXVlVmFsdWVSZW5kZXJlcidcclxuLy8gaW1wb3J0ICogYXMgcGllQ2hhcnRSZW5kZXJlckNyZWF0b3IgZnJvbSAnZXNyaS9zbWFydE1hcHBpbmcvcmVuZGVyZXJzL3BpZUNoYXJ0J1xyXG4vLyBpbXBvcnQgeyBTZWxlY3QsIE11bHRpU2VsZWN0LCB0eXBlIE11bHRpU2VsZWN0SXRlbSwgQnV0dG9uLCBMb2FkaW5nLCBTd2l0Y2ggfSBmcm9tICdqaW11LXVpJ1xyXG4vLyBpbXBvcnQgeyBjb252ZXJ0UGFyYW1ldGVySW5mb3NPZkdQVmFsdWVUYWJsZSB9IGZyb20gJ2Rpc3Qvd2lkZ2V0cy9hcmNnaXMvYW5hbHlzaXMvc3JjL3J1bnRpbWUvdXRpbHMnXHJcblxyXG4vLyAvLyBpbXBvcnQgTGVnZW5kIGZyb20gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCI7XHJcbi8vIC8vIGltcG9ydCBMZWdlbmRWTSBmcm9tIFwiZXNyaS93aWRnZXRzL0xlZ2VuZC9MZWdlbmRWaWV3TW9kZWxcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPHVua25vd24+KSB7XHJcbi8vICAgY29uc3Qgc3VwcG9ydGVkRmllbGRUeXBlcyA9IEltbXV0YWJsZShbSmltdUZpZWxkVHlwZS5TdHJpbmddKVxyXG4vLyAgIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnVGlwb19hY2NpZGVudGUnKVxyXG4vLyAgIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuLy8gICBjb25zdCBbbm9tYnJlQ2FwYSwgc2V0Tm9tYnJlQ2FwYV0gPSB1c2VTdGF0ZSgnJylcclxuLy8gICBjb25zdCBbc2VsZWNjaW9uYWJsZXMsIHNldFNlbGVjY2lvbmFibGVzXSA9IHVzZVN0YXRlPEltbXV0YWJsZUFycmF5PE11bHRpU2VsZWN0SXRlbT4+KEltbXV0YWJsZShbXSkpXHJcbi8vICAgY29uc3QgW3ZhbG9yZXNBZ2csIHNldFZhbG9yZXNBZ2ddID0gdXNlU3RhdGUoW10pXHJcbi8vICAgY29uc3QgW2VqZWN1dGFyLCBzZXRFamVjdXRhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuLy8gICBjb25zdCBbY2x1c3Rlciwgc2V0Q2x1c3Rlcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4vLyAgIGNvbnN0IFthdHRVbmljbywgc2V0QXR0VW5pY29dID0gdXNlU3RhdGUoW10pXHJcbi8vICAgLy8gY29uc3QgW2xheWVyLCBzZXRMYXllcl0gPSB1c2VTdGF0ZTxMYXllcj4oKVxyXG4vLyBjb25zdCBbc2VsZWN0S2V5LCBzZXRTZWxlY3RLZXldID0gdXNlU3RhdGUoMClcclxuXHJcbi8vIC8vIPCfkYcgTXVlc3RyYSBlbCBpZCByZWFsIGRlbCByZWNlcHRvciAocG9yIHNpIGVsIGVtaXNvciBhcHVudGEgYWwgZXF1aXZvY2FkbylcclxuLy8gdXNlRWZmZWN0KCgpID0+IHsgY29uc29sZS5sb2coJ1tSZWNlcHRvcl0gcHJvcHMuaWQgPScsIHByb3BzLmlkKTsgfSwgW10pO1xyXG5cclxuLy8gLy8gTGVlIFRPRE8gdHUgd2lkZ2V0c1N0YXRlIHBhcmEgcG9kZXIgaW5zcGVjY2lvbmFybG8gZsOhY2lsbWVudGVcclxuLy8gY29uc3QgbXlXUyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHM6IGFueSkgPT4gcy53aWRnZXRzU3RhdGU/Lltwcm9wcy5pZF0pO1xyXG5cclxuLy8gLy8gTG9nIGRlIGxvIHF1ZSBsbGVnYSAodmVyw6FzIGVsIG9iamV0byBjb21wbGV0byBhbCBjYW1iaWFyKVxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdbUmVjZXB0b3JdIHdpZGdldHNTdGF0ZSBtw61vIGNhbWJpw7Mg4oaSJywgbXlXUyk7XHJcbi8vIH0sIFtteVdTXSk7XHJcblxyXG4vLyAvLyBNYW5lamEgZWwgdmFsdWVzT3ZlcnJpZGUgY29uIG5vbmNlIHBhcmEgcXVlIFNJRU1QUkUgZW50cmVcclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBjb25zdCBwID0gbXlXUz8udmFsdWVzT3ZlcnJpZGU7XHJcbi8vICAgaWYgKCFwKSByZXR1cm47XHJcblxyXG4vLyAgIC8vIFB1ZWRlIHZlbmlyIGNvbW8gc3RyaW5nIG8gY29tbyBvYmpldG8geyB2YWx1ZSwgbm9uY2UgfVxyXG4vLyAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHAgPT09ICdzdHJpbmcnID8gcCA6IHAudmFsdWU7XHJcbi8vICAgY29uc3Qgbm9uY2UgPSB0eXBlb2YgcCA9PT0gJ29iamVjdCcgPyBwLm5vbmNlIDogRGF0ZS5ub3coKTtcclxuXHJcbi8vICAgY29uc29sZS5sb2coJ/CflJQgW1JlY2VwdG9yXSB2YWx1ZXNPdmVycmlkZSByZWNpYmlkbzonLCB2YWx1ZSwgJ25vbmNlOicsIG5vbmNlKTtcclxuXHJcbi8vICAgLy8gQXBsaWNhIGFsIDxTZWxlY3Q+XHJcbi8vICAgc2V0Tm9tYnJlKHZhbHVlIHx8IHVuZGVmaW5lZCk7XHJcbi8vICAgc2V0U2VsZWNjaW9uYWJsZXMoSW1tdXRhYmxlKFtdKSk7XHJcbi8vICAgc2V0VmFsb3Jlc0FnZyhbXSk7XHJcbi8vICAgc2V0RWplY3V0YXIoZmFsc2UpO1xyXG4vLyAgIHNldFNlbGVjdEtleShrID0+IGsgKyAxKTtcclxuLy8gfSwgW215V1M/LnZhbHVlc092ZXJyaWRlPy5ub25jZV0pO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgaWYgKHByb3BzLnVzZURhdGFTb3VyY2VzICYmIHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgY29uc3Qgbm9tYnJlQ2FwYSA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZC5zcGxpdCgnLScpWzFdXHJcbi8vICAgICAgIHNldE5vbWJyZUNhcGEobm9tYnJlQ2FwYSkgLy8gTm8gY2FtYmlhIGVsIGVzdGlsbyBhbCBjYW1iaWFyIGxhIGZ1ZW50ZSBkZSBkYXRvcyBkZSBsYSBjYXBhLCBtaXJhcmxvIGJpZW5cclxuLy8gICAgIH1cclxuLy8gICB9LCBbcHJvcHMudXNlRGF0YVNvdXJjZXNdKVxyXG5cclxuLy8gICBmdW5jdGlvbiBjb21wYXJhY2lvbiAoYXRyaWJ1dG9zLCBsaXN0YU5vbWJyZXMpIHtcclxuLy8gICAgIGNvbnN0IGZpbmFsID0ge31cclxuLy8gICAgIGxpc3RhTm9tYnJlcyA9IGxpc3RhTm9tYnJlcy5tYXAoU3RyaW5nKVxyXG4vLyAgICAgZm9yIChjb25zdCBhdHJpYnV0byBvZiBhdHJpYnV0b3MpIHtcclxuLy8gICAgICAgY29uc3QgbkFjaWVydG9zID0ge31cclxuLy8gICAgICAgY29uc3QgbGlzdGFBY2llcnRvcyA9IFtdXHJcbi8vICAgICAgIGZvciAoY29uc3Qgbm9tYnJlIG9mIGxpc3RhTm9tYnJlcykge1xyXG4vLyAgICAgICAgIGxldCBhY2llcnRvcyA9IDBcclxuLy8gICAgICAgICBpZiAoYXRyaWJ1dG8ubGVuZ3RoID09PSBub21icmUubGVuZ3RoKSB7XHJcbi8vICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0cmlidXRvLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChhdHJpYnV0b1tpXSA9PT0gbm9tYnJlW2ldKSB7XHJcbi8vICAgICAgICAgICAgICAgYWNpZXJ0b3MrK1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIG5BY2llcnRvc1thY2llcnRvc10gPSBub21icmVcclxuLy8gICAgICAgICBsaXN0YUFjaWVydG9zLnB1c2goYWNpZXJ0b3MpXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgZnVuY3Rpb24gY29tcGFyYXIgKGEsIGIpIHtcclxuLy8gICAgICAgICByZXR1cm4gYiAtIGEgLy8gUmVzdGEgYiBkZSBhIHBhcmEgb3JkZW5hciBkZSBtYXlvciBhIG1lbm9yXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgbGlzdGFBY2llcnRvcy5zb3J0KGNvbXBhcmFyKVxyXG4vLyAgICAgICBpZiAobGlzdGFBY2llcnRvc1swXSA9PT0gMCkge1xyXG4vLyAgICAgICAgIGlmIChhdHJpYnV0byA9PT0gJyAnKSB7XHJcbi8vICAgICAgICAgICBmaW5hbFthdHJpYnV0b10gPSAnICdcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgZmluYWxbYXRyaWJ1dG9dID0gJ0FncnVwYWNpw7NuJ1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBmaW5hbFthdHJpYnV0b10gPSBuQWNpZXJ0b3NbbGlzdGFBY2llcnRvc1swXV1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIChmaW5hbClcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGNhbXBvcyA9IHtcclxuLy8gICAgIFRpcG9fYWNjaWRlbnRlOiAnVGlwbyBkZSBhY2NpZGVudGUnLFxyXG4vLyAgICAgU3VidGlwb19BY2NpZGVudGU6ICdTdWJ0aXBvIGRlIEFjY2lkZW50ZScsXHJcbi8vICAgICBTZW50aWRvOiAnU2VudGlkbycsXHJcbi8vICAgICBTdXBlcmZpY2llOiAnU3VwZXJmaWNpZScsXHJcbi8vICAgICBMdW1pbm9zaWRhZDogJ0x1bWlub3NpZGFkJyxcclxuLy8gICAgIEZhY3RvcmVzX2F0bW9zZmVyaWNvczogJ0ZhY3RvcmVzIGF0bW9zZsOpcmljb3MnLFxyXG4vLyAgICAgVGlwb19kaWE6ICdUaXBvIGRlIGTDrWEnLFxyXG4vLyAgICAgQcOxbzogJ0HDsW8nLy8sXHJcbi8vICAgICBGYWN0b3JfY29uY3VycmVudGVfMTogJ0ZhY3RvciBjb25jdXJyZW50ZSdcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuLy8gICAgIGlmIChqbXYpIHtcclxuLy8gICAgICAgc2V0SmltdU1hcFZpZXcoam12KVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gZ2VuZXJhckNvbG9yQWxlYXRvcmlvICgpIHtcclxuLy8gICAgIHJldHVybiBbXHJcbi8vICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NiksXHJcbi8vICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NiksXHJcbi8vICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NilcclxuLy8gICAgIF1cclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGZpZWxkc0xpc3RDaGFuZ2VIYW5kbGVyID0gKGV2dCwgaXRlbSkgPT4ge1xyXG4vLyAgICAgLy8gaWYgKGV2dCkge1xyXG4vLyAgICAgLy8gICBzZXROb21icmUoZXZ0LnRhcmdldC52YWx1ZSlcclxuLy8gICAgIC8vIH1cclxuLy8gICAgICAgaWYgKCFldnQpIHJldHVyblxyXG4vLyAgICAgICBjb25zdCB2ID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4vLyAgICAgICBzZXROb21icmUodiA9PT0gJycgPyB1bmRlZmluZWQgOiB2KSAgLy8g4oaQIGFkbWl0ZSBsaW1waWFyIGEgdmFjw61vXHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBlamVjdWNpb24gPSAoKSA9PiB7XHJcbi8vICAgICBzZXRFamVjdXRhcih0cnVlKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gc2VsZWN0QWdyZWdhdGUgKGxpc3RhSXRlbXMpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT1cImF0dHJpYnV0ZS1zZWxlY3Rvci1zZWN0aW9uXCJcclxuLy8gICAgICAgICB0aXRsZT0nU2VsZWNjaW9uZSBsb3MgYXRyaWJ1dG9zIHF1ZSBubyBzZSBxdWllcmFuIHJlc3VtaXInXHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4vLyAgICAgICAgICAgaXRlbXMgPSB7bGlzdGFJdGVtc31cclxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNpb25lIDkgYXRyaWJ1dG9zIMO6bmljb3NcIlxyXG4vLyAgICAgICAgICAgZGlzcGxheUJ5VmFsdWVzPXtmdW5jdGlvbiBkaXNwbGF5VmFsdWVzICh2YWx1ZXMpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlcy5sZW5ndGh9IHNlbGVjY2lvbmFkb3NgXHJcbi8vICAgICAgICAgICB9IH1cclxuLy8gICAgICAgICAgIG9uQ2xpY2tJdGVtPXtmdW5jdGlvbiBzZWxlY2Npb25WYWxvcmVzIChldnQsIHZhbHVlLCBzZWxlY3RlZFZhbHVlcykge1xyXG4vLyAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoIDw9IDkpIHtcclxuLy8gICAgICAgICAgICAgICBzZXRWYWxvcmVzQWdnKHNlbGVjdGVkVmFsdWVzKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9IH1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gICBjb25zdCBjcmVhdGVQaWVDaGFydFJlbmRlcmVyID0gYXN5bmMgKGxheWVyLCBhdHRVbmlxdWUpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgcmVuZGVyZXIsIGZpZWxkcyB9ID0gYXdhaXQgcGllQ2hhcnRSZW5kZXJlckNyZWF0b3IuY3JlYXRlUmVuZGVyZXJGb3JDbHVzdGVyaW5nKHtcclxuLy8gICAgICAgbGF5ZXIsXHJcbi8vICAgICAgIGxlZ2VuZE9wdGlvbnM6IHtcclxuLy8gICAgICAgICB0aXRsZTogY2FtcG9zW25vbWJyZV1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICBjb25zdCBhdHJpYnV0b3MgPSBbXVxyXG4vLyAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4vLyAgICAgICBhdHJpYnV0b3MucHVzaChmaWVsZC5uYW1lLnNwbGl0KCdfJykubWFwKChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKCdTVU0nLCAnJykpKS5qb2luKCcgJykucmVwbGFjZSgnU1VNJywgJycpLnNsaWNlKDEsIGZpZWxkLm5hbWUuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykubGVuZ3RoKSlcclxuLy8gICAgIH0pXHJcbi8vICAgICBsZXQgbm9tYnJlc0NvZFxyXG4vLyAgICAgaWYgKG5vbWJyZSA9PT0gJ1RpcG9fYWNjaWRlbnRlJykge1xyXG4vLyAgICAgICBub21icmVzQ29kID0ge1xyXG4vLyAgICAgICAgICdTYWxpZGFzIGRlIHYgYSc6ICdTYWxpZGFzIGRlIHbDrWEnLFxyXG4vLyAgICAgICAgIENvbGlzaW9uZXM6ICdDb2xpc2lvbmVzJyxcclxuLy8gICAgICAgICBBbGNhbmNlczogJ0FsY2FuY2VzJyxcclxuLy8gICAgICAgICBDaG9xdWVzOiAnQ2hvcXVlcycsXHJcbi8vICAgICAgICAgT3Ryb3M6ICdPdHJvcycsXHJcbi8vICAgICAgICAgJ0F0cm9wZWxsb3MgZGUgYW5pbWFsZXMnOiAnQXRyb3BlbGxvcyBkZSBhbmltYWxlcycsXHJcbi8vICAgICAgICAgQ2FpZGFzOiAnQ2HDrWRhcycsXHJcbi8vICAgICAgICAgVnVlbGNvczogJ1Z1ZWxjb3MnLFxyXG4vLyAgICAgICAgICdBdHJvcGVsbG9zIGRlIHBlYXRvbmVzJzogJ0F0cm9wZWxsb3MgZGUgcGVhdG9uZXMnLFxyXG4vLyAgICAgICAgICdjbHVzdGVyIGRlZmF1bHQnOiAnQWdydXBhY2nDs24nLFxyXG4vLyAgICAgICAgICdTaW4gZGF0b3MnOiAnU2luIGRhdG9zJ1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBub21icmVzQ29kID0gY29tcGFyYWNpb24oYXRyaWJ1dG9zLCBhdHRVbmlxdWUpXHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zdCBmaWVsZEluZm9zID0gZmllbGRzLm1hcChmaWVsZCA9PiB7XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgZmllbGROYW1lOiBmaWVsZC5uYW1lLFxyXG4vLyAgICAgICAgIGxhYmVsOiBub21icmVzQ29kW2ZpZWxkLm5hbWUuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykuc2xpY2UoMSwgZmllbGQubmFtZS5zcGxpdCgnXycpLm1hcCgobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgnU1VNJywgJycpKSkuam9pbignICcpLnJlcGxhY2UoJ1NVTScsICcnKS5sZW5ndGgpXSxcclxuLy8gICAgICAgICBmb3JtYXQ6IHtcclxuLy8gICAgICAgICAgIHBsYWNlczogMCxcclxuLy8gICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiB0cnVlXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICApXHJcbi8vICAgICBpZiAoYXR0VW5pcXVlLmxlbmd0aCA8IDExKSB7XHJcbi8vICAgICAgIGZpZWxkSW5mb3MucG9wKClcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBtYXBzIHRoZSBmaWVsZCBuYW1lcyBmb3IgdGhlIHBvcHVwIGNoYXJ0XHJcbi8vICAgICBjb25zdCBmaWVsZE5hbWVzID0gZmllbGRJbmZvcy5tYXAoZmllbGQgPT4ge1xyXG4vLyAgICAgICByZXR1cm4gZmllbGQuZmllbGROYW1lXHJcbi8vICAgICB9KVxyXG5cclxuLy8gICAgIGNvbnN0IHBvcHVwVGVtcGxhdGUgPSB7XHJcbi8vICAgICAgIHRpdGxlOiAnUmVzdW1lbiBkZWwgY2zDunN0ZXInLFxyXG4vLyAgICAgICBjb250ZW50OiBbe1xyXG4vLyAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuLy8gICAgICAgICB0ZXh0OiAnVGhpcyBjbHVzdGVyIHJlcHJlc2VudHMgPGI+e2NsdXN0ZXJfY291bnR9PC9iPiBmZWF0dXJlcy4gJ1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgdHlwZTogJ21lZGlhJyxcclxuLy8gICAgICAgICBtZWRpYUluZm9zOiBbe1xyXG4vLyAgICAgICAgICAgdGl0bGU6ICdSZXBvcnRzJyxcclxuLy8gICAgICAgICAgIHR5cGU6ICdwaWUtY2hhcnQnLFxyXG4vLyAgICAgICAgICAgdmFsdWU6IHtcclxuLy8gICAgICAgICAgICAgZmllbGRzOiBmaWVsZE5hbWVzXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfV1cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIHR5cGU6ICdmaWVsZHMnXHJcbi8vICAgICAgIH1dLFxyXG4vLyAgICAgICBmaWVsZEluZm9zXHJcbi8vICAgICB9XHJcbi8vICAgICByZW5kZXJlci5hdHRyaWJ1dGVzLm1hcCgoZmllbGQpID0+IHtcclxuLy8gICAgICAgaWYgKGF0dFVuaXF1ZS5sZW5ndGggPCAxMSAmJiBmaWVsZC5maWVsZC5pbmNsdWRlcygnZGVmYXVsdCcpKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIChyZW5kZXJlci5hdHRyaWJ1dGVzLnNwbGljZShyZW5kZXJlci5hdHRyaWJ1dGVzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudG8pIHtcclxuLy8gICAgICAgICAgIHJldHVybiBlbGVtZW50by5maWVsZCA9PT0gZmllbGQuZmllbGRcclxuLy8gICAgICAgICB9KSwgMSkpXHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgcmV0dXJuIChmaWVsZC5sYWJlbCA9IG5vbWJyZXNDb2RbZmllbGQuZmllbGQuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykuc2xpY2UoMSwgZmllbGQuZmllbGQuc3BsaXQoJ18nKS5tYXAoKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoJ1NVTScsICcnKSkpLmpvaW4oJyAnKS5yZXBsYWNlKCdTVU0nLCAnJykubGVuZ3RoKV0pXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcblxyXG4vLyAgICAgbGF5ZXIuZmVhdHVyZVJlZHVjdGlvbiA9IHtcclxuLy8gICAgICAgdHlwZTogJ2NsdXN0ZXInLFxyXG4vLyAgICAgICBmaWVsZHM6IGZpZWxkcyxcclxuLy8gICAgICAgY2x1c3Rlck1pblNpemU6IDE2LFxyXG4vLyAgICAgICByZW5kZXJlcixcclxuLy8gICAgICAgcG9wdXBUZW1wbGF0ZSxcclxuLy8gICAgICAgICBsYWJlbGluZ0luZm86IFtdICAgICAgXHJcbi8vICAgICB9XHJcbi8vICAgICBzZXRFamVjdXRhcihmYWxzZSlcclxuLy8gICB9XHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGlmIChqaW11TWFwVmlldyAmJiBub21icmUgJiYgbm9tYnJlQ2FwYSAhPT0gJycpIHtcclxuLy8gICAgICAgY29uc3QgbGF5ZXIxID0gamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChub21icmVDYXBhKVxyXG4vLyAgICAgICBjb25zdCBmaWVsZCA9IGxheWVyMS5nZXRGaWVsZChub21icmUpXHJcbi8vICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIxLmNyZWF0ZVF1ZXJ5KClcclxuLy8gICAgICAgcXVlcnkub3V0RmllbGRzID0gW2ZpZWxkLm5hbWVdXHJcbi8vICAgICAgIHF1ZXJ5Lm1heFJlY29yZENvdW50RmFjdG9yID0gM1xyXG4vLyAgICAgICBjb25zdCBvYnRlbmVyQXR0VW5pcXVlID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXVxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxheWVyMS5xdWVyeUZlYXR1cmVzKHF1ZXJ5KVxyXG4vLyAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZC5uYW1lXVxyXG4vLyAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHZhbHVlKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgY29uc3QgYXR0VW5pcXVlID0gQXJyYXkuZnJvbShuZXcgU2V0KGF0dHJpYnV0ZXMpKVxyXG4vLyAgICAgICAgIHJldHVybiAoYXR0VW5pcXVlKVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBvYnRlbmVyQXR0VW5pcXVlKCkudGhlbigoYXR0VW5pcXVlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgaXRlbXMgPSBbXVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGF0dFVuaXF1ZSlcclxuLy8gICAgICAgICBhdHRVbmlxdWUuZm9yRWFjaCgoYXR0KSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCBpdGVtID0ge31cclxuLy8gICAgICAgICAgIGlmIChhdHQgPT09IG51bGwpIHtcclxuLy8gICAgICAgICAgICAgaXRlbVsndmFsdWUnXSA9ICdTaW4gZGF0b3MnXHJcbi8vICAgICAgICAgICAgIGl0ZW1bJ2xhYmVsJ10gPSAnU2luIGRhdG9zJ1xyXG4vLyAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgaXRlbVsndmFsdWUnXSA9IGF0dC50b1N0cmluZygpXHJcbi8vICAgICAgICAgICAgIGl0ZW1bJ2xhYmVsJ10gPSBhdHQudG9TdHJpbmcoKVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgc2V0U2VsZWNjaW9uYWJsZXMoaXRlbXMpXHJcblxyXG4vLyAgICAgICAgIGlmIChlamVjdXRhcikge1xyXG4vLyAgICAgICAgICAgaWYgKHZhbG9yZXNBZ2cubGVuZ3RoIDw9IDkgJiYgdmFsb3Jlc0FnZy5sZW5ndGggIT09IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yIChjb25zdCBhdHQgb2YgYXR0VW5pcXVlKSB7XHJcbi8vICAgICAgICAgICAgICAgbGV0IGNvaW5jaWRlbmNpYXMgPSAwXHJcbi8vICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHQyIG9mIHZhbG9yZXNBZ2cpIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChhdHQgPT09IGF0dDIpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgY29pbmNpZGVuY2lhcysrXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgIGlmIChjb2luY2lkZW5jaWFzID09PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICB2YWxvcmVzQWdnLnB1c2goYXR0KVxyXG4vLyAgICAgICAgICAgICAgICAgYnJlYWtcclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgc2ltYm9sb2dpYSh2YWxvcmVzQWdnLnNsaWNlKDAsIC0xKSwgbGF5ZXIxLCBmaWVsZC5uYW1lKVxyXG4vLyAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgc2ltYm9sb2dpYShhdHRVbmlxdWUsIGxheWVyMSwgZmllbGQubmFtZSlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIHNldEF0dFVuaWNvKGF0dFVuaXF1ZSlcclxuLy8gICAgICAgICAgIGNsdXN0ZXIgPyBjcmVhdGVQaWVDaGFydFJlbmRlcmVyKGxheWVyMSwgYXR0VW5pcXVlKSA6IGxheWVyMS5mZWF0dXJlUmVkdWN0aW9uID0ge307IHNldEVqZWN1dGFyKGZhbHNlKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSlcclxuXHJcbi8vICAgICAgIGZ1bmN0aW9uIHNpbWJvbG9naWEgKGxpc3RhVmFsb3JlcywgY2FwYSwgY2FtcG8pIHtcclxuLy8gICAgICAgICBsZXQgdmFsdWVDb2xvciA9IHt9XHJcbi8vICAgICAgICAgY29uc3Qgc3ltYm9sb2d5ID0gW11cclxuLy8gICAgICAgICBpZiAoY2FtcG8gPT09ICdUaXBvX2FjY2lkZW50ZScpIHtcclxuLy8gICAgICAgICAgIGNvbnN0IHRpcG9BY2NpID0ge1xyXG4vLyAgICAgICAgICAgICAnU2FsaWRhcyBkZSB2w61hJzogWzIwMywgMCwgMjAzXSxcclxuLy8gICAgICAgICAgICAgQ29saXNpb25lczogWzEwMSwgMTc4LCAyNTVdLFxyXG4vLyAgICAgICAgICAgICBBbGNhbmNlczogWzI1NSwgMTUzLCA1MF0sXHJcbi8vICAgICAgICAgICAgIENob3F1ZXM6IFsxNTMsIDI1NSwgMjI5XSxcclxuLy8gICAgICAgICAgICAgT3Ryb3M6IFswLCA2MywgMjU1XSxcclxuLy8gICAgICAgICAgICAgJ0F0cm9wZWxsb3MgZGUgYW5pbWFsZXMnOiBbMjU1LCAyNTUsIDUwXSxcclxuLy8gICAgICAgICAgICAgQ2FpZGFzOiBbMTQwLCAyNTUsIDEwMV0sXHJcbi8vICAgICAgICAgICAgIFZ1ZWxjb3M6IFsyNTUsIDAsIDE5N10sXHJcbi8vICAgICAgICAgICAgICdBdHJvcGVsbG9zIGRlIHBlYXRvbmVzJzogWzIxNiwgMjU1LCAxMDFdLFxyXG4vLyAgICAgICAgICAgICAnU2luIGRhdG9zJzogWzI1NSwwLDBdXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB2YWx1ZUNvbG9yID0gdGlwb0FjY2lcclxuLy8gICAgICAgICAgIGZvciAoY29uc3QgYXRyaWJ1dG8gaW4gdGlwb0FjY2kpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgZmllbFNpbWIgPSB7XHJcbi8vICAgICAgICAgICAgICAgdmFsdWU6IGF0cmlidXRvLFxyXG4vLyAgICAgICAgICAgICAgIGxhYmVsOiBhdHJpYnV0byxcclxuLy8gICAgICAgICAgICAgICBzeW1ib2w6IHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiB0aXBvQWNjaVthdHJpYnV0b10sXHJcbi8vICAgICAgICAgICAgICAgICBvdXRsaW5lOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgc2l6ZTogNlxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBzeW1ib2xvZ3kucHVzaChmaWVsU2ltYilcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2UgaWYgKGNhbXBvID09PSAnU3VidGlwb19BY2NpZGVudGUnIHx8IGNhbXBvID09PSAnQcOxbycgfHwgY2FtcG8gPT09ICdGYWN0b3Jlc19hdG1vc2Zlcmljb3MnIHx8IGNhbXBvID09PSAnU3VwZXJmaWNpZScgfHwgY2FtcG89PT0nRmFjdG9yX2NvbmN1cnJlbnRlXzEnKSB7XHJcbi8vICAgICAgICAgICBmb3IgKGNvbnN0IGF0cmlidXRvIG9mIGxpc3RhVmFsb3Jlcy5zbGljZSgwLCAxMCkpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgY29sb3IgPSBnZW5lcmFyQ29sb3JBbGVhdG9yaW8oKVxyXG4vLyAgICAgICAgICAgICB2YWx1ZUNvbG9yW2F0cmlidXRvXSA9IGNvbG9yXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGZpZWxTaW1iID0ge1xyXG4vLyAgICAgICAgICAgICAgIHZhbHVlOiBhdHJpYnV0byxcclxuLy8gICAgICAgICAgICAgICBsYWJlbDogYXRyaWJ1dG8sXHJcbi8vICAgICAgICAgICAgICAgc3ltYm9sOiB7XHJcbi8vICAgICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbi8vICAgICAgICAgICAgICAgICBvdXRsaW5lOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgc2l6ZTogNlxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBzeW1ib2xvZ3kucHVzaChmaWVsU2ltYilcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgZm9yIChjb25zdCBhdHJpYnV0byBvZiBsaXN0YVZhbG9yZXMpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgY29sb3IgPSBnZW5lcmFyQ29sb3JBbGVhdG9yaW8oKVxyXG4vLyAgICAgICAgICAgICB2YWx1ZUNvbG9yW2F0cmlidXRvXSA9IGNvbG9yXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGZpZWxTaW1iID0ge1xyXG4vLyAgICAgICAgICAgICAgIHZhbHVlOiBhdHJpYnV0byxcclxuLy8gICAgICAgICAgICAgICBsYWJlbDogYXRyaWJ1dG8sXHJcbi8vICAgICAgICAgICAgICAgc3ltYm9sOiB7XHJcbi8vICAgICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbi8vICAgICAgICAgICAgICAgICBvdXRsaW5lOiBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgc2l6ZTogNlxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBzeW1ib2xvZ3kucHVzaChmaWVsU2ltYilcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IGNvbG9yQWdnID0gWzE5NSwgMTk1LCAxOTVdXHJcbi8vICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVW5pcXVlVmFsdWVSZW5kZXJlcih7XHJcbi8vICAgICAgICAgICBmaWVsZDogY2FtcG8sXHJcbi8vICAgICAgICAgICBkZWZhdWx0U3ltYm9sOiB7XHJcbi8vICAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuLy8gICAgICAgICAgICAgY29sb3I6IGNvbG9yQWdnLFxyXG4vLyAgICAgICAgICAgICBvdXRsaW5lOiBudWxsLFxyXG4vLyAgICAgICAgICAgICBzaXplOiA2XHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgdW5pcXVlVmFsdWVJbmZvczogc3ltYm9sb2d5XHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgICAgY2FwYS5yZW5kZXJlciA9IHJlbmRlcmVyXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHNldFZhbG9yZXNBZ2coW10pXHJcbi8vICAgfSwgW2ppbXVNYXBWaWV3LCBub21icmUsIG5vbWJyZUNhcGEsIGVqZWN1dGFyXSlcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGlmIChqaW11TWFwVmlldyAmJiBub21icmUgJiYgbm9tYnJlQ2FwYSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgIGNvbnN0IGxheWVyMSA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQobm9tYnJlQ2FwYSlcclxuLy8gICAgICAgY2x1c3RlciA/IGNyZWF0ZVBpZUNoYXJ0UmVuZGVyZXIobGF5ZXIxLCBhdHRVbmljbykgOiBsYXllcjEuZmVhdHVyZVJlZHVjdGlvbiA9IHt9OyBzZXRFamVjdXRhcihmYWxzZSlcclxuLy8gICAgIH1cclxuLy8gICB9LCBbY2x1c3Rlcl0pXHJcbi8vIC8vIPCfkYkgZGVqYSBlbCBTZWxlY3QgdmFjw61vIGFsIHJlY2liaXIgZWwgdHJpZ2dlclxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHRyaWcgPSAocHJvcHMgYXMgYW55KT8uc3RhdGVQcm9wcz8ucmVzZXRDYW1wb1RyaWdnZXJcclxuLy8gICBpZiAoIXRyaWcpIHJldHVyblxyXG5cclxuLy8gICAvLyDigJx2YWNpYXLigJ0gZWwgc2VsZWN0IHkgZXN0YWRvcyBsaWdhZG9zIGEgw6lsIChhanVzdGEgbG8gcXVlIG5lY2VzaXRlcylcclxuLy8gICBzZXROb21icmUodW5kZWZpbmVkKSAgICAgICAgICAgICAgICAgIC8vIG8gc2V0Tm9tYnJlKCcnKVxyXG4vLyAgIHNldFNlbGVjY2lvbmFibGVzKEltbXV0YWJsZShbXSkpXHJcbi8vICAgc2V0VmFsb3Jlc0FnZyhbXSlcclxuLy8gICBzZXRFamVjdXRhcihmYWxzZSlcclxuXHJcbi8vICAgLy8gc2kgZWwgU2VsZWN0IG5vIHNlIHJlZGlidWphLCBmdWVyemEgcmVtb3VudFxyXG4vLyAgIHNldFNlbGVjdEtleShrID0+IGsgKyAxKVxyXG5cclxuLy8gICAvLyByZXNldGVhciBlbCB0cmlnZ2VyIHBhcmEgZnV0dXJvcyB1c29zXHJcbi8vICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcclxuLy8gICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHByb3BzLmlkLCAncmVzZXRDYW1wb1RyaWdnZXInLCAwKVxyXG4vLyAgIClcclxuLy8gfSwgWyhwcm9wcyBhcyBhbnkpPy5zdGF0ZVByb3BzPy5yZXNldENhbXBvVHJpZ2dlcl0pXHJcblxyXG5cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZ2V0LW1hcC1jb29yZGluYXRlc1wiPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zdGFydGVyIGppbXUtd2lkZ2V0XCI+XHJcbi8vICAgICAgICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4vLyAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0gLz5cclxuLy8gICAgICAgICAgICl9XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICB7cHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCAmJlxyXG4vLyAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dHJpYnV0ZS1zZWxlY3Rvci1zZWN0aW9uXCJcclxuLy8gICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbi8vICAgICAgICAgICAgICAgaWQ6ICdjaG9vc2VBdHRyaWJ1dGVTZWxlY3RvckxhYmVsJyxcclxuLy8gICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmNob29zZUF0dHJpYnV0ZVxyXG4vLyAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPFNlbGVjdFxyXG4vLyAgICAgICAgICAgICBpZD0nc2VsZWNjaW9uZUNhbXBvJ1xyXG4vLyAgICAgICAgICAgICAgIGtleT17c2VsZWN0S2V5fSAgXHJcbi8vICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlID8/ICcnfSAgXHJcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZpZWxkc0xpc3RDaGFuZ2VIYW5kbGVyfVxyXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSB1biBjYW1wby4uLlwiXHJcbi8vICAgICAgICAgICAgICAgYXV0b1dpZHRoXHJcbi8vICAgICAgICAgICAgICAgbWVudVByb3BzPXt7XHJcbi8vICAgICAgICAgICAgICAgICBzaG93QXJyb3c6IHRydWVcclxuLy8gICAgICAgICAgICAgICB9fT5cclxuLy8gICAgICAgICAgICAgICAgIHsvKiBvcGNpw7NuIHZhY8OtYSBwYXJhIHF1ZSBlbCBzZWxlY3QgcHVlZGEgZXN0YXIgdmFjw61vICovfVxyXG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPnsvKiBwbGFjZWhvbGRlciB2aXN1YWwgKi99U2VsZWNjaW9uZSB1biBjYW1wb+KApjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNhbXBvcykubWFwKChjYW1wbykgPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2FtcG99IHZhbHVlPXtjYW1wb30+e2NhbXBvc1tjYW1wb119PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICApKVxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbi8vICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB7KG5vbWJyZSA9PT0gJ1N1YnRpcG9fQWNjaWRlbnRlJykgJiZcclxuLy8gICAgICAgICAgIHNlbGVjdEFncmVnYXRlKHNlbGVjY2lvbmFibGVzKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB7KG5vbWJyZSA9PT0gJ0HDsW8nKSAmJlxyXG4vLyAgICAgICAgICAgc2VsZWN0QWdyZWdhdGUoc2VsZWNjaW9uYWJsZXMpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHsobm9tYnJlID09PSAnU3VwZXJmaWNpZScpICYmXHJcbi8vICAgICAgICAgICBzZWxlY3RBZ3JlZ2F0ZShzZWxlY2Npb25hYmxlcylcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgeyhub21icmUgPT09ICdGYWN0b3Jlc19hdG1vc2Zlcmljb3MnKSAmJlxyXG4vLyAgICAgICAgICAgc2VsZWN0QWdyZWdhdGUoc2VsZWNjaW9uYWJsZXMpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHsobm9tYnJlID09PSAnRmFjdG9yX2NvbmN1cnJlbnRlXzEnKSAmJlxyXG4vLyAgICAgICAgICAgc2VsZWN0QWdyZWdhdGUoc2VsZWNjaW9uYWJsZXMpXHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYXR0cmlidXRlLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPEJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VqZWN1Y2lvbn1cclxuLy8gICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgRWplY3V0YXJcclxuLy8gICAgICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgIHtlamVjdXRhciAmJlxyXG4vLyAgICAgICAgICAgICAgPExvYWRpbmdcclxuLy8gICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuLy8gICAgICAgICAgICAgICB0eXBlPVwiRE9OVVRcIlxyXG4vLyAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbi8vICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4vLyAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYXR0cmlidXRlLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPFN3aXRjaCBzdHlsZT17IHsgcGFkZGluZ1RvcDogJzEwcHgnIH0gfSBjaGVja2VkPXtjbHVzdGVyfSBvbkNoYW5nZT17KCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHNldENsdXN0ZXIoIWNsdXN0ZXIpXHJcbi8vICAgICAgICAgICAgIH19IC8+ICAgQWN0aXZhIG8gZGVzYWN0aXZhIGVsIGNsw7pzdGVyXHJcbi8vICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9