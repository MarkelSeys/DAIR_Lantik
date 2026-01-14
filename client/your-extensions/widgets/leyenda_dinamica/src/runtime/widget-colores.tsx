import { jsx, Immutable, JimuFieldType, ImmutableArray, getAppStore } from 'jimu-core'
import { type IMConfig } from '../config'
import defaultMessages from './translations/default'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import React, { useState, useEffect } from 'react'
import {
  SettingSection
} from 'jimu-ui/advanced/setting-components'
import UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer'
import * as pieChartRendererCreator from 'esri/smartMapping/renderers/pieChart'
import { Select, MultiSelect, type MultiSelectItem, Button, Loading, Switch } from 'jimu-ui'
// import Legend from "esri/widgets/Legend";
// import LegendVM from "esri/widgets/Legend/LegendViewModel";


// IMPORTA TU DICCIONARIO DE COLORES
// Ajusta la ruta si el archivo está en otra carpeta.
import accidentColors from '../../../pruebas/src/runtime/assets/accidentColors.json'

// ** normaliza textos a ascii + snake_case para casar con las claves del JSON */
const normalizeKey = (s: string) =>
  (s ?? '')
    .replace(/,/g, '') // elimina comas
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');


/** extrae [r,g,b] desde 'rgba(r,g,b,a)' o 'rgb(r,g,b)' */
const parseRgba = (rgba: string): number[] | null => {
  const m = rgba?.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null
}


 function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
/** obtiene el color [r,g,b] desde el JSON para (campo, valor). Si no existe -> null */
const getColorFromJson = (fieldName: string, value: String) => {


    var campoPrimeraMayusculas = capitalizeFirstLetter(fieldName);
    if(accidentColors[campoPrimeraMayusculas]){
        for (const key in accidentColors[campoPrimeraMayusculas]) {
            console.log('Primero:'+accidentColors[campoPrimeraMayusculas][key].nombre.toLowerCase()+'      Segundo:    '+value.toLowerCase())
            //console.log('Segundo'+value.toLowerCase())
            if (
              normalizeKey(accidentColors[campoPrimeraMayusculas][key].nombre.toLowerCase()) ===
              normalizeKey(value.toLowerCase())
            ) {
        
              return accidentColors[campoPrimeraMayusculas][key].color;
              break;
            }
          
          }

        return "rgb(200, 200, 200)";

    }else{
      return null;
    }
      
}

// Extiende las props para incluir la función onUpdate
interface DinLeyendProps extends AllWidgetSettingProps<IMConfig> {
  onUpdate: (newState: string) => void
  onRun: (runSt: boolean) => void
  onAtt: (attSt: {}) => void
}

