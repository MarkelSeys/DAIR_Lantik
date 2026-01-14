import { React, jsx, Immutable, type UseDataSource, AllDataSourceTypes, JimuFieldType } from 'jimu-core'
import { FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'

// ... dentro del return()
{props.useDataSources && props.useDataSources.length > 0 && (
  <SettingSection
    className="attribute-selector-section"
    title="Campos permitidos para simbología"
  >
    <SettingRow>
      <FieldSelector
        useDataSources={props.useDataSources}
        // 🔹 Necesario para que los check funcionen
        types={Immutable([
          JimuFieldType.String,
          JimuFieldType.Number,
        ])}
        isMultiple
        isSearchInputHidden={false}
        isDataSourceDropDownHidden
        useDropdown
        onChange={(fields) => {
          const names = (fields ?? []).map(f => f.name)
          props.onSettingChange({
            id: props.id,
            config: props.config.set('allowedFields', names)
          })
        }}
        selectedFields={Immutable(
          (props.config.allowedFields ?? []).map(n => ({ name: n }))
        )}
      />
    </SettingRow>
  </SettingSection>
)}
