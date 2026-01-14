/** @jsx jsx */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Switch } from 'jimu-ui'
import * as pieChartRendererCreator from 'esri/smartMapping/renderers/pieChart'
import { type IMConfig } from '../config'

const ClusterToggleWidget = (props: AllWidgetProps<IMConfig>) => {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const [layerId, setLayerId] = React.useState<string | null>(null)
  const [cluster, setCluster] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (props.useDataSources && props.useDataSources.length > 0) {
      const id = props.useDataSources[0].dataSourceId.split('-')[1]
      setLayerId(id)
    }
  }, [props.useDataSources])

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)
    }
  }

  React.useEffect(() => {
    if (!jimuMapView || !layerId) return

    const layer = jimuMapView.view.map.findLayerById(layerId) as __esri.FeatureLayer
    if (!layer) return

    setCluster(!!layer.featureReduction)

    const handle = (layer as any).watch('featureReduction', (newVal: any) => {
      setCluster(!!newVal)
    })

    return () => {
      if (handle && typeof handle.remove === 'function') {
        handle.remove()
      }
    }
  }, [jimuMapView, layerId])

  React.useEffect(() => {
    const applyCluster = async () => {
      if (!jimuMapView || !layerId) return

      const layer = jimuMapView.view.map.findLayerById(layerId) as __esri.FeatureLayer
      if (!layer) return

      const hasCluster = !!layer.featureReduction

      if (cluster && !hasCluster) {
        const { renderer, fields } = await pieChartRendererCreator.createRendererForClustering({
          layer
        })

        layer.featureReduction = {
          type: 'cluster',
          fields,
          clusterMinSize: 16,
          renderer
        } as any
      } else if (!cluster && hasCluster) {
        layer.featureReduction = null as any
      }
    }

    applyCluster()
  }, [cluster, jimuMapView, layerId])

  return (
  <div className="cluster-toggle-widget jimu-widget">
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds[0]}
        onActiveViewChange={activeViewChangeHandler}
      />
    )}

    {/* Pastilla flotante compacta */}
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        borderRadius: 999,
        background: 'rgba(148, 163, 184, 0.5)',
        color: '#0f172a',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(148, 163, 184, 0.9)',
        backdropFilter: 'blur(4px)',
        cursor: 'pointer',
        maxWidth: 260,
        minHeight: 32
      }}
      onClick={() => setCluster(!cluster)}
    >

      {/* Icono pie chart */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: 'conic-gradient(#6efce3 0deg 120deg, #fca311 120deg 240deg, #64b5f6 240deg 360deg)',
          border: '2px solid rgba(15,23,42,0.9)',
          flexShrink: 0
        }}
      />

      {/* Switch */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ paddingLeft: 2 }}
      >
        <Switch
          checked={cluster}
          onChange={() => setCluster(!cluster)}
          aria-label="Cluster"
        />
      </div>
    </div>
  </div>
)
}

export default ClusterToggleWidget
