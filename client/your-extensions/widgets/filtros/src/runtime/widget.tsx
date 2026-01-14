import { jsx, Immutable, JimuFieldType, ImmutableArray, type AllWidgetProps, type FeatureLayerDataSource, type SqlQueryParams, DataSourceManager } from 'jimu-core'
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
import { Select, MultiSelect, type MultiSelectItem, Button, Loading } from 'jimu-ui'
// import Legend from "esri/widgets/Legend";
// import LegendVM from "esri/widgets/Legend/LegendViewModel";

export default function (props: AllWidgetProps<IMConfig>) {
  const [jmvs, setJmvs] = useState<JimuMapView>()
  const [nombreCapa, setNombreCapa] = useState('')
  const [filtro, setFiltro] = useState(false)
  const dsManager = DataSourceManager.getInstance()

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // useEffect(() => {
  //   if (props.useDataSources && props.useDataSources.length > 0) {
  //     // const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
  //     // setNombreCapa(nombreCapa)
  //     console.log(props.useDataSources)
  //     const useDataSource = props.useDataSources[0]
  //     const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource

  //     const queryParams: SqlQueryParams = {
  //       where: 'Mes = 1'
  //     }
  //     ds.updateQueryParams(queryParams, props.id)

  //   }
  // }, [props.useDataSources])

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJmvs(jmv)
      // console.log('filtro antes')
      // sleep(2000).then(() => {
      //   console.log('filtro')
      //   jmv.view.map.layers.items[17].definitionExpression = filtro ? 'Mes = 1' : ''
      // })
      // console.log(jmv)
      // sleep(2000).then(() => {
      //   jmv.view.on('click', () => {
      //     sleep(2000).then(() => {
      //       // console.log(jmv.view.map.layers.items[17].definitionExpression)
      //       console.log(filtro)
      //       jmv.view.map.layers.items[17].definitionExpression = 'Mes = 1'
      //     })
      //   })
      // })
    }
  }

  useEffect(() => {
    if (jmvs) {
      console.log(jmvs)
      // jmvs.view.on('click', () => {
      //   sleep(2000).then(() => {
      //     jmvs.view.map.layers.items[17].definitionExpression = filtro ? 'Mes = 1' : ''
      //   })
      // })
      // jmvs.view.map.layers
      if (props.useDataSources && props.useDataSources.length > 0) {
        // const nombreCapa = props.useDataSources[0].dataSourceId.split('-')[1]
        // setNombreCapa(nombreCapa)

        console.log(props.useDataSources)
        const useDataSource = props.useDataSources[0]
        const ds: FeatureLayerDataSource = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource
  
        const queryParams: SqlQueryParams = {
          where: filtro ? 'Mes = 1' : ''
        }
        ds.updateQueryParams(queryParams, props.id)
  
      }


    }
  }, [filtro])

  return (
    <div>
      <div>
        {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
        )}
      </div>
      <div>
        <button onClick={() => {
          setFiltro(!filtro)
        }}>
          Filtro
        </button>
      </div>
    </div>
  )
}
