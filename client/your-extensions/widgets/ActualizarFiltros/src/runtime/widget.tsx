// WidgetEmisor.tsx
import React from "react";
import type { AllWidgetProps } from "jimu-core";
import { Button, Icon, Tooltip } from "jimu-ui";
import {
  DataSourceManager,
  getAppStore,
  appActions,
  WidgetState,
} from "jimu-core";
import { loadArcGISJSAPIModules, type JimuMapView } from "jimu-arcgis";
import { JimuMapViewComponent } from "jimu-arcgis";
import { type IMAppConfig } from "jimu-core";
const { useState, useEffect } = React;
import { type DataSource, type FeatureLayerDataSource } from "jimu-core";
import * as pieChartRendererCreator from "esri/smartMapping/renderers/pieChart";
import MyLocalRefreshIcon from "../../../ActualizarFiltros/assets/actualizar.svg";

export default function WidgetEmisor(props: AllWidgetProps<any>) {
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const WIDGET_RECEPTOR_ID = "widget_16"; // <-- ajusta si procede
  const [chartWidgetsArray, setChartWidgetsArray] = useState<any[]>([]);
  const [appWidgets, setAppWidgets] = useState<Record<string, any>>({});
  const [jmv, setJmv] = useState<JimuMapView | null>(null);
  const dataSourceId = props.useDataSources?.[0]?.dataSourceId;
  const [cluster, setCluster] = useState(true);
  const attUnique: Record<string, [number, number, number]> = {
    Alcances: [255, 153, 50],
    "Atropellos de animales": [255, 255, 50],
    "Atropellos de peatones": [216, 255, 101],
    Caidas: [140, 255, 101],
    Choques: [153, 255, 229],
    Colisiones: [101, 178, 255],
    Otros: [0, 63, 255],
    "Salidas de vía": [203, 0, 203],
    "Sin datos": [182, 182, 182],
    Vuelcos: [255, 0, 197],
  };
  const campo = "Tipo_accidente";

  // ids reales de tus charts de Año (ajusta los que correspondan)
  const YEAR_CHART_IDS = ["widget_4", "widget_102", "widget_132"];

  function refreshYearCharts() {
    const widgets = getAppStore().getState().appConfig.widgets;
    for (const id of YEAR_CHART_IDS) {
      if (!widgets?.[id]) continue;
      // reinyecta la config de Año
      getAppStore().dispatch(
        appActions.widgetConfigLoaded(
          id,
          makeChart("column", "Año", "Tipo_accidente", attUnique, null)
        )
      );
      // nudge para que renderice seguro
      getAppStore().dispatch(
        appActions.widgetStatePropChange(id, "forceRenderNonce", Date.now())
      );
    }
  }

  // 1) lee widgets del store y filtra charts de forma robusta
  useEffect(() => {
    const widgets = getAppStore().getState().appConfig?.widgets ?? {};
    setAppWidgets(widgets);

    const all = Object.values(widgets || {});
    const charts = all.filter((w: any) => {
      const uri = w?.uri ?? "";
      // distintos builds usan rutas distintas; cubrimos ambos casos
      return uri.includes("/chart/") || uri === "widgets/common/chart/";
    });
    setChartWidgetsArray(charts as any[]);
  }, []);

  // 2) botón: limpiar filtros en el receptor
  const pedirEliminarFiltros = () => {
    getAppStore().dispatch(
      appActions.widgetStatePropChange(
        WIDGET_RECEPTOR_ID,
        "clearAllFiltersTrigger",
        Date.now()
      )
    );
  };

  const cambiarSimbología = () => {
    if (attUnique) {
      const groupByWidgets: Record<string, string> = {
        widget_2: campo,
        widget_4: "Año",
        widget_5: "Mes",
        widget_6: "Dia",
        widget_7: "Mes_Año",
        widget_9: "PK",
        widget_10: "Kilometro",
        widget_159: "Año",
        widget_160: "Mes",
        widget_161: "Dia",
        widget_162: "Mes_Año",
        widget_173: "PK",
        widget_172: "Kilometro",
        widget_55: campo,
      };

      const widgets = getAppStore().getState().appConfig.widgets;
      setAppWidgets(widgets);

      const widgetsArray = Object.values(widgets as any);
      console.log(
        widgetsArray.filter((w: any) => w.uri === "widgets/common/chart/")
      );

      for (const widget in chartWidgetsArray) {
        if (
          chartWidgetsArray[widget].id === "widget_2" ||
          chartWidgetsArray[widget].id === "widget_55"
        ) {
          getAppStore().dispatch(
            appActions.widgetConfigLoaded(
              chartWidgetsArray[widget].id,
              makeChart(
                "pie",
                groupByWidgets[chartWidgetsArray[widget].id],
                campo,
                attUnique,
                chartWidgetsArray[widget].id
              )
            )
          );
        } else {
          getAppStore().dispatch(
            appActions.widgetConfigLoaded(
              chartWidgetsArray[widget].id,
              makeChart(
                "column",
                groupByWidgets[chartWidgetsArray[widget].id],
                campo,
                attUnique,
                null
              )
            )
          );
        }
      }

      const appConfig = getAppStore().getState().appConfig;
      (appConfig as any).campo = campo;
    }
  };

  // Crea las props de los gráficos
  function makeChart(
    id: "column" | "pie",
    groupBy: string,
    campo: string,
    values: Record<string, [number, number, number]>,
    idWidget?: string | null
  ) {
    console.log(
      id +
        " ,  " +
        groupBy +
        " ,  " +
        campo +
        " ,  " +
        values +
        " ,  " +
        idWidget
    );

    const makeSeries = (
      values: Record<string, [number, number, number]>,
      groupBy: string,
      campo: string
    ) => {
      const listSeries: any[] = [
        {
          type: "barSeries",
          id: "",
          name: "",
          x: groupBy,
          y: "OBJECTID",
          colorType: "singleColor",
          stackedType: "stacked",
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: "#5E8FD0",
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-900)",
              width: 0,
            },
          },
          dataLabels: {
            type: "chartText",
            visible: true,
            content: {
              type: "esriTS",
              color: "var(--dark-600)",
              font: {
                family: "Avenir Next",
                size: 10,
                style: "normal",
                weight: "normal",
                decoration: "none",
              },
              horizontalAlignment: "center",
              verticalAlignment: "top",
            },
          },
          displayPercentageOnDataLabel: true,
          displayNumericValueOnDataLabel: false,
          dataLabelsOffset: 5,
          rotated: false,
          dataTooltipVisible: true,
          query: {
            where: `${campo}=''`,
          },
        },
      ];

      for (const value in values) {
        const series = {
          type: "barSeries",
          id: value,
          name: value,
          x: groupBy,
          y: "OBJECTID",
          colorType: "singleColor",
          stackedType: "stacked",
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-900)",
              width: 0,
            },
          },
          dataLabels: {
            type: "chartText",
            visible: false,
            content: {
              type: "esriTS",
              color: "var(--dark-600)",
              font: {
                family: "Avenir Next",
                size: 10,
                style: "normal",
                weight: "normal",
                decoration: "none",
              },
              horizontalAlignment: "center",
              verticalAlignment: "top",
            },
          },
          rotated: false,
          dataTooltipVisible: true,
          query: {
            where: `${campo}='${value}'`,
          },
        };
        listSeries.push(series);
      }

      const lastElem = {
        type: "barSeries",
        id: "__other-split-value__",
        name: "Undefined",
        x: groupBy,
        y: "OBJECTID",
        colorType: "singleColor",
        stackedType: "stacked",
        fillSymbol: {
          type: "esriSFS",
          style: "esriSFSSolid",
          color: "#D6D6D6",
          outline: {
            type: "esriSLS",
            style: "esriSLSSolid",
            color: "var(--light-900)",
            width: 0,
          },
        },
        dataLabels: {
          type: "chartText",
          visible: false,
          content: {
            type: "esriTS",
            color: "var(--dark-600)",
            font: {
              family: "Avenir Next",
              size: 10,
              style: "normal",
              weight: "normal",
              decoration: "none",
            },
            horizontalAlignment: "center",
            verticalAlignment: "top",
          },
        },
        rotated: false,
        dataTooltipVisible: true,
        query: {
          where: "Tipo_accidente='__other-split-value__'",
        },
      };
      listSeries.push(lastElem);
      return listSeries;
    };

    const makeSeriesPie = (
      campo: string,
      values: Record<string, [number, number, number]>
    ) => {
      const listSeries: any[] = [
        {
          type: "pieSeries",
          colorType: "singleColor",
          id: "OBJECTID",
          name: "OBJECTID",
          x: campo,
          y: "count_of_OBJECTID",
          innerRadius: 0,
          startAngle: -90,
          endAngle: 270,
          displayNumericValueOnDataLabel: true,
          displayPercentageOnDataLabel: false,
          displayNumericValueOnTooltip: true,
          displayPercentageOnTooltip: true,
          dataLabelsOffset: 2,
          sliceGrouping: {
            sliceId: "__other-slice__",
            percentageThreshold: 0,
            label: "Other",
            fillSymbol: {
              type: "esriSFS",
              style: "esriSFSSolid",
              color: "#D6D6D6",
              outline: {
                type: "esriSLS",
                style: "esriSLSSolid",
                color: "var(--light-100)",
                width: 0,
              },
            },
          },
          numericValueFormat: {
            type: "number",
            intlOptions: {
              style: "decimal",
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 3,
            },
          },
          percentValueFormat: {
            type: "number",
            intlOptions: {
              style: "percent",
              notation: "standard",
              minimumFractionDigits: 0,
              maximumFractionDigits: 3,
            },
          },
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: "#D6D6D6",
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-100)",
              width: 0,
            },
          },
          dataLabels: {
            type: "chartText",
            visible: false,
            content: {
              type: "esriTS",
              color: "var(--dark-600)",
              font: {
                family: "Avenir Next",
                size: 8,
                style: "normal",
                weight: "bold",
                decoration: "none",
              },
              horizontalAlignment: "center",
              verticalAlignment: "middle",
              wrap: true,
              maxWidth: 100,
            },
          },
          dataTooltipVisible: true,
          query: {
            where: `${campo}=''`,
          },
          slices: [
            {
              sliceId: "",
              label: "",
              fillSymbol: {
                type: "esriSFS",
                style: "esriSFSSolid",
                color: "#5E8FD0",
                outline: {
                  type: "esriSLS",
                  style: "esriSLSSolid",
                  color: "var(--light-100)",
                  width: 0,
                },
              },
            },
          ],
        },
      ];

      for (const value in values) {
        const slice = {
          sliceId: value,
          label: value,
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-100)",
              width: 0,
            },
          },
        };
        (listSeries[0] as any).slices.push(slice);
      }

      return listSeries;
    };

    const makeSeriesPieMax = (
      campo: string,
      values: Record<string, [number, number, number]>
    ) => {
      const listSeriesMax: any[] = [
        {
          type: "pieSeries",
          colorType: "singleColor",
          id: "OBJECTID",
          name: "OBJECTID",
          x: campo,
          y: "count_of_OBJECTID",
          innerRadius: 0,
          startAngle: -90,
          endAngle: 270,
          displayNumericValueOnDataLabel: true,
          displayPercentageOnDataLabel: true,
          displayNumericValueOnTooltip: true,
          displayPercentageOnTooltip: true,
          dataLabelsOffset: -100,
          sliceGrouping: {
            sliceId: "__other-slice__",
            percentageThreshold: 0,
            label: "Other",
            fillSymbol: {
              type: "esriSFS",
              style: "esriSFSSolid",
              color: "#D6D6D6",
              outline: {
                type: "esriSLS",
                style: "esriSLSSolid",
                color: "var(--light-100)",
                width: 0,
              },
            },
          },
          numericValueFormat: {
            type: "number",
            intlOptions: {
              style: "decimal",
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            },
          },
          percentValueFormat: {
            type: "number",
            intlOptions: {
              style: "percent",
              notation: "standard",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            },
          },
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: "#D6D6D6",
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-100)",
              width: 0,
            },
          },
          dataLabels: {
            type: "chartText",
            visible: true,
            content: {
              type: "esriTS",
              color: "var(--dark-600)",
              font: {
                family: "Avenir Next",
                size: 13,
                style: "normal",
                weight: "bold",
                decoration: "none",
              },
              horizontalAlignment: "center",
              verticalAlignment: "middle",
              wrap: true,
              maxWidth: 100,
            },
          },
          dataTooltipVisible: true,
          query: {
            where: `${campo}=''`,
          },
          slices: [
            {
              sliceId: "",
              label: "",
              fillSymbol: {
                type: "esriSFS",
                style: "esriSFSSolid",
                color: "#5E8FD0",
                outline: {
                  type: "esriSLS",
                  style: "esriSLSSolid",
                  color: "var(--light-100)",
                  width: 0,
                },
              },
            },
          ],
        },
      ];

      for (const value in values) {
        const slice = {
          sliceId: value,
          label: value,
          fillSymbol: {
            type: "esriSFS",
            style: "esriSFSSolid",
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: "esriSLS",
              style: "esriSLSSolid",
              color: "var(--light-100)",
              width: 0,
            },
          },
        };
        (listSeriesMax[0] as any).slices.push(slice);
      }

      return listSeriesMax;
    };

    let series: any;
    if (id === "column") {
      series = makeSeries(values, groupBy, campo);
    } else {
      if (idWidget === "widget_55") {
        series = makeSeriesPieMax(campo, values);
      } else {
        series = makeSeriesPie(campo, values);
      }
    }

    // ==== partes comunes (ejes, título, footer) ====
    const commonAxes = [
      {
        type: "chartAxis",
        visible: true,
        isLogarithmic: false,
        title: {
          type: "chartText",
          visible: false,
          content: {
            type: "esriTS",
            color: "var(--dark-800)",
            font: {
              family: "Avenir Next",
              size: 14,
              style: "normal",
              weight: "normal",
              decoration: "none",
            },
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          },
        },
        labels: {
          type: "chartText",
          visible: true,
          content: {
            type: "esriTS",
            color: "var(--dark-500)",
            font: {
              family: "Avenir Next",
              size: 14,
              style: "normal",
              weight: "normal",
              decoration: "none",
            },
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          },
        },
        valueFormat: {
          type: "category",
          characterLimit: 11,
        },
        lineSymbol: {
          type: "esriSLS",
          style: "esriSLSSolid",
          color: "var(--light-800)",
          width: 1,
        },
        grid: {
          type: "esriSLS",
          style: "esriSLSDash",
          color: "var(--light-300)",
          width: 0,
        },
      },
      {
        type: "chartAxis",
        visible: true,
        isLogarithmic: false,
        title: {
          type: "chartText",
          visible: false,
          content: {
            type: "esriTS",
            color: "var(--dark-800)",
            font: {
              family: "Avenir Next",
              size: 14,
              style: "normal",
              weight: "normal",
              decoration: "none",
            },
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          },
        },
        labels: {
          type: "chartText",
          visible: true,
          content: {
            type: "esriTS",
            color: "var(--dark-500)",
            font: {
              family: "Avenir Next",
              size: 14,
              style: "normal",
              weight: "normal",
              decoration: "none",
            },
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          },
        },
        valueFormat: {
          type: "number",
          intlOptions: {
            style: "decimal",
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          },
        },
        lineSymbol: {
          type: "esriSLS",
          style: "esriSLSSolid",
          color: "var(--light-800)",
          width: 1,
        },
        grid: {
          type: "esriSLS",
          style: "esriSLSDash",
          color: "var(--light-300)",
          width: 0,
        },
      },
    ];

    const commonFooter = {
      type: "chartText",
      visible: true,
      content: {
        type: "esriTS",
        color: "var(--dark-800)",
        font: {
          family: "Avenir Next",
          size: 14,
          style: "normal",
          weight: "normal",
          decoration: "none",
        },
        horizontalAlignment: "center",
        text: "",
      },
    };

    const commonTitle = {
      type: "chartText",
      visible: true,
      content: {
        type: "esriTS",
        color: "var(--black)",
        font: {
          family: "Avenir Next",
          size: 24,
          style: "normal",
          weight: "normal",
          decoration: "none",
        },
        horizontalAlignment: "center",
        text: "",
      },
    };

    // ===== CONFIG BARRAS =====
    const configBarras = {
      tools: {
        cursorEnable: true,
      },
      template: id,
      webChart: {
        version: "7.3.1",
        id: id,
        type: "chart",
        axes: commonAxes,
        background: "var(--white)",
        dataSource: {
          query: {
            groupByFieldsForStatistics: [groupBy],
            outStatistics: [
              {
                statisticType: "count",
                onStatisticField: "OBJECTID",
                outStatisticFieldName: "count_of_OBJECTID",
              },
            ],
            orderByFields: [`${groupBy} ASC`],
            where: `${campo}={value}`,
          },
        },
        footer: commonFooter,
        legend: {
          type: "chartLegend",
          visible: false,
          layout: "vertical",
          labelMaxWidth: 200,
          title: {
            type: "chartText",
            visible: true,
            content: {
              type: "esriTS",
              color: "var(--dark-800)",
              font: {
                family: "Avenir Next",
                size: 40,
                style: "normal",
                weight: "normal",
                decoration: "none",
              },
              horizontalAlignment: "center",
              text: "",
            },
          },
          body: {
            type: "esriTS",
            color: "var(--dark-800)",
            font: {
              family: "Avenir Next",
              size: 9,
              style: "normal",
              weight: "bold",
              decoration: "none",
            },
            horizontalAlignment: "center",
            text: "",
          },
          position: "right",
        },
        sortLabelsBy: "originalValue",
        rotated: false,
        series: series,
        title: commonTitle,
      },
    };

    // ===== CONFIG PIE =====
    const configPie = {
      tools: {
        cursorEnable: true,
      },
      template: id,
      webChart: {
        version: "7.3.1",
        id: id,
        type: "chart",
        axes: commonAxes,
        background: "var(--white)",
        dataSource: {
          query: {
            groupByFieldsForStatistics: [groupBy],
            outStatistics: [
              {
                statisticType: "count",
                onStatisticField: "OBJECTID",
                outStatisticFieldName: "count_of_OBJECTID",
              },
            ],
            // 👇 ordenar de mayor a menor por el conteo
            orderByFields: ["count_of_OBJECTID DESC"],
            where: "",
          },
        },
        footer: commonFooter,
        legend: {
          type: "chartLegend",
          visible: true,
          layout: "vertical",
          labelMaxWidth: 200,
          title: {
            type: "chartText",
            visible: true,
            content: {
              type: "esriTS",
              color: "var(--dark-800)",
              font: {
                family: "Avenir Next",
                size: 40,
                style: "normal",
                weight: "normal",
                decoration: "none",
              },
              horizontalAlignment: "center",
              text: "",
            },
          },
          body: {
            type: "esriTS",
            color: "var(--dark-800)",
            font: {
              family: "Avenir Next",
              size: 9,
              style: "normal",
              weight: "bold",
              decoration: "none",
            },
            horizontalAlignment: "center",
            text: "",
          },
          position: "right",
        },
        sortLabelsBy: "originalValue",
        rotated: false,
        series: series,
        title: commonTitle,
      },
    };

    // devuelve el config según tipo
    return (id === "column" ? configBarras : configPie) as any;
  }

  /**
   * Cambia la simbología del mapa a categorías por "Tipo_accidente".
   * - Si activarCluster === true  -> respeta cluster si ya existe; opcionalmente activa "pie clusters".
   * - Si activarCluster === false -> desactiva cluster.
   */
  async function aplicarSimbologiaMapaTipoAccidenteSolo(
    jmv: JimuMapView,
    dataSourceId: string,
    activarCluster = true
  ) {
    if (!jmv?.view || !dataSourceId) return;

    // localizar la misma FeatureLayer que usa el DS
    const dsm = DataSourceManager.getInstance();
    const ds = dsm.getDataSource(dataSourceId) as any;
    const maybe = ds?.getLayer?.();
    const dsLayer =
      maybe && typeof maybe.then === "function"
        ? await maybe
        : maybe || ds?.layer;
    if (!dsLayer) return;

    const allFLs: __esri.FeatureLayer[] = [];
    const walk = (coll: __esri.Collection<__esri.Layer>) => {
      coll.forEach((lyr: any) => {
        if (lyr.type === "feature") allFLs.push(lyr as __esri.FeatureLayer);
        if (lyr.layers?.length) walk(lyr.layers);
      });
    };
    walk(jmv.view.map.layers);

    const layer =
      allFLs.find(
        (fl: any) => fl.url === dsLayer?.url && fl.layerId === dsLayer?.layerId
      ) ||
      allFLs.find((fl: any) => fl.portalItem?.id === dsLayer?.portalItem?.id) ||
      null;
    if (!layer) return;

    const [UniqueValueRenderer] = await loadArcGISJSAPIModules([
      "esri/renderers/UniqueValueRenderer",
    ]);

    // paleta fija
    const COLORS: Record<string, number[]> = {
      "Salidas de vía": [203, 0, 203],
      Colisiones: [101, 178, 255],
      Alcances: [255, 153, 50],
      Choques: [153, 255, 229],
      Otros: [0, 63, 255],
      "Atropellos de animales": [255, 255, 50],
      Caidas: [140, 255, 101],
      Vuelcos: [255, 0, 197],
      "Atropellos de peatones": [216, 255, 101],
      "Sin datos": [182, 182, 182],
    };

    const symbolType =
      layer.geometryType === "point"
        ? "simple-marker"
        : layer.geometryType === "polyline"
        ? "simple-line"
        : "simple-fill";

    const uniqueValueInfos = Object.entries(COLORS).map(([value, color]) => {
      const symbol: any =
        symbolType === "simple-marker"
          ? { type: "simple-marker", color, size: 6, outline: null }
          : symbolType === "simple-line"
          ? { type: "simple-line", color, width: 2 }
          : {
              type: "simple-fill",
              color,
              outline: { color: [0, 0, 0, 0.2], width: 0.5 },
            };
      return { value, label: value, symbol };
    });

    const defaultSymbol: any =
      symbolType === "simple-marker"
        ? {
            type: "simple-marker",
            color: [195, 195, 195],
            size: 6,
            outline: null,
          }
        : symbolType === "simple-line"
        ? { type: "simple-line", color: [195, 195, 195], width: 2 }
        : {
            type: "simple-fill",
            color: [195, 195, 195, 0.6],
            outline: { color: [0, 0, 0, 0.2], width: 0.5 },
          };

    // renderer categórico por Tipo_accidente
    const renderer = new (UniqueValueRenderer as any)({
      field: "Tipo_accidente",
      defaultSymbol,
      uniqueValueInfos,
    });

    // aplicar renderer a entidades base (no afecta al cluster, que tiene su propio renderer)
    layer.renderer = renderer;

    // === CLUSTER ON/OFF ===
    if (!activarCluster) {
      // desactivar cualquier cluster activo
      try {
        (layer as any).featureReduction = undefined;
      } catch {}
    } else {
      // si ya hay cluster, lo respetamos; si no hay, activamos uno básico
      const frActual = (layer as any).featureReduction;
      if (!(frActual && frActual.type === "cluster")) {
        (layer as any).featureReduction = {
          type: "cluster",
          clusterMinSize: 16,
        };
      }

      // ---- OPCIONAL: convertir el cluster en "pie cluster" por Tipo_accidente ----
      const USAR_PIE_CLUSTER = true;
      if (USAR_PIE_CLUSTER) {
        try {
          const [pieChartRendererCreator] = await loadArcGISJSAPIModules([
            "esri/smartMapping/renderers/pieChart",
          ]);
          const { renderer: pieRenderer, fields } =
            await pieChartRendererCreator.createRendererForClustering({
              layer,
              legendOptions: { title: "Tipo de accidente (clúster)" },
            });

          // (Opcional) colorear por tu paleta cuando coincidan etiquetas
          pieRenderer?.attributes?.forEach((attr: any) => {
            const lab = (attr.label || "").trim();
            const col = COLORS[lab];
            if (col && attr.symbol?.color) attr.symbol.color = col;
            if (/default/i.test(attr.field) && attr.symbol?.color) {
              attr.symbol.color = [195, 195, 195];
            }
          });

          (layer as any).featureReduction = {
            type: "cluster",
            fields,
            clusterMinSize: 16,
            renderer: pieRenderer,
            popupTemplate: {
              title: "Resumen del clúster",
              content: [
                {
                  type: "text",
                  text: "Este clúster representa <b>{cluster_count}</b> elementos.",
                },
                {
                  type: "media",
                  mediaInfos: [
                    {
                      title: "Tipo de accidente",
                      type: "pie-chart",
                      value: { fields: fields.map((f: any) => f.name) },
                    },
                  ],
                },
              ],
            },
          };
        } catch (e) {
          console.warn(
            "No se pudo crear el pie cluster, se mantiene el cluster básico:",
            e
          );
        }
      }
    }

    // refresco visual
    await jmv.view.when();
    await jmv.view.whenLayerView(layer);
    (layer as any).refresh?.();
    (jmv.view as any).requestRender?.();
    console.log(
      '✔️ Mapa actualizado por "Tipo_accidente" (cluster:',
      activarCluster,
      ")"
    );
  }

  const aplicarSoloMapa = async () => {
    if (!jmv || !dataSourceId) {
      console.warn("Falta jmv o dataSourceId");
      return;
    }
    await aplicarSimbologiaMapaTipoAccidenteSolo(
      jmv,
      dataSourceId,
      /*activarCluster*/ true
    );
  };

  const initialConfigsRef = React.useRef<Record<string, any> | null>(null);
  // Capturar snapshot inicial (una sola vez)
  React.useEffect(() => {
    if (!initialConfigsRef.current) {
      const appConf = getAppStore().getState().appConfig as IMAppConfig;
      // EB usa Immutable -> clón profundo mutable
      initialConfigsRef.current = (appConf.widgets as any).asMutable({
        deep: true,
      });
    }
  }, []);

  function recargarConfigInicial(targetId: string) {
    const store = getAppStore();
    const initial = initialConfigsRef.current?.[targetId];
    if (!initial) {
      console.warn("[recargarConfigInicial] No hay snapshot para", targetId);
      return;
    }
    store.dispatch(appActions.widgetConfigLoaded(targetId, initial));
  }

  function reiniciarWidget(targetId: string) {
    // 1) restaurar su config inicial
    recargarConfigInicial(targetId);
    // 2) pedir al widget que limpie su estado runtime (hooks, queries, etc.)
    getAppStore().dispatch(
      appActions.widgetStatePropChange(targetId, "restartTrigger", Date.now())
    );
  }

  const buttonStyle = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    minWidth: "unset",
    minHeight: "unset",
    backgroundColor: "transparent",
    color: "black",
    border: "none",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    paddingLeft: "25px",
    ...(isHovering ? { backgroundColor: "rgba(0, 0, 0, 0.1)" } : {}),
  } as const;

  async function clearDsFilters(ds: DataSource) {
    try {
      // Quitar selecciones
      (ds as any).clearSelection?.();
      (ds as any).setSelectedRecords?.([]);
      (ds as any).selectRecordsByIds?.([]);

      // Quitar filtros/queries
      const emptyQP: any = {
        where: "1=1",
        orderByFields: [],
        objectIds: null,
        page: 1,
      };
      (ds as any).setQueryParams?.(emptyQP, "widget_emisor");
      (ds as any).updateQueryParams?.(emptyQP, "widget_emisor");

      // Data views (muy importante con filtros cruzados)
      const dvs = (ds as any).getDataViews?.() || [];
      dvs.forEach((dvId: string) => {
        const dv = (ds as any).getDataView?.(dvId);
        dv?.setQueryParams?.(emptyQP, "widget_emisor");
        dv?.updateQueryParams?.(emptyQP, "widget_emisor");
        dv?.clearSelection?.();
      });

      // Refresco
      await (ds as any).refresh?.();
    } catch (e) {
      console.warn("clearDsFilters error:", e);
    }
  }

  async function clearAllRuntimeFilters() {
    const dsm = DataSourceManager.getInstance();
    // si tienes el principal en props:
    const mainId = props.useDataSources?.[0]?.dataSourceId;
    const ids = new Set<string>();
    if (mainId) ids.add(mainId);

    // añade todos por si 131 usa outputs
    const appDSs = (dsm as any).getAppDataSources?.() || [];
    appDSs.forEach((ds: DataSource) => ids.add(ds.id));

    for (const id of ids) {
      const ds = dsm.getDataSource(id);
      if (ds) await clearDsFilters(ds);
    }
  }

  async function reiniciarTodo() {
    (window as any).SimbologiaSeleccionada = "";

    // 1) limpiar primero
    await clearAllRuntimeFilters();
    // y notificar al receptor que elimine filtro/campo
    pedirEliminarFiltros();

    // 2) reconfigurar charts + mapa
    cambiarSimbología();
    await aplicarSoloMapa();

    // 3) refresco específico de los charts de Año
    refreshYearCharts();

    // 4) resto de reinicios
    reiniciarWidget("widget_16");
    reiniciarWidget("widget_14");
    reloadWidget("widget_131");
    vaciarCampo();
    resetChartToDefault("widget_168");
    vaciarCampoEnManejoAtributos();
    reiniciarWidget("widget_170");

    setTimeout(() => {
      getAppStore().dispatch(
        appActions.widgetStatePropChange("widget_170", "doClearAllTs", Date.now())
      );
    }, 0);
  }

  function vaciarCampo() {
    getAppStore().dispatch(
      appActions.widgetStatePropChange(
        "widget_14",
        "resetCampoTrigger",
        Date.now()
      )
    );
  }

  const reloadWidget = (widgetId: string) => {
    getAppStore().dispatch(appActions.resetWidgetState(widgetId));
  };

  function vaciarCampoEnManejoAtributos() {
    const idReceptor = "widget_14";
    const store = getAppStore();

    store.dispatch(
      appActions.widgetStatePropChange(
        idReceptor,
        "resetCampoTrigger",
        Date.now()
      )
    );

    store.dispatch(
      appActions.widgetStatePropChange(idReceptor, "valuesOverride", {
        value: "",
        nonce: Date.now(),
      })
    );
  }

  function resetChartToDefault(widgetId: string) {
    const store = getAppStore();

    // 1️⃣ campo por defecto
    store.dispatch(
      appActions.widgetStatePropChange(
        widgetId,
        "categoryFieldOverride",
        "Tipo_accidente"
      )
    );

    // 2️⃣ paleta por defecto
    const defaultColors: Record<string, string> = {
      Alcances: "#ff8a00",
      "Atropellos de animales": "#ffff32",
      "Atropellos de peatones": "#d8ff65",
      Caídas: "#00ff6a",
      Choques: "#99ffe5",
      Colisiones: "#65b2ff",
      Otros: "#003fff",
      "Salidas de vía": "#cb00cb",
      "Sin datos": "#bfbfbf",
      Vuelcos: "#ff00c5",
    };
    store.dispatch(
      appActions.widgetStatePropChange(
        widgetId,
        "categoryColorsOverride",
        defaultColors
      )
    );

    // 3️⃣ limpiar cualquier filtro de categorías
    store.dispatch(
      appActions.widgetStatePropChange(widgetId, "categoryValuesOverride", [])
    );

    console.log(`Gráfico ${widgetId} restaurado a Tipo_accidente`);
  }

  type ApplyPieClusterOpts = {
    layerId?: string;
    dataSourceId?: string;
    legendTitle?: string;
    clusterMinSize?: number;
  };

  return (
    <div className="jimu-widget">
      {props.useMapWidgetIds?.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={setJmv as any}
        />
      )}

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tooltip
          title="Eliminar filtros salvo Carretera, PK y Año"
          placement="top"
          showArrow
          open={showTooltip}
          style={{
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "0.9rem",
            borderRadius: "6px",
          }}
        >
          <Button
            type="primary"
            onClick={reiniciarTodo}
            aria-label="Eliminar filtros"
            style={buttonStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Icon
              icon={MyLocalRefreshIcon}
              size="m"
              style={{ display: "block", width: "40px", height: "40px" }}
            />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
