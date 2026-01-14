import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import {
  SettingSection,
  SettingRow,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'
import { type IMConfig } from '../config'
import defaultI18nMessages from './translations/default'
import { jsx, Immutable, type UseDataSource, JimuFieldType, AllDataSourceTypes } from 'jimu-core'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  const supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer])
  //const supportedFieldTypes = Immutable([JimuFieldType.String])
  // When the dataSource is chosen, save it to the settings.
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

//   // When a field is chosen from the dropdown, save it to the settings.
//   const fieldsListChangeHandler = (evt) => {
//     if (evt && evt.length === 1) {
//       props.onSettingChange({
//         id: props.id,
//         config: props.config.set('filterField', evt[0].name)
//       })
//     }
//   }

  return (
    <div>
      <div className="widget-setting-get-map-coordinates">
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapWidgetSelected} />
        <SettingSection
          className="data-source-selector-section"
          title={props.intl.formatMessage({
            id: 'dataSourceSelectorLabel',
            defaultMessage: defaultI18nMessages.selectDataSource
          })}
        >
          <SettingRow>
            <DataSourceSelector
              types={supportedDsTypes}
              useDataSourcesEnabled
              mustUseDataSource
              useDataSources={props.useDataSources}
              onChange={onDataSourceChange} widgetId={props.id}
              hideDataView={true}
            />

          </SettingRow>
        </SettingSection>

        {}

      </div>
    </div>
  )
};