export default function DinLeyend (props: DinLeyendProps) {
  const supportedFieldTypes = Immutable([JimuFieldType.String])
  const [nombre, setNombre] = useState('')//Tipo_accidente
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>()
  const [nombreCapa, setNombreCapa] = useState('')
  const [seleccionables, setSeleccionables] = useState<ImmutableArray<MultiSelectItem>>(Immutable([]))
  const [valoresAgg, setValoresAgg] = useState([])
  const [ejecutar, setEjecutar] = useState(false)
  const [cluster, setCluster] = useState(true)
  const [attUnico, setAttUnico] = useState([])
  // const [layer, setLayer] = useState<Layer>()

  useEffect(() => {
    if (props.useDataSources && props.useDataSources.length > 0) {
      const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
      setNombreCapa(nombreCapa) // No cambia el estilo al cambiar la fuente de datos de la capa, mirarlo bien
    }
  }, [props.useDataSources])

  function comparacion (atributos, listaNombres) {
    const final = {}
    listaNombres = listaNombres.map(String)
    for (const atributo of atributos) {
      const nAciertos = {}
      const listaAciertos = []
      for (const nombre of listaNombres) {
        let aciertos = 0
        if (atributo.length === nombre.length) {
          for (let i = 0; i < atributo.length; i++) {
            if (atributo[i] === nombre[i]) {
              aciertos++
            }
          }
        }
        nAciertos[aciertos] = nombre
        listaAciertos.push(aciertos)
      }
      function comparar (a, b) {
        return b - a // Resta b de a para ordenar de mayor a menor
      }
      listaAciertos.sort(comparar)
      if (listaAciertos[0] === 0) {
        if (atributo === ' ') {
          final[atributo] = ' '
        } else {
          final[atributo] = 'Agrupación'
        }
      } else {
        final[atributo] = nAciertos[listaAciertos[0]]
      }
    }
    return (final)
  }

  const campos = {
    Tipo_accidente: 'Tipo de accidente',
    Subtipo_Accidente: 'Subtipo de Accidente',
    Sentido: 'Sentido',
    Superficie: 'Superficie',
    Luminosidad: 'Luminosidad',
    Factores_atmosfericos: 'Factores atmosféricos',
    Tipo_dia: 'Tipo de día',
    Factor_Concurrente_3: 'Factor concurrente'
  }

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)
    }
  }

  function generarColorAleatorio () {
    return [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]
  }

  const fieldsListChangeHandler = (evt, item) => {
    if (evt) {
      setNombre(evt.target.value)
      props.onUpdate(evt.target.value)
    }
  }

  const ejecucion = () => {
    setEjecutar(true)
    props.onRun(true)
  }

  function selectAgregate (listaItems) {
    return (
      <SettingSection
        className="attribute-selector-section"
        title='Este atributo tiene más de 10 categorías, límite que el mapa no permite visualizar. Seleccione como máximo 9 atributos para visualizarlos en el mapa.'
        >
        <MultiSelect
          //values = {values}
          items = {listaItems}
          placeholder="Selecione 9 atributos únicos"
          displayByValues={function displayValues (values) {
            return `${values.length} seleccionados`
          } }
          //values={values}
          onClickItem={function seleccionValores (evt, value, selectedValues) {
            if (selectedValues.length <= 10) {
              setValoresAgg(selectedValues)
            }
          } }
        />
      </SettingSection>
    )
  }
  const createPieChartRenderer = async (layer, attUnique) => {
    const { renderer, fields } = await pieChartRendererCreator.createRendererForClustering({
      layer,
      legendOptions: {
        title: campos[nombre]
      }
    })

    const atributos = []
    fields.forEach(field => {
      atributos.push(field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length))
    })
    let nombresCod
    if (nombre === 'Tipo_accidente') {
      nombresCod = {
        'Salidas de v a': 'Salidas de vía',
        Colisiones: 'Colisiones',
        Alcances: 'Alcances',
        Choques: 'Choques',
        Otros: 'Otros',
        'Atropellos de animales': 'Atropellos de animales',
        Caidas: 'Caídas',
        Vuelcos: 'Vuelcos',
        'Atropellos de peatones': 'Atropellos de peatones',
        'cluster default': 'Agrupación',
        'Sin datos': 'Sin datos'
      }
    } else {
      nombresCod = comparacion(atributos, attUnique)
    }
    const fieldInfos = fields.map(field => {
      return {
        fieldName: field.name,
        label: nombresCod[field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.name.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)],
        format: {
          places: 0,
          digitSeparator: true
        }
      }
    }
    )
    if (attUnique.length < 11) {
      fieldInfos.pop()
    }

    // maps the field names for the popup chart
    const fieldNames = fieldInfos.map(field => {
      return field.fieldName
    })

    const popupTemplate = {
      title: 'Resumen del clúster',
      content: [{
        type: 'text',
        text: 'This cluster represents <b>{cluster_count}</b> features. '
      },
      {
        type: 'media',
        mediaInfos: [{
          title: 'Reports',
          type: 'pie-chart',
          value: {
            fields: fieldNames
          }
        }]
      },
      {
        type: 'fields'
      }],
      fieldInfos
    }

    // ---- Colores de cada sector desde el JSON ----
    renderer.attributes.forEach((attr: any) => {
      const base = attr.field
        .split('_')
        .map((n: string) => n.replace('SUM', ''))
        .join(' ')
        .replace('SUM', '')
      const label = nombresCod[base.slice(1)] ?? base.slice(1)
      const c = getColorFromJson(nombre, label)
      if (c) {
        attr.symbol = attr.symbol || {}
        attr.symbol.color = c
      }
    })

    // renderer.attributes.map((field) => {
    //   if (attUnique.length < 11 && field.field.includes('default')) {
    //     return (renderer.attributes.splice(renderer.attributes.findIndex(function (elemento) {
    //       return elemento.field === field.field
    //     }), 1))
    //   } else {
    //     return (field.label = nombresCod[field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').slice(1, field.field.split('_').map((name) => (name.replace('SUM', ''))).join(' ').replace('SUM', '').length)])
    //   }
    // })

    layer.featureReduction = {
      type: 'cluster',
      fields: fields,
      clusterMinSize: 25,
      renderer,
      popupTemplate,
        labelingInfo: []      
    }
    setEjecutar(false)
  }


  // function cleanArrayValues(arr: Array<string | null | undefined>): string[] {
  // // return arr
  // //   .filter((item): item is string => typeof item === 'string') // quita null/undefined
  // //   .map(item => item.trim()); // elimina espacios al inicio y final
  // }

  useEffect(() => {
    if (jimuMapView && nombre && nombreCapa !== '') {
      const layer1 = jimuMapView.view.map.findLayerById(nombreCapa)
      const field = layer1.getField(nombre)
      const query = layer1.createQuery()
      query.outFields = [field.name]
      query.maxRecordCountFactor = 3
      const obtenerAttUnique = async () => {
        const attributes = []
        const result = await layer1.queryFeatures(query)
        result.features.forEach((feature) => {
          const value = feature.attributes[field.name]
          attributes.push(value)
        })
        const attUnique = Array.from(new Set(attributes))
        console.log(attUnique)
        // console.log(cleanArrayValues(attUnique))
        if (ejecutar) {
          const appConf: any = getAppStore().getState().appConfig
          appConf.attUnique = attUnique && attUnique.length ? attUnique : [
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
        return attUnique
      }

      obtenerAttUnique().then((attUnique) => {
        const items = []
        attUnique.forEach((att) => {
          const item = {}
          if (att === null) {
            item['value'] = 'Sin datos'
            item['label'] = 'Sin datos'
          } else {
            item['value'] = att.toString()
            item['label'] = att.toString()
          }
          items.push(item)
        })
        setSeleccionables(items as any)
        window.attUnique=attUnique;
        window.valoresAgg=valoresAgg;
        if (ejecutar) {
          if (valoresAgg.length <= 25 && valoresAgg.length !== 0) {
            for (const att of attUnique) {
              let coincidencias = 0
              for (const att2 of valoresAgg) {
                if (att === att2) {
                  coincidencias++
                }
              }
              if (coincidencias === 0) {
                valoresAgg.push(att)
                break
              }
            }
            simbologia(valoresAgg.slice(0, -1), layer1, field.name)
          } else {
            simbologia(attUnique, layer1, field.name)
          }
          setAttUnico(attUnique)
          cluster ? createPieChartRenderer(layer1, attUnique) : layer1.featureReduction = {}; setEjecutar(false)
        }
      })

      function simbologia (listaValores: any[], capa: any, campo: string) {
  const symbology: any[] = []
  const valueColor: Record<string, number[]> = {}

  for (const atributo of listaValores) {
    // 1) Color desde JSON como string (rgb / rgba)
    const fromJson = getColorFromJson(campo, String(atributo))

    let colorForMap: any      // lo que va a symbol.color
    let rgbArray: number[]    // SIEMPRE [r,g,b] para valueColor

    if (fromJson) {
      // Intentamos extraer [r,g,b] del string
      const parsed = parseRgba(fromJson)
      if (parsed) {
        rgbArray = parsed
        colorForMap = fromJson      // el mapa puede trabajar con el string
      } else {
        // Si el string no se puede parsear, caemos a random pero consistente
        rgbArray = generarColorAleatorio()
        colorForMap = rgbArray
      }
    } else {
      // No hay JSON para este campo → random pero consistente
      rgbArray = generarColorAleatorio()
      colorForMap = rgbArray
    }

    // 👉 Esto es lo que luego usan los gráficos: siempre [r,g,b]
    valueColor[String(atributo)] = rgbArray

    symbology.push({
      value: atributo,
      label: atributo,
      symbol: {
        type: 'simple-marker',
        color: colorForMap,
        outline: null,
        size: 6
      }
    })
  }

  const colorAgg = [195, 195, 195]
  const renderer = new UniqueValueRenderer({
    field: campo,
    defaultSymbol: {
      type: 'simple-marker',
      color: colorAgg,
      outline: null,
      size: 6
    },
    uniqueValueInfos: symbology
  })

  // 👉 Aquí mandas SOLO arrays [r,g,b] al widget de gráficos
  props.onAtt(valueColor)

  // ❌ Antes: capa.renderer = r
  // ✅ Ahora:
  capa.renderer = renderer
}

    }
    setValoresAgg([])
  }, [jimuMapView, nombre, nombreCapa, ejecutar])

  useEffect(() => {
    if (jimuMapView && nombre && nombreCapa !== undefined) {
      const layer1 = jimuMapView.view.map.findLayerById(nombreCapa)
      cluster ? createPieChartRenderer(layer1, attUnico) : layer1.featureReduction = {}; setEjecutar(false)
    }
  }, [cluster])

  return (
    <div className="widget-setting-get-map-coordinates">
      <div className="widget-starter jimu-widget">
          {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
          )}
      </div>
      {props.useDataSources && props.useDataSources.length > 0 &&
          <SettingSection
            className="attribute-selector-section"
            title={props.intl.formatMessage({
              id: 'chooseAttributeSelectorLabel',
              defaultMessage: defaultMessages.chooseAttribute
            })}
          >
            <Select
              value={nombre}
              onChange={fieldsListChangeHandler}
              placeholder="Seleccione un campo..."
              autoWidth
              menuProps={{
                showArrow: true
              }}>
              {
                Object.keys(campos).map((campo) => (
                  <option key={campo} value={campo}>{campos[campo]}</option>
                ))
              }
            </Select>
          </SettingSection>
        }
        {/* {(nombre === 'Tipo_accidente') &&
          selectAgregate(seleccionables)
        } */}
        {(nombre === 'Subtipo_Accidente') &&
          selectAgregate(seleccionables)
        }
        {/* {(nombre === 'Año') &&
          selectAgregate(seleccionables)
        } */}
        {/* {(nombre === 'Superficie') &&
          selectAgregate(seleccionables)
        } */}
        {/* {(nombre === 'Factores_atmosfericos') &&
          selectAgregate(seleccionables)
        } */}
        {(nombre === 'Factor_Concurrente_3') &&
          selectAgregate(seleccionables)
        } 
        <SettingSection
          className="attribute-selector-section"
        >
            <Button
              onClick={ejecucion}
              size="sm"
            >
              Ejecutar
            </Button>
            {ejecutar &&
             <Loading
              height={200}
              type="DONUT"
              width={200}
              />
             }
        </SettingSection>
        {/* <SettingSection
          className="attribute-selector-section"
        >
            <Switch style={ { paddingTop: '10px' } } checked={cluster} onChange={() => {
              setCluster(!cluster)
            }} />   Activa o desactiva el clúster
        </SettingSection> */}
    </div>
  )
}
