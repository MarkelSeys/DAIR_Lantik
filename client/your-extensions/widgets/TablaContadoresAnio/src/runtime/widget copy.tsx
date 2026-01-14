import React, { useEffect, useState } from 'react';
import { AllWidgetProps, DataSourceManager } from 'jimu-core';
import { Select, Option } from 'jimu-ui';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { IMConfig } from '../config';
import { MultiSelect, MultiSelectItem } from 'jimu-ui';
const CustomAccidentTable = (props: AllWidgetProps<IMConfig>) => {
  const [records, setRecords] = useState([]);
const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [jmvs, setJmvs] = useState<JimuMapView>();
const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
const [activeFields, setActiveFields] = useState<string[]>([]);
  const fixedFields = ['muertos', 'graves', 'leves', 'ilesos'];
  const optionalFields = ['Luminosidad', 'Factores_atmosfericos', 'Tipo_interseccion', 'Municipio', 'Tipo_via'];

  useEffect(() => {
  if (!jmvs) return;

  const layer = jmvs.view.map.layers.items.find(
    item =>
      item.url ===
        'https://services-eu1.arcgis.com/hzCnZUsV1OYrzWSi/arcgis/rest/services/AccidentesSeys/FeatureServer' &&
      item.title === 'Accidentes'
  );

  if (!layer) {
    console.warn('❌ No se encontró la capa de Accidentes');
    return;
  }

  const handleQuery = () => {
    const query = layer.createQuery();
    query.where = layer.definitionExpression || '1=1';
    query.outFields = ['*'];
    query.returnGeometry = false;

    layer.queryFeatures(query).then((result) => {
      console.log('✅ Datos filtrados desde la capa:', result.features);
      const records = result.features.map(f => f.attributes);
      setRecords(records);
      setIsReady(true);
    }).catch((err) => {
      console.error('❌ Error al consultar la capa filtrada:', err);
    });
  };

  // Esperar a que se le aplique el filtro (definitionExpression)
  const watcher = layer.watch('definitionExpression', (newVal) => {
    console.log('📌 definitionExpression actualizada:', newVal);
    if (newVal) {
      handleQuery();
    }
  });

  // Por si ya está lista
  if (layer.definitionExpression) {
    handleQuery();
  }

  // Cleanup
  return () => {
    watcher?.remove?.(); // Detiene el watcher al desmontar
  };

}, [jmvs]);

const handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(evt)
  const options = Array.from(evt.target);
  const values = options.map(option => option.value);
  setSelectedFields(values);
};

  return (
  <div className="h-full flex flex-col overflow-hidden bg-white"style={{ height: '100%' }}>
    <JimuMapViewComponent
      useMapWidgetId={props.useMapWidgetIds?.[0]}
      onActiveViewChange={view => setJmvs(view)}
    />

 <div className="mb-2 text-sm w-1/2">
  <label className="block mb-1">Campos opcionales:</label>
  <MultiSelect
    items={optionalFields.map(field => ({
      label: field,
      value: field
    }))}
    selectedValues={selectedOptions}
    onClickItem={(evt, value, checked) => {
      setSelectedOptions(prev => {
        const set = new Set(prev);
        if (checked) {
          set.add(value);
        } else {
          set.delete(value);
        }
        return Array.from(set);
      });
    }}
    className="text-sm"
    placeholder="Selecciona campos..."
  />

  <button
    onClick={() => setActiveFields(selectedOptions)}
    className="mt-2 px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
  >
    Añadir columnas
  </button>
</div>

<div className="flex-1 min-h-0 overflow-auto px-2 pb-2">
  {!isReady ? (
    <div className="text-sm text-gray-500 p-4">
      ⏳ Cargando datos desde la capa, espera un momento...
    </div>
  ) : records.length === 0 ? (
    <div className="text-sm text-gray-600 p-4">
      ⚠️ No hay registros disponibles con el filtro actual.
    </div>
  ) : (
    <table className="min-w-full border border-collapse text-sm text-left">
      <thead>
        <tr className="bg-gray-100 border">
          <th className="border px-2 py-1">Ctra.</th>
          <th className="border px-2 py-1">PK</th>
          <th className="border px-2 py-1">Sent.</th>
          <th className="border px-2 py-1">Año</th>
          <th className="border px-2 py-1">Tipo Acc.</th>
          <th className="border px-2 py-1 text-center" colSpan={4}>Lesividad</th>
          {activeFields.map(field => (
            <th key={field} className="border px-2 py-1">{field}</th>
          ))}
        </tr>
        <tr className="bg-gray-100 border">
          <th colSpan={5}></th>
          <th className="border px-2 py-1">Muertos</th>
          <th className="border px-2 py-1">Graves</th>
          <th className="border px-2 py-1">Leves</th>
          <th className="border px-2 py-1">Ilesos</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="border px-2 py-1">{record.Carretera}</td>
            <td className="border px-2 py-1">{record.PK}</td>
            <td className="border px-2 py-1">{record.Sentido}</td>
            <td className="border px-2 py-1">{record.Año}</td>
            <td className="border px-2 py-1">{record.Tipo_accidente}</td>
            <td className="border px-2 py-1">{record['Nº_muertos']}</td>
            <td className="border px-2 py-1">{record['Nº_graves']}</td>
            <td className="border px-2 py-1">{record['Nº_leves']}</td>
            <td className="border px-2 py-1">{record['Nº_ilesos']}</td>
            {activeFields.map(field => (
              <td key={field} className="border px-2 py-1">{record[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
  </div>
);
};

export default CustomAccidentTable;
