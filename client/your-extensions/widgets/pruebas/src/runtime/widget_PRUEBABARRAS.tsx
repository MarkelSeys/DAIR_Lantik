import { React, type AllWidgetProps, getAppStore, appActions, type WidgetProps, WidgetManager, type IMState, type IMAppConfig, WidgetState } from 'jimu-core'
import { useSelector, useDispatch } from 'react-redux'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import DinLeyend from '../../../leyenda_dinamica/src/runtime/widget.tsx'
import { forEach } from 'lodash-es'
import { cmp } from 'semver'

const { useState, useEffect, useRef } = React

export default function Widget (props: AllWidgetProps<unknown>) {
  const [appWidgets, setAppWidgets] = useState({} as unknown)
  const [chartbarWidgetId, setChartWidgetId] = useState(null as string)
  const [chartWidgetsArray, setChartWidgetsArray] = useState([] as any[])
  const [campo, setCampo] = useState(null as string)
  const [jmvs, setJmvs] = useState<JimuMapView>()
  const [ejecutar, setEjecutar] = useState(false)
  const [attUnique, setAttUnique] = useState(null)
  const refElemento = useRef(null)
  const dispatch = useDispatch()

  const ejecutarChart = () => ({
    type: 'CHART_EJECUTADO'
  })

  function makeChartContadores () {
    const config = {
      uri: 'widgets/common/chart/',
      version: '1.14.0',
      label: 'Gráfico 21',
      config: {
        tools: {
          cursorEnable: true
        },
        template: 'column',
        webChart: {
          version: '7.3.1',
          id: 'column',
          type: 'chart',
          dataSource: {
            query: {
              groupByFieldsForStatistics: [
                'Año'
              ],
              outStatistics: [
                {
                  statisticType: 'sum',
                  onStatisticField: 'NACV_n',
                  outStatisticFieldName: 'sum_of_NACV_n'
                },
                {
                  statisticType: 'sum',
                  onStatisticField: 'V',
                  outStatisticFieldName: 'sum_of_V'
                },
                {
                  statisticType: 'sum',
                  onStatisticField: 'NAT_n',
                  outStatisticFieldName: 'sum_of_NAT_n'
                }
              ],
              orderByFields: [
                'Año ASC'
              ],
              where: ''
            }
          },
          sortLabelsBy: 'yValue',
          sortLabelsOrder: 'descending',
          rotated: true,
          series: [
            {
              type: 'barSeries',
              id: 'NACV_n',
              name: 'Suma NACV',
              x: 'Año',
              y: 'sum_of_NACV_n',
              colorType: 'singleColor',
              stackedType: 'sideBySide',
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: '#5E8FD0',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-900)',
                  width: 0
                }
              },
              dataLabels: {
                type: 'chartText',
                visible: false,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-600)',
                  font: {
                    family: 'Avenir Next',
                    size: 10,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'top'
                }
              },
              rotated: false,
              dataTooltipVisible: true
            },
            {
              type: 'barSeries',
              id: 'V',
              name: 'Suma V',
              x: 'Año',
              y: 'sum_of_V',
              colorType: 'singleColor',
              stackedType: 'sideBySide',
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: '#77B484',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-900)',
                  width: 0
                }
              },
              dataLabels: {
                type: 'chartText',
                visible: false,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-600)',
                  font: {
                    family: 'Avenir Next',
                    size: 10,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'top'
                }
              },
              rotated: false,
              dataTooltipVisible: true
            },
            {
              type: 'barSeries',
              id: 'NAT_n',
              name: 'Suma NAT',
              x: 'Año',
              y: 'sum_of_NAT_n',
              colorType: 'singleColor',
              stackedType: 'sideBySide',
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: '#DF6B35',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-900)',
                  width: 0
                }
              },
              dataLabels: {
                type: 'chartText',
                visible: false,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-600)',
                  font: {
                    family: 'Avenir Next',
                    size: 10,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'top'
                }
              },
              rotated: false,
              dataTooltipVisible: true
            }
          ],
          axes: [
            {
              type: 'chartAxis',
              visible: true,
              isLogarithmic: false,
              title: {
                type: 'chartText',
                visible: true,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-800)',
                  font: {
                    family: 'Avenir Next',
                    size: 14,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'middle',
                  text: 'Accidentes por año (NACV, V NAT)'
                }
              },
              labels: {
                type: 'chartText',
                visible: true,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-500)',
                  font: {
                    family: 'Avenir Next',
                    size: 14,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'middle'
                }
              },
              valueFormat: {
                type: 'category',
                characterLimit: 11
              },
              lineSymbol: {
                type: 'esriSLS',
                style: 'esriSLSSolid',
                color: 'var(--light-800)',
                width: 1
              },
              grid: {
                type: 'esriSLS',
                style: 'esriSLSDash',
                color: 'var(--light-300)',
                width: 0
              }
            },
            {
              type: 'chartAxis',
              visible: true,
              isLogarithmic: false,
              title: {
                type: 'chartText',
                visible: false,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-800)',
                  font: {
                    family: 'Avenir Next',
                    size: 14,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'middle'
                }
              },
              labels: {
                type: 'chartText',
                visible: true,
                content: {
                  type: 'esriTS',
                  color: 'var(--dark-500)',
                  font: {
                    family: 'Avenir Next',
                    size: 14,
                    style: 'normal',
                    weight: 'normal',
                    decoration: 'none'
                  },
                  horizontalAlignment: 'center',
                  verticalAlignment: 'middle'
                }
              },
              valueFormat: {
                type: 'number',
                intlOptions: {
                  style: 'decimal',
                  useGrouping: true,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }
              },
              lineSymbol: {
                type: 'esriSLS',
                style: 'esriSLSSolid',
                color: 'var(--light-800)',
                width: 1
              },
              grid: {
                type: 'esriSLS',
                style: 'esriSLSDash',
                color: 'var(--light-300)',
                width: 0
              }
            }
          ],
          background: 'var(--white)',
          title: {
            type: 'chartText',
            visible: true,
            content: {
              type: 'esriTS',
              color: 'var(--black)',
              font: {
                family: 'Avenir Next',
                size: 24,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              text: ''
            }
          },
          footer: {
            type: 'chartText',
            visible: true,
            content: {
              type: 'esriTS',
              color: 'var(--dark-800)',
              font: {
                family: 'Avenir Next',
                size: 14,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              text: ''
            }
          },
          legend: {
            type: 'chartLegend',
            visible: true,
            title: {
              type: 'chartText',
              visible: true,
              content: {
                type: 'esriTS',
                color: 'var(--dark-800)',
                font: {
                  family: 'Avenir Next',
                  size: 20,
                  style: 'normal',
                  weight: 'normal',
                  decoration: 'none'
                },
                horizontalAlignment: 'center',
                text: ''
              }
            },
            body: {
              type: 'esriTS',
              color: 'var(--dark-800)',
              font: {
                family: 'Avenir Next',
                size: 14,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              text: ''
            },
            position: 'left'
          }
        }
      },
      id: 'widget_89',
      useDataSources: [
        {
          dataSourceId: 'dataSource_1-AccidentesSeys_1709_5211',
          mainDataSourceId: 'dataSource_1-AccidentesSeys_1709_5211',
          rootDataSourceId: 'dataSource_1',
          fields: [
            'Año',
            'NACV_n',
            'V',
            'NAT_n'
          ]
        }
      ],
      outputDataSources: [
        'widget_89_ouput'
      ]
    }
    return config
  }

  // ==================== makeChart con configbarras / configpie ====================
  function makeChart (id, groupBy, campo, values, idWidget) {
    const makeSeries = (values, groupBy, campo) => {
      const listSeries = [
        {
          type: 'barSeries',
          id: '',
          name: '',
          x: groupBy,
          y: 'OBJECTID',
          colorType: 'singleColor',
          stackedType: 'stacked',
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: '#5E8FD0',
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-900)',
              width: 0
            }
          },
          dataLabels: {
            type: 'chartText',
            visible: false,
            content: {
              type: 'esriTS',
              color: 'var(--dark-600)',
              font: {
                family: 'Avenir Next',
                size: 10,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              verticalAlignment: 'top'
            }
          },
          displayPercentageOnDataLabel: true,
          displayNumericValueOnDataLabel: false,
          dataLabelsOffset: 5,
          rotated: false,
          dataTooltipVisible: true,
          query: {
            where: `${campo}=`
          }
        }
      ]
      for (const value in values) {

        const cleanValue = value.trim();
        const safeValue = cleanValue.replace(/'/g, "''");

        const series = {
          type: 'barSeries',
          id: cleanValue,
          name: cleanValue,
          x: groupBy,
          y: 'OBJECTID',
          colorType: 'singleColor',
          stackedType: 'stacked',
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-900)',
              width: 0
            }
          },
          dataLabels: {
            type: 'chartText',
            visible: false,
            content: {
              type: 'esriTS',
              color: 'var(--dark-600)',
              font: {
                family: 'Avenir Next',
                size: 10,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              verticalAlignment: 'top'
            }
          },
          rotated: false,
          dataTooltipVisible: true,
          query: {
            where: `${campo}='${safeValue}'`
          }
        }
        listSeries.push(series)
      }
      const lastElem = {
        type: 'barSeries',
        id: '__other-split-value__',
        name: 'Undefined',
        x: groupBy,
        y: 'OBJECTID',
        colorType: 'singleColor',
        stackedType: 'stacked',
        fillSymbol: {
          type: 'esriSFS',
          style: 'esriSFSSolid',
          color: '#D6D6D6',
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            color: 'var(--light-900)',
            width: 0
          }
        },
        dataLabels: {
          type: 'chartText',
          visible: false,
          content: {
            type: 'esriTS',
            color: 'var(--dark-600)',
            font: {
              family: 'Avenir Next',
              size: 10,
              style: 'normal',
              weight: 'normal',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            verticalAlignment: 'top'
          }
        },
        rotated: false,
        dataTooltipVisible: true,
        query: {
          where: "Tipo_accidente='__other-split-value__'"
        }
      }
      listSeries.push(lastElem)
      return listSeries
    };

    // Pie normal (quesitos pequeños)
    const makeSeriesPie = (campo, values) => {
      const listSeries = [
        {
          type: 'pieSeries',
          colorType: 'singleColor',
          id: 'OBJECTID',
          name: 'OBJECTID',
          x: campo,
          y: 'count_of_OBJECTID',
          innerRadius: 0,
          // 👉 empezamos a "y cuarto" (3 en punto)
          startAngle: -90,
          endAngle: 270,
          displayNumericValueOnDataLabel: true,
          displayPercentageOnDataLabel: false,
          displayNumericValueOnTooltip: true,
          displayPercentageOnTooltip: true,
          dataLabelsOffset: 2,
          sliceGrouping: {
            sliceId: '__other-slice__',
            percentageThreshold: 0,
            label: 'Other',
            fillSymbol: {
              type: 'esriSFS',
              style: 'esriSFSSolid',
              color: '#D6D6D6',
              outline: {
                type: 'esriSLS',
                style: 'esriSLSSolid',
                color: 'var(--light-100)',
                width: 0
              }
            }
          },
          numericValueFormat: {
            type: 'number',
            intlOptions: {
              style: 'decimal',
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 3
            }
          },
          percentValueFormat: {
            type: 'number',
            intlOptions: {
              style: 'percent',
              notation: 'standard',
              minimumFractionDigits: 0,
              maximumFractionDigits: 3
            }
          },
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: '#D6D6D6',
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-100)',
              width: 0
            }
          },
          dataLabels: {
            type: 'chartText',
            visible: false,
            content: {
              type: 'esriTS',
              color: 'var(--dark-600)',
              font: {
                family: 'Avenir Next',
                size: 8,
                style: 'normal',
                weight: 'bold',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              verticalAlignment: 'middle',
              wrap: true,
              maxWidth: 100
            }
          },
          dataTooltipVisible: true,
          query: {
            where: `${campo}=''`
          },
          slices: [
            {
              sliceId: '',
              label: '',
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: '#5E8FD0',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-100)',
                  width: 0
                }
              }
            }
          ]
        }
      ]

      for (const value in values) {
        const slice = {
          sliceId: value,
          label: value,
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-100)',
              width: 0
            }
          }
        }
        listSeries[0].slices.push(slice)
      }

      return listSeries
    }

    // Pie grande (widget_55)
    const makeSeriesPieMax = (campo, values) => {
      const listSeriesMax = [
        {
          type: 'pieSeries',
          colorType: 'singleColor',
          id: 'OBJECTID',
          name: 'OBJECTID',
          x: campo,
          y: 'count_of_OBJECTID',
          innerRadius: 0,
          startAngle: 0,
          endAngle: 360,
          displayNumericValueOnDataLabel: true,
          displayPercentageOnDataLabel: true,
          displayNumericValueOnTooltip: true,
          displayPercentageOnTooltip: true,
          dataLabelsOffset: -100,
          sliceGrouping: {
            sliceId: '__other-slice__',
            percentageThreshold: 0,
            label: 'Other',
            fillSymbol: {
              type: 'esriSFS',
              style: 'esriSFSSolid',
              color: '#D6D6D6',
              outline: {
                type: 'esriSLS',
                style: 'esriSLSSolid',
                color: 'var(--light-100)',
                width: 0
              }
            }
          },
          numericValueFormat: {
            type: 'number',
            intlOptions: {
              style: 'decimal',
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 1
            }
          },
          percentValueFormat: {
            type: 'number',
            intlOptions: {
              style: 'percent',
              notation: 'standard',
              minimumFractionDigits: 0,
              maximumFractionDigits: 1
            }
          },
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: '#D6D6D6',
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-100)',
              width: 0
            }
          },
          dataLabels: {
            type: 'chartText',
            visible: true,
            content: {
              type: 'esriTS',
              color: 'var(--dark-600)',
              font: {
                family: 'Avenir Next',
                size: 13,
                style: 'normal',
                weight: 'bold',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              verticalAlignment: 'middle',
              wrap: true,
              maxWidth: 100
            }
          },
          dataTooltipVisible: true,
          query: {
            where: `${campo}=''`
          },
          slices: [
            {
              sliceId: '',
              label: '',
              fillSymbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: '#5E8FD0',
                outline: {
                  type: 'esriSLS',
                  style: 'esriSLSSolid',
                  color: 'var(--light-100)',
                  width: 0
                }
              }
            }
          ]
        }
      ]

      for (const value in values) {
        const slice = {
          sliceId: value,
          label: value,
          fillSymbol: {
            type: 'esriSFS',
            style: 'esriSFSSolid',
            color: `rgb(${values[value][0]}, ${values[value][1]}, ${values[value][2]})`,
            outline: {
              type: 'esriSLS',
              style: 'esriSLSSolid',
              color: 'var(--light-100)',
              width: 0
            }
          }
        }
        listSeriesMax[0].slices.push(slice)
      }

      return listSeriesMax
    }

    // =================== elegir series ===================
    let series
    if (id === 'column') {
      series = makeSeries(values, groupBy, campo)
    } else {
      if (idWidget === 'widget_55') {
        series = makeSeriesPieMax(campo, values)
      } else {
        series = makeSeriesPie(campo, values)
      }
    }

    // =================== partes comunes ===================
    const commonAxes = [
      {
        type: 'chartAxis',
        visible: true,
        isLogarithmic: false,
        title: {
          type: 'chartText',
          visible: false,
          content: {
            type: 'esriTS',
            color: 'var(--dark-800)',
            font: {
              family: 'Avenir Next',
              size: 14,
              style: 'normal',
              weight: 'normal',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            verticalAlignment: 'middle'
          }
        },
        labels: {
          type: 'chartText',
          visible: true,
          content: {
            type: 'esriTS',
            color: 'var(--dark-500)',
            font: {
              family: 'Avenir Next',
              size: 14,
              style: 'normal',
              weight: 'normal',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            verticalAlignment: 'middle'
          }
        },
        valueFormat: {
          type: 'category',
          characterLimit: 11
        },
        lineSymbol: {
          type: 'esriSLS',
          style: 'esriSLSSolid',
          color: 'var(--light-800)',
          width: 1
        },
        grid: {
          type: 'esriSLS',
          style: 'esriSLSDash',
          color: 'var(--light-300)',
          width: 0
        }
      },
      {
        type: 'chartAxis',
        visible: true,
        isLogarithmic: false,
        title: {
          type: 'chartText',
          visible: false,
          content: {
            type: 'esriTS',
            color: 'var(--dark-800)',
            font: {
              family: 'Avenir Next',
              size: 14,
              style: 'normal',
              weight: 'normal',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            verticalAlignment: 'middle'
          }
        },
        labels: {
          type: 'chartText',
          visible: true,
          content: {
            type: 'esriTS',
            color: 'var(--dark-500)',
            font: {
              family: 'Avenir Next',
              size: 14,
              style: 'normal',
              weight: 'normal',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            verticalAlignment: 'middle'
          }
        },
        valueFormat: {
          type: 'number',
          intlOptions: {
            style: 'decimal',
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }
        },
        lineSymbol: {
          type: 'esriSLS',
          style: 'esriSLSSolid',
          color: 'var(--light-800)',
          width: 1
        },
        grid: {
          type: 'esriSLS',
          style: 'esriSLSDash',
          color: 'var(--light-300)',
          width: 0
        }
      }
    ]

    const commonFooter = {
      type: 'chartText',
      visible: true,
      content: {
        type: 'esriTS',
        color: 'var(--dark-800)',
        font: {
          family: 'Avenir Next',
          size: 14,
          style: 'normal',
          weight: 'normal',
          decoration: 'none'
        },
        horizontalAlignment: 'center',
        text: ''
      }
    }

    const commonTitle = {
      type: 'chartText',
      visible: true,
      content: {
        type: 'esriTS',
        color: 'var(--black)',
        font: {
          family: 'Avenir Next',
          size: 24,
          style: 'normal',
          weight: 'normal',
          decoration: 'none'
        },
        horizontalAlignment: 'center',
        text: ''
      }
    }

    // =================== CONFIG BARRAS ===================
    const configbarras = {
      tools: {
        cursorEnable: true
      },
      template: id,
      webChart: {
        version: '7.3.1',
        id: id,
        type: 'chart',
        axes: commonAxes,
        background: 'var(--white)',
        dataSource: {
          query: {
            groupByFieldsForStatistics: [
              groupBy
            ],
            outStatistics: [
              {
                statisticType: 'count',
                onStatisticField: 'OBJECTID',
                outStatisticFieldName: 'count_of_OBJECTID'
              }
            ],
            orderByFields: [
              `${groupBy} ASC`
            ],
            where: `${campo}={value}`
          }
        },
        footer: commonFooter,
        legend: {
          type: 'chartLegend',
          visible: false,
          layout: 'vertical',
          labelMaxWidth: 200,
          title: {
            type: 'chartText',
            visible: true,
            content: {
              type: 'esriTS',
              color: 'var(--dark-800)',
              font: {
                family: 'Avenir Next',
                size: 40,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              text: ''
            }
          },
          body: {
            type: 'esriTS',
            color: 'var(--dark-800)',
            font: {
              family: 'Avenir Next',
              size: 9,
              style: 'normal',
              weight: 'bold',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            text: ''
          },
          position: 'right'
        },
        sortLabelsBy: 'originalValue',
        sortLabelsOrder: 'ascending',
        rotated: false,
        series: series,
        title: commonTitle
      }
    }

    // =================== CONFIG PIE ===================
    const configpie = {
      tools: {
        cursorEnable: true
      },
      template: id,
      webChart: {
        version: '7.3.1',
        id: id,
        type: 'chart',
        axes: commonAxes,
        background: 'var(--white)',
        dataSource: {
          query: {
            groupByFieldsForStatistics: [
              groupBy
            ],
            outStatistics: [
              {
                statisticType: 'count',
                onStatisticField: 'OBJECTID',
                outStatisticFieldName: 'count_of_OBJECTID'
              }
            ],
            // 👉 ordenar quesitos de mayor a menor porcentaje
            orderByFields: [
              'count_of_OBJECTID DESC'
            ],
            where: ''
          }
        },
        footer: commonFooter,
        legend: {
          type: 'chartLegend',
          visible: true,
          layout: 'vertical',
          labelMaxWidth: 200,
          title: {
            type: 'chartText',
            visible: true,
            content: {
              type: 'esriTS',
              color: 'var(--dark-800)',
              font: {
                family: 'Avenir Next',
                size: 40,
                style: 'normal',
                weight: 'normal',
                decoration: 'none'
              },
              horizontalAlignment: 'center',
              text: ''
            }
          },
          body: {
            type: 'esriTS',
            color: 'var(--dark-800)',
            font: {
              family: 'Avenir Next',
              size: 9,
              style: 'normal',
              weight: 'bold',
              decoration: 'none'
            },
            horizontalAlignment: 'center',
            text: ''
          },
          position: 'right'
        },
        sortLabelsBy: 'originalValue',
        sortLabelsOrder: 'descending',
        rotated: false,
        series: series,
        title: commonTitle
      }
    }

    // 👉 devolvemos la config correcta
    return id === 'column' ? configbarras : configpie
  }

  const handleUpdate = (newState: string) => {
    setCampo(newState)
  }

  const handleRun = (run: boolean) => {
    setEjecutar(run)
  }

  const handleAtt = (att: {}) => {
    setAttUnique(att)
  }

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJmvs(jmv)
    }
  }

  // Aáde props globales cuando se pulsa Ejecutar
  useEffect(() => {
    if (jmvs) {
      const appConf = getAppStore().getState().appConfig
      appConf.lastFilter = jmvs.view.map.layers.items[17].definitionExpression
      if (ejecutar) {
        appConf.counter = appConf.counter ? appConf.counter + 1 : 1
      }
      dispatch(ejecutarChart())
    }
  }, [ejecutar])

  useEffect(() => {
    if (attUnique && ejecutar) {
      const groupByWidgets = {
        widget_2: campo,
        widget_4: 'Año',
        widget_5: 'Mes',
        widget_6: 'Dia',
        widget_7: 'Mes_Año',
        widget_9: 'PK',
        widget_10: 'Kilometro',
        widget_102: 'Año',
        widget_58: 'Mes',
        widget_85: 'Dia',
        widget_60: 'Mes_Año',
        widget_68: 'PK',
        widget_67: 'Kilometro',
        widget_55: campo,
        widget_132: 'Año',
        widget_168: campo,
        widget_159: 'Año',
        widget_160: 'Mes',
        widget_161: 'Dia',
        widget_162: 'Mes_Año',
        widget_172: 'Kilometro',
        widget_173: 'PK'
      }

      for (const widget in chartWidgetsArray) {
        if (chartWidgetsArray[widget].id === 'widget_2') {
          getAppStore().dispatch(appActions.widgetConfigLoaded(
            chartWidgetsArray[widget].id,
            makeChart('pie', groupByWidgets[chartWidgetsArray[widget].id], campo, attUnique, chartWidgetsArray[widget].id)
          ))
        } else if (chartWidgetsArray[widget].id === 'widget_89') {
          makeChartContadores()
        } else {
          getAppStore().dispatch(appActions.widgetConfigLoaded(
            chartWidgetsArray[widget].id,
            makeChart('column', groupByWidgets[chartWidgetsArray[widget].id], campo, attUnique, null)
          ))
        }
        // Añade la simbología al gráfico de quesito grande
        setChartCategoryAndColors('widget_168', campo, attUnique)
      }
      const appConfig = getAppStore().getState().appConfig
      appConfig.campo = campo
      setEjecutar(false)
    }
  }, [campo, attUnique])

  // Normaliza attUnique a ColorMap (string->CSS color)
  function normalizeAttUnique (attUnique: Record<string, any>) {
    const toCss = (v: any) => {
      if (typeof v === 'string') return v
      if (Array.isArray(v) && v.length >= 3) {
        const [r, g, b] = v
        return `rgb(${r}, ${g}, ${b})`
      }
      return undefined
    }
    const out: Record<string, string> = {}
    for (const [k, v] of Object.entries(attUnique || {})) {
      const c = toCss(v)
      if (c) out[k] = c
    }
    return out
  }

  function setChartCategoryAndColors (widgetId: string, fieldName: string, attUnique: any) {
    const store = getAppStore()
    const colorMap2 = normalizeAttUnique(attUnique)
    ;(window as any).SimbologiaSeleccionada = fieldName
    ;(window as any).valoresSeleccionados = []
    ;(window as any).valoresSeleccionados = Object.keys(attUnique)
    store.dispatch(appActions.widgetStatePropChange(widgetId, 'categoryFieldOverride', fieldName))
    store.dispatch(appActions.widgetStatePropChange(widgetId, 'categoryColorsOverride', colorMap2))
    store.dispatch(appActions.widgetStatePropChange(widgetId, 'categoryValuesOverride', (window as any).valoresSeleccionados))
  }

  useEffect(() => {
    const widgets = getAppStore().getState().appConfig.widgets
    setAppWidgets(widgets)
    setChartWidgetId('widget_4')
  }, [])

  // Trigger externo para sincronizar (ejemplo Tipo_accidente)
  useEffect(() => {
    const campoExt = (props as any)?.stateProps?.campo
    const trig = (props as any)?.stateProps?.applyClusterChartsTrigger
    if (campoExt === 'Tipo_accidente' && trig) {
      getAppStore().dispatch(appActions.widgetStatePropChange(props.id, 'applyClusterChartsTrigger', 0))
    }
  }, [(props as any)?.stateProps?.campo, (props as any)?.stateProps?.applyClusterChartsTrigger])

  useEffect(() => {
    if (appWidgets) {
      const widgetsArray = Object.values(appWidgets as any)
      setChartWidgetsArray(widgetsArray.filter((w: any) => w.uri === 'widgets/common/chart/'))
    }
  }, [appWidgets])

  function handleRestart () {
    try {
      setCampo(null)
      setEjecutar(false)
      setAttUnique(null)
    } catch (e) {
      console.warn('[widget_14] handleRestart error:', e)
    }
  }

  // Reinicio completo solicitado desde fuera
  useEffect(() => {
    const trig = (props as any)?.stateProps?.restartTrigger
    if (!trig) return

    handleRestart()

    getAppStore().dispatch(
      appActions.widgetStatePropChange(props.id, 'restartTrigger', 0)
    )
  }, [(props as any)?.stateProps?.restartTrigger])

  return (
    <div>
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
      )}
      <div>
        <DinLeyend {...props} onUpdate={handleUpdate} onRun={handleRun} onAtt={handleAtt} />
      </div>
    </div>
  )
}
