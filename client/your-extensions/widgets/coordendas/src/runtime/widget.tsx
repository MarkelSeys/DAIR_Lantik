import { React, type AllWidgetProps, getAppStore, appActions, ReactRedux, type WidgetProps, WidgetManager, type IMState, type IMAppConfig, WidgetState } from 'jimu-core'
import { useSelector } from 'react-redux'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
const { useState, useEffect } = React

export default function Widget (props: AllWidgetProps<unknown>) {
  const [appWidgets, setAppWidgets] = useState({} as unknown)
  const [chartbarWidgetId, setChartWidgetId] = useState(null as string)
  const [chartWidgetsArray, setChartWidgetsArray] = useState([] as any[])
  const [newAppConfig, setNewAppConfig] = useState({} as IMAppConfig)
  const [campo, setCampo] = useState(null as string)
  const [escala, setEscala] = useState(null as integer)
  const [zoom, setZoom] = useState(null as integer)

  // Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
  const widgetState = useSelector((state: IMState) => {
    console.log(state)
    const widgetState = state.widgetsState['widget_4']
    return widgetState
  })
  // Utiliza useSelector para acceder al estado global
  //const appConfig = useSelector(state => state.appConfig)

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      jmv.view.on('mouse-wheel', (evt) => {
        sleep(1000).then(() => {
          console.log('mouse')
          console.log(jmv.view.scale)
          console.log(jmv.view.zoom)
          setEscala(jmv.view.scale)
          setZoom(jmv.view.zoom)
        })
      })
    }
  }

  useEffect(() => {
    if (escala > 1577790) {
      const config = {
        "tools": {
            "cursorEnable": true
        },
        "template": "column",
        "webChart": {
            "version": "7.3.1",
            "id": "column",
            "type": "chart",
            "dataSource": {
                "query": {
                    "groupByFieldsForStatistics": [
                        "Kilometro"
                    ],
                    "outStatistics": [
                        {
                            "statisticType": "count",
                            "onStatisticField": "OBJECTID",
                            "outStatisticFieldName": "count_of_OBJECTID"
                        }
                    ],
                    "orderByFields": [
                        "Kilometro ASC"
                    ],
                    "where": ""
                }
            },
            "sortLabelsBy": "originalValue",
            "rotated": false,
            "series": [
                {
                    "type": "barSeries",
                    "id": "OBJECTID",
                    "name": "OBJECTID",
                    "x": "Kilometro",
                    "y": "count_of_OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#8257C2",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true
                }
            ],
            "axes": [
                {
                    "type": "chartAxis",
                    "visible": true,
                    "isLogarithmic": false,
                    "title": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "labels": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-500)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "valueFormat": {
                        "type": "category",
                        "characterLimit": 11
                    },
                    "lineSymbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": "var(--light-800)",
                        "width": 1
                    },
                    "grid": {
                        "type": "esriSLS",
                        "style": "esriSLSDash",
                        "color": "var(--light-300)",
                        "width": 0
                    }
                },
                {
                    "type": "chartAxis",
                    "visible": true,
                    "isLogarithmic": false,
                    "title": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "labels": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-500)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "valueFormat": {
                        "type": "number",
                        "intlOptions": {
                            "style": "decimal",
                            "useGrouping": true,
                            "minimumFractionDigits": 0,
                            "maximumFractionDigits": 0
                        }
                    },
                    "lineSymbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": "var(--light-800)",
                        "width": 1
                    },
                    "grid": {
                        "type": "esriSLS",
                        "style": "esriSLSDash",
                        "color": "var(--light-300)",
                        "width": 0
                    }
                }
            ],
            "background": "var(--white)",
            "title": {
                "type": "chartText",
                "visible": true,
                "content": {
                    "type": "esriTS",
                    "color": "var(--black)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 24,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                }
            },
            "footer": {
                "type": "chartText",
                "visible": true,
                "content": {
                    "type": "esriTS",
                    "color": "var(--dark-800)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 14,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                }
            },
            "legend": {
                "type": "chartLegend",
                "visible": false,
                "title": {
                    "type": "chartText",
                    "visible": true,
                    "content": {
                        "type": "esriTS",
                        "color": "var(--dark-800)",
                        "font": {
                            "family": "Avenir Next",
                            "size": 20,
                            "style": "normal",
                            "weight": "normal",
                            "decoration": "none"
                        },
                        "horizontalAlignment": "center",
                        "text": ""
                    }
                },
                "body": {
                    "type": "esriTS",
                    "color": "var(--dark-800)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 14,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                },
                "position": "right"
            }
        }
      }
      getAppStore().dispatch(appActions.widgetConfigLoaded(
        'widget_11',
        config
      ))
    } else {
      const config = {
        "tools": {
            "cursorEnable": true
        },
        "template": "column",
        "webChart": {
            "version": "7.3.1",
            "id": "column",
            "type": "chart",
            "dataSource": {
                "query": {
                    "groupByFieldsForStatistics": [
                        "Kilometro"
                    ],
                    "outStatistics": [
                        {
                            "statisticType": "count",
                            "onStatisticField": "OBJECTID",
                            "outStatisticFieldName": "count_of_OBJECTID"
                        }
                    ],
                    "orderByFields": [
                        "Kilometro ASC"
                    ],
                    "where": "Tipo_accidente={value}"
                }
            },
            "sortLabelsBy": "originalValue",
            "rotated": false,
            "series": [
                {
                    "type": "barSeries",
                    "id": "",
                    "name": "",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#5E8FD0",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente=''"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Alcances",
                    "name": "Alcances",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#77B484",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Alcances'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Atropellos de animales",
                    "name": "Atropellos de animales",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#DF6B35",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Atropellos de animales'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Atropellos de peatones",
                    "name": "Atropellos de peatones",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#DBCF4E",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Atropellos de peatones'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Caidas",
                    "name": "Caidas",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#41546D",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Caidas'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Choques",
                    "name": "Choques",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#8257C2",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Choques'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Colisiones",
                    "name": "Colisiones",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#D6558B",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Colisiones'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Otros",
                    "name": "Otros",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#5E8FD0",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Otros'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Salidas de vía",
                    "name": "Salidas de vía",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#77B484",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Salidas de vía'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "Vuelcos",
                    "name": "Vuelcos",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#DF6B35",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='Vuelcos'"
                    }
                },
                {
                    "type": "barSeries",
                    "id": "__other-split-value__",
                    "name": "Undefined",
                    "x": "Kilometro",
                    "y": "OBJECTID",
                    "colorType": "singleColor",
                    "stackedType": "stacked",
                    "fillSymbol": {
                        "type": "esriSFS",
                        "style": "esriSFSSolid",
                        "color": "#DBCF4E",
                        "outline": {
                            "type": "esriSLS",
                            "style": "esriSLSSolid",
                            "color": "var(--light-900)",
                            "width": 0
                        }
                    },
                    "dataLabels": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-600)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 10,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "top"
                        }
                    },
                    "rotated": false,
                    "dataTooltipVisible": true,
                    "query": {
                        "where": "Tipo_accidente='__other-split-value__'"
                    }
                }
            ],
            "axes": [
                {
                    "type": "chartAxis",
                    "visible": true,
                    "isLogarithmic": false,
                    "title": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "labels": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-500)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "valueFormat": {
                        "type": "category",
                        "characterLimit": 11
                    },
                    "lineSymbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": "var(--light-800)",
                        "width": 1
                    },
                    "grid": {
                        "type": "esriSLS",
                        "style": "esriSLSDash",
                        "color": "var(--light-300)",
                        "width": 0
                    }
                },
                {
                    "type": "chartAxis",
                    "visible": true,
                    "isLogarithmic": false,
                    "title": {
                        "type": "chartText",
                        "visible": false,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-800)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "labels": {
                        "type": "chartText",
                        "visible": true,
                        "content": {
                            "type": "esriTS",
                            "color": "var(--dark-500)",
                            "font": {
                                "family": "Avenir Next",
                                "size": 14,
                                "style": "normal",
                                "weight": "normal",
                                "decoration": "none"
                            },
                            "horizontalAlignment": "center",
                            "verticalAlignment": "middle"
                        }
                    },
                    "valueFormat": {
                        "type": "number",
                        "intlOptions": {
                            "style": "decimal",
                            "useGrouping": true,
                            "minimumFractionDigits": 0,
                            "maximumFractionDigits": 0
                        }
                    },
                    "lineSymbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": "var(--light-800)",
                        "width": 1
                    },
                    "grid": {
                        "type": "esriSLS",
                        "style": "esriSLSDash",
                        "color": "var(--light-300)",
                        "width": 0
                    }
                }
            ],
            "background": "var(--white)",
            "title": {
                "type": "chartText",
                "visible": true,
                "content": {
                    "type": "esriTS",
                    "color": "var(--black)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 24,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                }
            },
            "footer": {
                "type": "chartText",
                "visible": true,
                "content": {
                    "type": "esriTS",
                    "color": "var(--dark-800)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 14,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                }
            },
            "legend": {
                "type": "chartLegend",
                "visible": false,
                "title": {
                    "type": "chartText",
                    "visible": true,
                    "content": {
                        "type": "esriTS",
                        "color": "var(--dark-800)",
                        "font": {
                            "family": "Avenir Next",
                            "size": 20,
                            "style": "normal",
                            "weight": "normal",
                            "decoration": "none"
                        },
                        "horizontalAlignment": "center",
                        "text": ""
                    }
                },
                "body": {
                    "type": "esriTS",
                    "color": "var(--dark-800)",
                    "font": {
                        "family": "Avenir Next",
                        "size": 14,
                        "style": "normal",
                        "weight": "normal",
                        "decoration": "none"
                    },
                    "horizontalAlignment": "center",
                    "text": ""
                },
                "position": "right"
            }
        }
      }
      getAppStore().dispatch(appActions.widgetConfigLoaded(
        'widget_11',
        config
      ))
    }
  }, [escala])
  // aqui habria que poner la variable seleccionada por el usuario que seria un estado y meterla en la lista de la parte de abajo
  useEffect(() => {
    const appC = getAppStore().getState().appConfig
    //appC.widgets.widget_4.config.webChart.dataSource.query.where = 'Subtipo_Accidente={value}'
    //console.log(appC)
    const config = {
      "pages": {
          "page_1": {
              "id": "page_1",
              "mode": "FIT_WINDOW",
              "type": "NORMAL",
              "layout": {
                  "LARGE": "layout_3"
              },
              "isDefault": true,
              "isVisible": true,
              "label": "Página 2",
              "header": false,
              "footer": false
          }
      },
      "layouts": {
          "layout_1": {
              "content": {},
              "type": "FIXED",
              "setting": {
                  "lockDescendants": true
              },
              "id": "layout_1",
              "parent": {
                  "id": "",
                  "type": "header"
              }
          },
          "layout_3": {
              "type": "FIXED",
              "content": {
                  "0": {
                      "type": "WIDGET",
                      "widgetId": "widget_3",
                      "bbox": {
                          "left": "30.8%",
                          "right": "21.6%",
                          "top": "3.2%",
                          "bottom": "45.2%",
                          "width": "47.6%",
                          "height": "51.6%"
                      },
                      "setting": {
                          "autoProps": {
                              "left": true,
                              "right": false,
                              "top": false,
                              "bottom": true
                          },
                          "vCenter": false,
                          "hCenter": false
                      },
                      "id": "0"
                  },
                  "1": {
                      "type": "WIDGET",
                      "widgetId": "widget_4",
                      "bbox": {
                          "left": "6.2%",
                          "right": "47.0%",
                          "top": "58.0%",
                          "bottom": "2.0%",
                          "width": "46.8%",
                          "height": "40.0%"
                      },
                      "setting": {
                          "autoProps": {
                              "left": false,
                              "right": true,
                              "top": true,
                              "bottom": false
                          },
                          "vCenter": false,
                          "hCenter": false
                      },
                      "id": "1"
                  },
                  "2": {
                      "type": "WIDGET",
                      "widgetId": "widget_5",
                      "bbox": {
                          "left": "75.2%",
                          "right": "16.9%",
                          "top": "62.1%",
                          "bottom": "32.2%",
                          "width": "8.0%",
                          "height": "5.7%"
                      },
                      "setting": {
                          "autoProps": {
                              "width": "AUTO",
                              "height": "AUTO",
                              "right": false,
                              "left": true,
                              "top": true,
                              "bottom": false
                          },
                          "vCenter": false,
                          "hCenter": false
                      },
                      "id": "2"
                  }
              },
              "order": [
                  "0",
                  "1",
                  "2"
              ],
              "id": "layout_3",
              "parent": {
                  "id": "page_1",
                  "type": "pages"
              }
          },
          "layout_4": {
              "content": {},
              "type": "FIXED",
              "label": "Map FixedLayout",
              "id": "layout_4",
              "parent": {
                  "id": "widget_3",
                  "type": "widget"
              }
          },
          "layout_5": {
              "content": {
                  "0": {
                      "type": "WIDGET",
                      "widgetId": "widget_6",
                      "bbox": {},
                      "id": "0"
                  },
                  "1": {
                      "type": "WIDGET",
                      "widgetId": "widget_9",
                      "bbox": {},
                      "id": "1"
                  }
              },
              "type": "FIXED",
              "label": "Controller layout",
              "order": [
                  "1",
                  "0"
              ],
              "id": "layout_5",
              "parent": {
                  "id": "widget_5",
                  "type": "widget"
              }
          }
      },
      "exbVersion": "1.14.0",
      "mainSizeMode": "LARGE",
      "theme": "themes/default/",
      "forBuilderAttributes": {
          "lockLayout": false
      },
      "template": "blankfullscreen",
      "widgets": {
          "widget_3": {
              "uri": "widgets/arcgis/arcgis-map/",
              "version": "1.14.0",
              "label": "Mapa 2",
              "config": {
                  "toolConfig": {
                      "canZoom": true,
                      "canHome": true,
                      "canSearch": true,
                      "canNavigation": true
                  },
                  "isUseCustomMapState": false
              },
              "id": "widget_3",
              "layouts": {
                  "MapFixedLayout": {
                      "LARGE": "layout_4"
                  }
              },
              "useDataSources": [
                  {
                      "dataSourceId": "dataSource_1",
                      "mainDataSourceId": "dataSource_1"
                  }
              ],
              "context": {
                  "isRemote": false,
                  "folderUrl": "https://localhost:3001/experience/../widgets/arcgis/arcgis-map/"
              },
              "parent": {
                  "LARGE": [
                      {
                          "layoutId": "layout_3",
                          "layoutItemId": "0"
                      }
                  ]
              },
              "_originManifest": {
                  "name": "arcgis-map",
                  "label": "Map",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "publishMessages": [
                      "EXTENT_CHANGE",
                      "DATA_RECORDS_SELECTION_CHANGE"
                  ],
                  "messageActions": [
                      {
                          "name": "panTo",
                          "label": "Pan to",
                          "uri": "message-actions/pan-to-action",
                          "settingUri": "message-actions/pan-to-action-setting"
                      },
                      {
                          "name": "zoomToFeature",
                          "label": "Zoom to",
                          "uri": "message-actions/zoom-to-feature-action",
                          "settingUri": "message-actions/zoom-to-feature-action-setting"
                      },
                      {
                          "name": "flash",
                          "label": "Flash",
                          "uri": "message-actions/flash-action",
                          "settingUri": "message-actions/flash-action-setting"
                      },
                      {
                          "name": "filter",
                          "label": "Filter",
                          "uri": "message-actions/filter-action",
                          "settingUri": "message-actions/filter-action-setting"
                      },
                      {
                          "name": "showOnMap",
                          "label": "Show on map",
                          "uri": "message-actions/show-on-map-action",
                          "settingUri": "message-actions/show-on-map-action-setting"
                      },
                      {
                          "name": "addToMap",
                          "label": "Add to map",
                          "uri": "message-actions/add-to-map-action"
                      }
                  ],
                  "defaultSize": {
                      "width": 400,
                      "height": 400
                  },
                  "properties": {
                      "canCreateMapView": true,
                      "hasEmbeddedLayout": true,
                      "passDataSourceToChildren": false,
                      "coverLayoutBackground": true,
                      "watchViewportVisibility": true,
                      "supportAutoSize": false,
                      "canConsumeDataAction": true,
                      "needActiveState": true
                  },
                  "excludeDataActions": [
                      "setFilter",
                      "arcgis-map.addToMap",
                      "dataStatistics",
                      "table.addToTable"
                  ],
                  "dataActions": [
                      {
                          "name": "zoomToFeature",
                          "label": "Zoom to",
                          "uri": "data-actions/zoom-to",
                          "icon": "runtime/assets/icons/select-tool/select-zoomto.svg"
                      },
                      {
                          "name": "panTo",
                          "label": "Pan to",
                          "uri": "data-actions/pan-to",
                          "icon": "runtime/assets/icons/pan-to.svg"
                      },
                      {
                          "name": "showOnMap",
                          "label": "Show on map",
                          "uri": "data-actions/show-on-map",
                          "settingUri": "data-actions/show-on-map-setting",
                          "icon": "runtime/assets/icons/show-on-map.svg"
                      },
                      {
                          "name": "addToMap",
                          "label": "Add to map",
                          "uri": "data-actions/add-to-map",
                          "icon": "runtime/assets/icons/add-to-map.svg"
                      }
                  ],
                  "layouts": [
                      {
                          "name": "MapFixedLayout",
                          "label": "Map FixedLayout",
                          "type": "FIXED"
                      }
                  ],
                  "urlParameters": [
                      {
                          "name": "viewpoint",
                          "label": "Viewpoint",
                          "tooltip": "Viewpoint describes the point of view for a web map or web scene."
                      },
                      {
                          "name": "center",
                          "label": "Center"
                      },
                      {
                          "name": "scale",
                          "label": "Scale"
                      },
                      {
                          "name": "rotation",
                          "label": "Rotation"
                      },
                      {
                          "name": "layer_visibility",
                          "label": "Layer visibility"
                      }
                  ],
                  "extensions": [
                      {
                          "name": "appConfigOperations",
                          "point": "APP_CONFIG_OPERATIONS",
                          "uri": "tools/app-config-operations"
                      }
                  ],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ]
              },
              "manifest": {
                  "name": "arcgis-map",
                  "label": "Map",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "publishMessages": [
                      "EXTENT_CHANGE",
                      "DATA_RECORDS_SELECTION_CHANGE"
                  ],
                  "messageActions": [
                      {
                          "name": "panTo",
                          "label": "Pan to",
                          "uri": "message-actions/pan-to-action",
                          "settingUri": "message-actions/pan-to-action-setting"
                      },
                      {
                          "name": "zoomToFeature",
                          "label": "Zoom to",
                          "uri": "message-actions/zoom-to-feature-action",
                          "settingUri": "message-actions/zoom-to-feature-action-setting"
                      },
                      {
                          "name": "flash",
                          "label": "Flash",
                          "uri": "message-actions/flash-action",
                          "settingUri": "message-actions/flash-action-setting"
                      },
                      {
                          "name": "filter",
                          "label": "Filter",
                          "uri": "message-actions/filter-action",
                          "settingUri": "message-actions/filter-action-setting"
                      },
                      {
                          "name": "showOnMap",
                          "label": "Show on map",
                          "uri": "message-actions/show-on-map-action",
                          "settingUri": "message-actions/show-on-map-action-setting"
                      },
                      {
                          "name": "addToMap",
                          "label": "Add to map",
                          "uri": "message-actions/add-to-map-action"
                      }
                  ],
                  "defaultSize": {
                      "width": 400,
                      "height": 400
                  },
                  "properties": {
                      "canCreateMapView": true,
                      "hasEmbeddedLayout": true,
                      "passDataSourceToChildren": false,
                      "coverLayoutBackground": true,
                      "watchViewportVisibility": true,
                      "supportAutoSize": false,
                      "canConsumeDataAction": true,
                      "needActiveState": true,
                      "hasVersionManager": false,
                      "supportInlineEditing": false,
                      "supportRepeat": false,
                      "hasBuilderSupportModule": false,
                      "lockChildren": false,
                      "flipIcon": false,
                      "canCrossLayoutBoundary": false,
                      "isWidgetController": false,
                      "hasMainClass": true,
                      "hasConfig": true,
                      "hasSettingPage": true,
                      "hasConfigInSettingPage": true,
                      "deactivateOtherWidgets": true
                  },
                  "excludeDataActions": [
                      "setFilter",
                      "arcgis-map.addToMap",
                      "dataStatistics",
                      "table.addToTable"
                  ],
                  "dataActions": [
                      {
                          "name": "zoomToFeature",
                          "label": "Zoom to",
                          "uri": "data-actions/zoom-to",
                          "icon": "runtime/assets/icons/select-tool/select-zoomto.svg"
                      },
                      {
                          "name": "panTo",
                          "label": "Pan to",
                          "uri": "data-actions/pan-to",
                          "icon": "runtime/assets/icons/pan-to.svg"
                      },
                      {
                          "name": "showOnMap",
                          "label": "Show on map",
                          "uri": "data-actions/show-on-map",
                          "settingUri": "data-actions/show-on-map-setting",
                          "icon": "runtime/assets/icons/show-on-map.svg"
                      },
                      {
                          "name": "addToMap",
                          "label": "Add to map",
                          "uri": "data-actions/add-to-map",
                          "icon": "runtime/assets/icons/add-to-map.svg"
                      }
                  ],
                  "layouts": [
                      {
                          "name": "MapFixedLayout",
                          "label": "Map FixedLayout",
                          "type": "FIXED"
                      }
                  ],
                  "urlParameters": [
                      {
                          "name": "viewpoint",
                          "label": "Viewpoint",
                          "tooltip": "Viewpoint describes the point of view for a web map or web scene."
                      },
                      {
                          "name": "center",
                          "label": "Center"
                      },
                      {
                          "name": "scale",
                          "label": "Scale"
                      },
                      {
                          "name": "rotation",
                          "label": "Rotation"
                      },
                      {
                          "name": "layer_visibility",
                          "label": "Layer visibility"
                      }
                  ],
                  "extensions": [
                      {
                          "name": "appConfigOperations",
                          "point": "APP_CONFIG_OPERATIONS",
                          "uri": "tools/app-config-operations"
                      }
                  ],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ],
                  "i18nMessages": {
                      "_widgetLabel": "Mapa",
                      "_action_displayFeatureSet_label": "Mostrar conjunto de entidades",
                      "_action_panTo_label": "Desplazar a",
                      "_action_zoomToFeature_label": "Acercar a",
                      "_action_selectFeature_label": "Seleccionar entidad",
                      "_action_flash_label": "Destacar",
                      "_action_filter_label": "Filtrar",
                      "_action_showOnMap_label": "Mostrar en el mapa",
                      "_action_addToMap_label": "Agregar al mapa",
                      "showOnMapData": "Mostrar en datos del mapa",
                      "addedData": "datos agregados",
                      "failToAddTheDataOnMap": "Error al agregar los datos.",
                      "addToMapData": "Agregar a datos del mapa",
                      "mapCurrentRecord": "Registro actual de mapas {layerName}",
                      "_url_params_viewpoint_label": "Punto de visualización",
                      "_url_params_viewpoint_tooltip": "Viewpoint describe el punto de vista para un mapa web o una escena web.",
                      "_url_params_center_label": "Centro",
                      "_url_params_scale_label": "Escala",
                      "_url_params_rotation_label": "Rotación",
                      "_url_params_layer_visibility_label": "Visibilidad de capa"
                  }
              },
              "icon": "https://localhost:3001/experience/../widgets/arcgis/arcgis-map/icon.svg"
          },
          "widget_4": {
              "uri": "widgets/common/chart/",
              "version": "1.14.0",
              "label": "Gráfico",
              "config": {
                  "tools": {
                      "cursorEnable": true
                  },
                  "template": "column",
                  "webChart": {
                      "version": "7.3.1",
                      "id": "column",
                      "type": "chart",
                      "dataSource": {
                          "query": {
                              "groupByFieldsForStatistics": [
                                  "Año"
                              ],
                              "outStatistics": [
                                  {
                                      "statisticType": "count",
                                      "onStatisticField": "OBJECTID",
                                      "outStatisticFieldName": "count_of_OBJECTID"
                                  }
                              ],
                              "orderByFields": [
                                  "Año ASC"
                              ],
                              "where": "Subtipo_Accidente={value}"
                          }
                      },
                      "sortLabelsBy": "originalValue",
                      "rotated": false,
                      "series": [
                          {
                              "type": "barSeries",
                              "id": "",
                              "name": "",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#5E8FD0",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente=''"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Alcance",
                              "name": "Alcance",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#77B484",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Alcance'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Animal conducido o rebaño",
                              "name": "Animal conducido o rebaño",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DF6B35",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Animal conducido o rebaño'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Animales sueltos",
                              "name": "Animales sueltos",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DBCF4E",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Animales sueltos'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Barrera de paso a nivel",
                              "name": "Barrera de paso a nivel",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#41546D",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Barrera de paso a nivel'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Caida en calzada",
                              "name": "Caida en calzada",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#8257C2",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Caida en calzada'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Choque con árbol o poste",
                              "name": "Choque con árbol o poste",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#D6558B",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Choque con árbol o poste'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Choque con cuneta o bordillo",
                              "name": "Choque con cuneta o bordillo",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#5E8FD0",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Choque con cuneta o bordillo'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Choque con murete o edificio",
                              "name": "Choque con murete o edificio",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#77B484",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Choque con murete o edificio'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Choque contra barrera de seguridad",
                              "name": "Choque contra barrera de seguridad",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DF6B35",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Choque contra barrera de seguridad'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Con despeñamiento",
                              "name": "Con despeñamiento",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DBCF4E",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Con despeñamiento'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Con vuelco",
                              "name": "Con vuelco",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#41546D",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Con vuelco'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Despeñamiento",
                              "name": "Despeñamiento",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#8257C2",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Despeñamiento'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "En llano",
                              "name": "En llano",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#D6558B",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='En llano'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Frontal",
                              "name": "Frontal",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#5E8FD0",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Frontal'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Frontolateral",
                              "name": "Frontolateral",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#77B484",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Frontolateral'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Lateral",
                              "name": "Lateral",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DF6B35",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Lateral'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Múltiple o en caravana",
                              "name": "Múltiple o en caravana",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#DBCF4E",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Múltiple o en caravana'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Obstáculo  o elemento de la vía",
                              "name": "Obstáculo  o elemento de la vía",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#41546D",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Obstáculo  o elemento de la vía'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "Otro",
                              "name": "Otro",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#8257C2",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='Otro'"
                              }
                          },
                          {
                              "type": "barSeries",
                              "id": "__other-split-value__",
                              "name": "Undefined",
                              "x": "Año",
                              "y": "OBJECTID",
                              "colorType": "singleColor",
                              "stackedType": "stacked",
                              "fillSymbol": {
                                  "type": "esriSFS",
                                  "style": "esriSFSSolid",
                                  "color": "#D6D6D6",
                                  "outline": {
                                      "type": "esriSLS",
                                      "style": "esriSLSSolid",
                                      "color": "var(--light-900)",
                                      "width": 0
                                  }
                              },
                              "dataLabels": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-600)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 10,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "top"
                                  }
                              },
                              "rotated": false,
                              "dataTooltipVisible": true,
                              "query": {
                                  "where": "Subtipo_Accidente='__other-split-value__'"
                              }
                          }
                      ],
                      "axes": [
                          {
                              "type": "chartAxis",
                              "visible": true,
                              "isLogarithmic": false,
                              "title": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-800)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 14,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "middle"
                                  }
                              },
                              "labels": {
                                  "type": "chartText",
                                  "visible": true,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-500)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 14,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "middle"
                                  }
                              },
                              "valueFormat": {
                                  "type": "category",
                                  "characterLimit": 11
                              },
                              "lineSymbol": {
                                  "type": "esriSLS",
                                  "style": "esriSLSSolid",
                                  "color": "var(--light-800)",
                                  "width": 1
                              },
                              "grid": {
                                  "type": "esriSLS",
                                  "style": "esriSLSDash",
                                  "color": "var(--light-300)",
                                  "width": 0
                              }
                          },
                          {
                              "type": "chartAxis",
                              "visible": true,
                              "isLogarithmic": false,
                              "title": {
                                  "type": "chartText",
                                  "visible": false,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-800)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 14,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "middle"
                                  }
                              },
                              "labels": {
                                  "type": "chartText",
                                  "visible": true,
                                  "content": {
                                      "type": "esriTS",
                                      "color": "var(--dark-500)",
                                      "font": {
                                          "family": "Avenir Next",
                                          "size": 14,
                                          "style": "normal",
                                          "weight": "normal",
                                          "decoration": "none"
                                      },
                                      "horizontalAlignment": "center",
                                      "verticalAlignment": "middle"
                                  }
                              },
                              "valueFormat": {
                                  "type": "number",
                                  "intlOptions": {
                                      "style": "decimal",
                                      "useGrouping": true,
                                      "minimumFractionDigits": 0,
                                      "maximumFractionDigits": 0
                                  }
                              },
                              "lineSymbol": {
                                  "type": "esriSLS",
                                  "style": "esriSLSSolid",
                                  "color": "var(--light-800)",
                                  "width": 1
                              },
                              "grid": {
                                  "type": "esriSLS",
                                  "style": "esriSLSDash",
                                  "color": "var(--light-300)",
                                  "width": 0
                              }
                          }
                      ],
                      "background": "var(--white)",
                      "title": {
                          "type": "chartText",
                          "visible": true,
                          "content": {
                              "type": "esriTS",
                              "color": "var(--black)",
                              "font": {
                                  "family": "Avenir Next",
                                  "size": 24,
                                  "style": "normal",
                                  "weight": "normal",
                                  "decoration": "none"
                              },
                              "horizontalAlignment": "center",
                              "text": ""
                          }
                      },
                      "footer": {
                          "type": "chartText",
                          "visible": true,
                          "content": {
                              "type": "esriTS",
                              "color": "var(--dark-800)",
                              "font": {
                                  "family": "Avenir Next",
                                  "size": 14,
                                  "style": "normal",
                                  "weight": "normal",
                                  "decoration": "none"
                              },
                              "horizontalAlignment": "center",
                              "text": ""
                          }
                      },
                      "legend": {
                          "type": "chartLegend",
                          "visible": false,
                          "title": {
                              "type": "chartText",
                              "visible": true,
                              "content": {
                                  "type": "esriTS",
                                  "color": "var(--dark-800)",
                                  "font": {
                                      "family": "Avenir Next",
                                      "size": 20,
                                      "style": "normal",
                                      "weight": "normal",
                                      "decoration": "none"
                                  },
                                  "horizontalAlignment": "center",
                                  "text": ""
                              }
                          },
                          "body": {
                              "type": "esriTS",
                              "color": "var(--dark-800)",
                              "font": {
                                  "family": "Avenir Next",
                                  "size": 14,
                                  "style": "normal",
                                  "weight": "normal",
                                  "decoration": "none"
                              },
                              "horizontalAlignment": "center",
                              "text": ""
                          },
                          "position": "right"
                      }
                  }
              },
              "id": "widget_4",
              "useDataSources": [
                  {
                      "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                      "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                      "rootDataSourceId": "dataSource_1",
                      "fields": [
                          "Año",
                          "OBJECTID",
                          "Subtipo_Accidente"
                      ]
                  }
              ],
              "outputDataSources": [
                  "widget_4_ouput"
              ],
              "context": {
                  "isRemote": false,
                  "folderUrl": "https://localhost:3001/experience/../widgets/common/chart/"
              },
              "parent": {
                  "LARGE": [
                      {
                          "layoutId": "layout_3",
                          "layoutItemId": "1"
                      }
                  ]
              },
              "_originManifest": {
                  "name": "chart",
                  "label": "Chart",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "dependency": "jimu-arcgis",
                  "settingDependency": "jimu-arcgis",
                  "publishMessages": [
                      {
                          "messageType": "DATA_RECORDS_SELECTION_CHANGE",
                          "messageCarryData": "OUTPUT_DATA_SOURCE"
                      }
                  ],
                  "defaultSize": {
                      "width": 450,
                      "height": 300
                  },
                  "properties": {
                      "hasSettingPage": true,
                      "canConsumeDataAction": true,
                      "coverLayoutBackground": true,
                      "notAutoLoadUsedFieldsData": true
                  },
                  "excludeDataActions": [
                      "arcgis-map.*",
                      "setFilter",
                      "near-me.locate",
                      "elevation-profile.*",
                      "directions.*"
                  ],
                  "extensions": [],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ]
              },
              "manifest": {
                  "name": "chart",
                  "label": "Chart",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "dependency": "jimu-arcgis",
                  "settingDependency": "jimu-arcgis",
                  "publishMessages": [
                      {
                          "messageType": "DATA_RECORDS_SELECTION_CHANGE",
                          "messageCarryData": "OUTPUT_DATA_SOURCE"
                      }
                  ],
                  "defaultSize": {
                      "width": 450,
                      "height": 300
                  },
                  "properties": {
                      "hasSettingPage": true,
                      "canConsumeDataAction": true,
                      "coverLayoutBackground": true,
                      "notAutoLoadUsedFieldsData": true,
                      "hasVersionManager": false,
                      "supportInlineEditing": false,
                      "supportRepeat": false,
                      "hasBuilderSupportModule": false,
                      "hasEmbeddedLayout": false,
                      "lockChildren": false,
                      "flipIcon": false,
                      "canCrossLayoutBoundary": false,
                      "needActiveState": false,
                      "watchViewportVisibility": false,
                      "isWidgetController": false,
                      "hasMainClass": true,
                      "hasConfig": true,
                      "hasConfigInSettingPage": true,
                      "passDataSourceToChildren": true,
                      "deactivateOtherWidgets": true,
                      "supportAutoSize": true
                  },
                  "excludeDataActions": [
                      "arcgis-map.*",
                      "setFilter",
                      "near-me.locate",
                      "elevation-profile.*",
                      "directions.*"
                  ],
                  "extensions": [],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ],
                  "i18nMessages": {
                      "_widgetLabel": "Gráfico",
                      "bar1SeriesLimitation": "Los gráficos de barras o columnas con una serie están limitados a 10.000 barras en total. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                      "bar2SeriesLimitation": "Los gráficos de barras o columnas con dos series están limitados a 2.000 barras, o 1.000 barras por serie. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                      "bar3SeriesLimitation": "Los gráficos de barras o columnas con tres o más series están limitados a 2.000 barras, o 100 barras por serie. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                      "lineLimitation": "Los gráficos de líneas o áreas están limitados a 10.000 marcadores de valor en total y a un máximo de 100 series. Filtre o vuelva a agregar los datos e inténtelo otra vez.",
                      "pieLimitation": "No se pudo renderizar; demasiadas categorías. El gráfico circular está limitado a 300 categorías como máximo.",
                      "dataEmptyTip": "No se han encontrado datos."
                  }
              },
              "icon": "https://localhost:3001/experience/../widgets/common/chart/icon.svg"
          },
          "widget_5": {
              "uri": "widgets/common/controller/",
              "version": "1.14.0",
              "label": "Controlador de widget",
              "config": {
                  "behavior": {
                      "onlyOpenOne": true,
                      "openStarts": [],
                      "displayType": "STACK",
                      "vertical": false,
                      "size": {
                          "widget_6": {
                              "width": 648,
                              "height": 484
                          }
                      }
                  },
                  "appearance": {
                      "space": 0,
                      "advanced": false,
                      "card": {
                          "showLabel": false,
                          "labelGrowth": 10,
                          "avatar": {
                              "type": "primary",
                              "size": "default",
                              "shape": "circle"
                          }
                      }
                  }
              },
              "id": "widget_5",
              "layouts": {
                  "controller": {
                      "LARGE": "layout_5"
                  }
              },
              "context": {
                  "isRemote": false,
                  "folderUrl": "https://localhost:3001/experience/../widgets/common/controller/"
              },
              "parent": {
                  "LARGE": [
                      {
                          "layoutId": "layout_3",
                          "layoutItemId": "2"
                      }
                  ]
              },
              "_originManifest": {
                  "name": "controller",
                  "label": "Widget Controller",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "defaultSize": {
                      "height": 54,
                      "width": 200,
                      "autoWidth": true,
                      "autoHeight": true
                  },
                  "properties": {
                      "hasSettingPage": true,
                      "hasEmbeddedLayout": true,
                      "isWidgetController": true,
                      "supportAutoSize": true,
                      "useDragHandler": true,
                      "canCrossLayoutBoundary": true,
                      "hasBuilderSupportModule": true
                  },
                  "layouts": [
                      {
                          "name": "controller",
                          "label": "Controller layout",
                          "type": "FIXED"
                      }
                  ],
                  "extensions": [
                      {
                          "name": "previous",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/previous"
                      },
                      {
                          "name": "next",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/next"
                      },
                      {
                          "name": "add-widget",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/add-widget"
                      },
                      {
                          "name": "appConfigOperations",
                          "point": "APP_CONFIG_OPERATIONS",
                          "uri": "tools/app-config-operations"
                      }
                  ],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ]
              },
              "manifest": {
                  "name": "controller",
                  "label": "Widget Controller",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "defaultSize": {
                      "height": 54,
                      "width": 200,
                      "autoWidth": true,
                      "autoHeight": true
                  },
                  "properties": {
                      "hasSettingPage": true,
                      "hasEmbeddedLayout": true,
                      "isWidgetController": true,
                      "supportAutoSize": true,
                      "useDragHandler": true,
                      "canCrossLayoutBoundary": true,
                      "hasBuilderSupportModule": true,
                      "hasVersionManager": false,
                      "supportInlineEditing": false,
                      "supportRepeat": false,
                      "lockChildren": false,
                      "flipIcon": false,
                      "coverLayoutBackground": false,
                      "needActiveState": false,
                      "canConsumeDataAction": false,
                      "watchViewportVisibility": false,
                      "hasMainClass": true,
                      "hasConfig": true,
                      "hasConfigInSettingPage": true,
                      "passDataSourceToChildren": true,
                      "deactivateOtherWidgets": true
                  },
                  "layouts": [
                      {
                          "name": "controller",
                          "label": "Controller layout",
                          "type": "FIXED"
                      }
                  ],
                  "extensions": [
                      {
                          "name": "previous",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/previous"
                      },
                      {
                          "name": "next",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/next"
                      },
                      {
                          "name": "add-widget",
                          "point": "CONTEXT_TOOL",
                          "uri": "tools/add-widget"
                      },
                      {
                          "name": "appConfigOperations",
                          "point": "APP_CONFIG_OPERATIONS",
                          "uri": "tools/app-config-operations"
                      }
                  ],
                  "translatedLocales": [
                      "en",
                      "ar",
                      "bg",
                      "bs",
                      "ca",
                      "cs",
                      "da",
                      "de",
                      "el",
                      "es",
                      "et",
                      "fi",
                      "fr",
                      "he",
                      "hr",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lt",
                      "lv",
                      "nb",
                      "nl",
                      "pl",
                      "pt-br",
                      "pt-pt",
                      "ro",
                      "ru",
                      "sk",
                      "sl",
                      "sr",
                      "sv",
                      "th",
                      "tr",
                      "zh-cn",
                      "uk",
                      "vi",
                      "zh-hk",
                      "zh-tw"
                  ],
                  "i18nMessages": {
                      "_widgetLabel": "Controlador de widget"
                  }
              },
              "icon": "https://localhost:3001/experience/../widgets/common/controller/icon.svg"
          },
          "widget_6": {
              "uri": "widgets/coordendas/",
              "version": "1.12.0",
              "label": "Coordenadas",
              "config": {
                  "exampleConfigProperty": "test"
              },
              "id": "widget_6",
              "context": {
                  "isRemote": false,
                  "folderUrl": "https://localhost:3001/experience/../widgets/coordendas/"
              },
              "parent": {
                  "LARGE": [
                      {
                          "layoutId": "layout_5",
                          "layoutItemId": "0"
                      }
                  ]
              },
              "_originManifest": {
                  "name": "coordendas",
                  "label": "Coordenadas",
                  "type": "widget",
                  "version": "1.12.0",
                  "exbVersion": "1.12.0",
                  "author": "SyKgis",
                  "description": "Widget de coordenadas.",
                  "copyright": "",
                  "dependency": "jimu-arcgis",
                  "license": "http://www.apache.org/licenses/LICENSE-2.0",
                  "properties": {},
                  "translatedLocales": [
                      "es",
                      "en"
                  ],
                  "defaultSize": {
                      "width": 400,
                      "height": 400
                  }
              },
              "manifest": {
                  "name": "coordendas",
                  "label": "Coordenadas",
                  "type": "widget",
                  "version": "1.12.0",
                  "exbVersion": "1.12.0",
                  "author": "SyKgis",
                  "description": "Widget de coordenadas.",
                  "copyright": "",
                  "dependency": "jimu-arcgis",
                  "license": "http://www.apache.org/licenses/LICENSE-2.0",
                  "properties": {
                      "hasVersionManager": false,
                      "supportInlineEditing": false,
                      "supportRepeat": false,
                      "hasBuilderSupportModule": false,
                      "hasEmbeddedLayout": false,
                      "lockChildren": false,
                      "flipIcon": false,
                      "coverLayoutBackground": false,
                      "canCrossLayoutBoundary": false,
                      "needActiveState": false,
                      "canConsumeDataAction": false,
                      "watchViewportVisibility": false,
                      "isWidgetController": false,
                      "hasMainClass": true,
                      "hasConfig": true,
                      "hasSettingPage": true,
                      "hasConfigInSettingPage": true,
                      "passDataSourceToChildren": true,
                      "deactivateOtherWidgets": true,
                      "supportAutoSize": true
                  },
                  "translatedLocales": [
                      "es",
                      "en"
                  ],
                  "defaultSize": {
                      "width": 400,
                      "height": 400
                  },
                  "i18nMessages": {}
              },
              "icon": "https://localhost:3001/experience/../widgets/coordendas/icon.svg"
          },
          "widget_9": {
              "uri": "widgets/control-the-widget-state/",
              "version": "1.14.0",
              "label": "Control the Widget State",
              "config": null,
              "id": "widget_9",
              "context": {
                  "isRemote": false,
                  "folderUrl": "https://localhost:3001/experience/../widgets/control-the-widget-state/"
              },
              "parent": {
                  "LARGE": [
                      {
                          "layoutId": "layout_5",
                          "layoutItemId": "1"
                      }
                  ]
              },
              "_originManifest": {
                  "name": "control-the-widget-state",
                  "label": "Control the Widget State",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "author": "Esri R&D Center Beijing",
                  "description": "This widgets demonstrates the ability to control the widget state of another widget.",
                  "copyright": "",
                  "license": "http://www.apache.org/licenses/LICENSE-2.0",
                  "properties": {
                      "hasSettingPage": false,
                      "hasConfig": false
                  },
                  "translatedLocales": [
                      "en"
                  ],
                  "defaultSize": {
                      "width": 300,
                      "height": 300
                  }
              },
              "manifest": {
                  "name": "control-the-widget-state",
                  "label": "Control the Widget State",
                  "type": "widget",
                  "version": "1.14.0",
                  "exbVersion": "1.14.0",
                  "author": "Esri R&D Center Beijing",
                  "description": "This widgets demonstrates the ability to control the widget state of another widget.",
                  "copyright": "",
                  "license": "http://www.apache.org/licenses/LICENSE-2.0",
                  "properties": {
                      "hasSettingPage": false,
                      "hasConfig": false,
                      "hasVersionManager": false,
                      "supportInlineEditing": false,
                      "supportRepeat": false,
                      "hasBuilderSupportModule": false,
                      "hasEmbeddedLayout": false,
                      "lockChildren": false,
                      "flipIcon": false,
                      "coverLayoutBackground": false,
                      "canCrossLayoutBoundary": false,
                      "needActiveState": false,
                      "canConsumeDataAction": false,
                      "watchViewportVisibility": false,
                      "isWidgetController": false,
                      "hasMainClass": true,
                      "hasConfigInSettingPage": true,
                      "passDataSourceToChildren": true,
                      "deactivateOtherWidgets": true,
                      "supportAutoSize": true
                  },
                  "translatedLocales": [
                      "en"
                  ],
                  "defaultSize": {
                      "width": 300,
                      "height": 300
                  },
                  "i18nMessages": {}
              },
              "icon": "https://localhost:3001/experience/../widgets/control-the-widget-state/icon.svg"
          }
      },
      "widgetsManifest": {},
      "views": {},
      "sections": {},
      "dialogs": {},
      "dataSources": {
          "dataSource_1": {
              "id": "dataSource_1",
              "type": "WEB_MAP",
              "sourceLabel": "Web Map Pruebas-Copia",
              "itemId": "5ef68bc6848a4d9fb253177ce47637ca",
              "portalUrl": "https://Dair.maps.arcgis.com"
          },
          "widget_4_ouput": {
              "id": "widget_4_ouput",
              "type": "FEATURE_LAYER",
              "label": "Estadísticas de Gráfico",
              "originDataSources": [
                  {
                      "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                      "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                      "rootDataSourceId": "dataSource_1"
                  }
              ],
              "isOutputFromWidget": true,
              "isDataInDataSourceInstance": true,
              "schema": {
                  "idField": "__outputid__",
                  "label": "Estadísticas de Gráfico",
                  "fields": {
                      "__outputid__": {
                          "jimuName": "__outputid__",
                          "alias": "OBJECTID",
                          "type": "NUMBER",
                          "name": "__outputid__"
                      },
                      "Año": {
                          "jimuName": "Año",
                          "name": "Año",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeDouble",
                          "alias": "Año",
                          "format": {
                              "digitSeparator": true,
                              "places": 0
                          },
                          "originFields": [
                              "Año"
                          ]
                      },
                      "count_of_OBJECTID_of_": {
                          "jimuName": "count_of_OBJECTID_of_",
                          "name": "count_of_OBJECTID_of_",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of ",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Alcance": {
                          "jimuName": "count_of_OBJECTID_of_Alcance",
                          "name": "count_of_OBJECTID_of_Alcance",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Alcance",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Animal conducido o rebaño": {
                          "jimuName": "count_of_OBJECTID_of_Animal conducido o rebaño",
                          "name": "count_of_OBJECTID_of_Animal conducido o rebaño",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Animal conducido o rebaño",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Animales sueltos": {
                          "jimuName": "count_of_OBJECTID_of_Animales sueltos",
                          "name": "count_of_OBJECTID_of_Animales sueltos",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Animales sueltos",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Barrera de paso a nivel": {
                          "jimuName": "count_of_OBJECTID_of_Barrera de paso a nivel",
                          "name": "count_of_OBJECTID_of_Barrera de paso a nivel",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Barrera de paso a nivel",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Caida en calzada": {
                          "jimuName": "count_of_OBJECTID_of_Caida en calzada",
                          "name": "count_of_OBJECTID_of_Caida en calzada",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Caida en calzada",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Choque con árbol o poste": {
                          "jimuName": "count_of_OBJECTID_of_Choque con árbol o poste",
                          "name": "count_of_OBJECTID_of_Choque con árbol o poste",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Choque con árbol o poste",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Choque con cuneta o bordillo": {
                          "jimuName": "count_of_OBJECTID_of_Choque con cuneta o bordillo",
                          "name": "count_of_OBJECTID_of_Choque con cuneta o bordillo",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Choque con cuneta o bordillo",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Choque con murete o edificio": {
                          "jimuName": "count_of_OBJECTID_of_Choque con murete o edificio",
                          "name": "count_of_OBJECTID_of_Choque con murete o edificio",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Choque con murete o edificio",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Choque contra barrera de seguridad": {
                          "jimuName": "count_of_OBJECTID_of_Choque contra barrera de seguridad",
                          "name": "count_of_OBJECTID_of_Choque contra barrera de seguridad",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Choque contra barrera de seguridad",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Con despeñamiento": {
                          "jimuName": "count_of_OBJECTID_of_Con despeñamiento",
                          "name": "count_of_OBJECTID_of_Con despeñamiento",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Con despeñamiento",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Con vuelco": {
                          "jimuName": "count_of_OBJECTID_of_Con vuelco",
                          "name": "count_of_OBJECTID_of_Con vuelco",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Con vuelco",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Despeñamiento": {
                          "jimuName": "count_of_OBJECTID_of_Despeñamiento",
                          "name": "count_of_OBJECTID_of_Despeñamiento",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Despeñamiento",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_En llano": {
                          "jimuName": "count_of_OBJECTID_of_En llano",
                          "name": "count_of_OBJECTID_of_En llano",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of En llano",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Frontal": {
                          "jimuName": "count_of_OBJECTID_of_Frontal",
                          "name": "count_of_OBJECTID_of_Frontal",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Frontal",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Frontolateral": {
                          "jimuName": "count_of_OBJECTID_of_Frontolateral",
                          "name": "count_of_OBJECTID_of_Frontolateral",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Frontolateral",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Lateral": {
                          "jimuName": "count_of_OBJECTID_of_Lateral",
                          "name": "count_of_OBJECTID_of_Lateral",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Lateral",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Múltiple o en caravana": {
                          "jimuName": "count_of_OBJECTID_of_Múltiple o en caravana",
                          "name": "count_of_OBJECTID_of_Múltiple o en caravana",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Múltiple o en caravana",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Obstáculo  o elemento de la vía": {
                          "jimuName": "count_of_OBJECTID_of_Obstáculo  o elemento de la vía",
                          "name": "count_of_OBJECTID_of_Obstáculo  o elemento de la vía",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Obstáculo  o elemento de la vía",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Otro": {
                          "jimuName": "count_of_OBJECTID_of_Otro",
                          "name": "count_of_OBJECTID_of_Otro",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Otro",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Otro objeto o material": {
                          "jimuName": "count_of_OBJECTID_of_Otro objeto o material",
                          "name": "count_of_OBJECTID_of_Otro objeto o material",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Otro objeto o material",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Otro tipo de choque": {
                          "jimuName": "count_of_OBJECTID_of_Otro tipo de choque",
                          "name": "count_of_OBJECTID_of_Otro tipo de choque",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Otro tipo de choque",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Peatón aislado": {
                          "jimuName": "count_of_OBJECTID_of_Peatón aislado",
                          "name": "count_of_OBJECTID_of_Peatón aislado",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Peatón aislado",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Peatón aislado o en grupo": {
                          "jimuName": "count_of_OBJECTID_of_Peatón aislado o en grupo",
                          "name": "count_of_OBJECTID_of_Peatón aislado o en grupo",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Peatón aislado o en grupo",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Peatón reparando vehículo": {
                          "jimuName": "count_of_OBJECTID_of_Peatón reparando vehículo",
                          "name": "count_of_OBJECTID_of_Peatón reparando vehículo",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Peatón reparando vehículo",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Peatón sosteniendo bicicleta": {
                          "jimuName": "count_of_OBJECTID_of_Peatón sosteniendo bicicleta",
                          "name": "count_of_OBJECTID_of_Peatón sosteniendo bicicleta",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Peatón sosteniendo bicicleta",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Sólo Salida de Vía": {
                          "jimuName": "count_of_OBJECTID_of_Sólo Salida de Vía",
                          "name": "count_of_OBJECTID_of_Sólo Salida de Vía",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Sólo Salida de Vía",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Valla de defensa": {
                          "jimuName": "count_of_OBJECTID_of_Valla de defensa",
                          "name": "count_of_OBJECTID_of_Valla de defensa",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Valla de defensa",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Vehículo estacionado/averiado": {
                          "jimuName": "count_of_OBJECTID_of_Vehículo estacionado/averiado",
                          "name": "count_of_OBJECTID_of_Vehículo estacionado/averiado",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Vehículo estacionado/averiado",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      },
                      "count_of_OBJECTID_of_Vuelco en la calzada": {
                          "jimuName": "count_of_OBJECTID_of_Vuelco en la calzada",
                          "name": "count_of_OBJECTID_of_Vuelco en la calzada",
                          "type": "NUMBER",
                          "esriType": "esriFieldTypeOID",
                          "alias": "Count of OBJECTID of Vuelco en la calzada",
                          "format": {
                              "digitSeparator": false,
                              "places": 0
                          },
                          "originFields": [
                              "OBJECTID",
                              "Subtipo_Accidente"
                          ]
                      }
                  }
              }
          }
      },
      "messageConfigs": {
          "messageConfig_1": {
              "id": "messageConfig_1",
              "widgetId": "widget_4",
              "messageType": "DATA_RECORDS_SELECTION_CHANGE",
              "actions": [
                  {
                      "actionId": "widget_3-filter-1713336630458",
                      "widgetId": "widget_3",
                      "messageWidgetId": "widget_4",
                      "actionName": "filter",
                      "description": null,
                      "config": {
                          "messageUseDataSource": {
                              "dataSourceId": "widget_4_ouput",
                              "mainDataSourceId": "widget_4_ouput",
                              "rootDataSourceId": null,
                              "fields": [
                                  "__outputid__"
                              ]
                          },
                          "actionUseDataSource": {
                              "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                              "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                              "rootDataSourceId": "dataSource_1",
                              "fields": [
                                  "OBJECTID"
                              ]
                          },
                          "sqlExprObj": null,
                          "enabledDataRelationShip": true
                      },
                      "version": "1.14.0",
                      "useDataSources": [
                          {
                              "dataSourceId": "widget_4_ouput",
                              "mainDataSourceId": "widget_4_ouput",
                              "rootDataSourceId": null,
                              "fields": [
                                  "__outputid__"
                              ]
                          },
                          {
                              "dataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                              "mainDataSourceId": "dataSource_1-AccidentesSeys_1709_5211",
                              "rootDataSourceId": "dataSource_1",
                              "fields": [
                                  "OBJECTID"
                              ]
                          }
                      ]
                  }
              ]
          }
      },
      "attributes": {
          "portalUrl": "https://Dair.maps.arcgis.com"
      },
      "sharedThemeVariables": null,
      "originExbVersion": "1.14.0",
      "pageStructure": [
          {
              "page_1": []
          }
      ],
      "header": {
          "layout": {
              "LARGE": "layout_1"
          },
          "height": {
              "LARGE": 75
          }
      },
      "timestamp": 1713336686880
  }
    //appC = config
    //console.log(appC)
    setNewAppConfig(config)
  }, [])

  useEffect(() => {
    console.log(getAppStore().getState().appConfig)
    console.log(appActions)
  }, [campo])

  useEffect(() => {
    const widgets = getAppStore().getState().appConfig.widgets
    setAppWidgets(widgets)
    setChartWidgetId('widget_4')
  }, [])

  // Update the widgetsArray and sidebarWidgetsArray properties every time appWidgets changes
  useEffect(() => {
    if (appWidgets) {
      const widgetsArray = Object.values(appWidgets)
      setChartWidgetsArray(widgetsArray.filter(w => w.uri === 'widgets/common/chart/'))
      // console.log(appWidgets)
    }
  }, [appWidgets])

  const handleChart = () => {
    const config = {
      "tools": {
          "cursorEnable": true
      },
      "template": "column",
      "webChart": {
          "version": "7.3.1",
          "id": "column",
          "type": "chart",
          "dataSource": {
              "query": {
                  "groupByFieldsForStatistics": [
                      "Año"
                  ],
                  "outStatistics": [
                      {
                          "statisticType": "count",
                          "onStatisticField": "OBJECTID",
                          "outStatisticFieldName": "count_of_OBJECTID"
                      }
                  ],
                  "orderByFields": [
                      "Año ASC"
                  ],
                  "where": "Subtipo_Accidente={value}"
              }
          },
          "sortLabelsBy": "originalValue",
          "rotated": false,
          "series": [
              {
                  "type": "barSeries",
                  "id": "",
                  "name": "",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#5E8FD0",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente=''"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Alcance",
                  "name": "Alcance",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#77B484",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Alcance'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Animal conducido o rebaño",
                  "name": "Animal conducido o rebaño",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DF6B35",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Animal conducido o rebaño'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Animales sueltos",
                  "name": "Animales sueltos",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DBCF4E",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Animales sueltos'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Barrera de paso a nivel",
                  "name": "Barrera de paso a nivel",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#41546D",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Barrera de paso a nivel'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Caida en calzada",
                  "name": "Caida en calzada",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#8257C2",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Caida en calzada'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Choque con árbol o poste",
                  "name": "Choque con árbol o poste",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#D6558B",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Choque con árbol o poste'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Choque con cuneta o bordillo",
                  "name": "Choque con cuneta o bordillo",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#5E8FD0",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Choque con cuneta o bordillo'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Choque con murete o edificio",
                  "name": "Choque con murete o edificio",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#77B484",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Choque con murete o edificio'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Choque contra barrera de seguridad",
                  "name": "Choque contra barrera de seguridad",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DF6B35",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Choque contra barrera de seguridad'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Con despeñamiento",
                  "name": "Con despeñamiento",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DBCF4E",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Con despeñamiento'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Con vuelco",
                  "name": "Con vuelco",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#41546D",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Con vuelco'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Despeñamiento",
                  "name": "Despeñamiento",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#8257C2",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Despeñamiento'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "En llano",
                  "name": "En llano",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#D6558B",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='En llano'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Frontal",
                  "name": "Frontal",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#5E8FD0",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Frontal'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Frontolateral",
                  "name": "Frontolateral",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#77B484",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Frontolateral'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Lateral",
                  "name": "Lateral",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DF6B35",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Lateral'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Múltiple o en caravana",
                  "name": "Múltiple o en caravana",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#DBCF4E",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Múltiple o en caravana'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Obstáculo  o elemento de la vía",
                  "name": "Obstáculo  o elemento de la vía",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#41546D",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Obstáculo  o elemento de la vía'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "Otro",
                  "name": "Otro",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#8257C2",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='Otro'"
                  }
              },
              {
                  "type": "barSeries",
                  "id": "__other-split-value__",
                  "name": "Undefined",
                  "x": "Año",
                  "y": "OBJECTID",
                  "colorType": "singleColor",
                  "stackedType": "stacked",
                  "fillSymbol": {
                      "type": "esriSFS",
                      "style": "esriSFSSolid",
                      "color": "#D6D6D6",
                      "outline": {
                          "type": "esriSLS",
                          "style": "esriSLSSolid",
                          "color": "var(--light-900)",
                          "width": 0
                      }
                  },
                  "dataLabels": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-600)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 10,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "top"
                      }
                  },
                  "rotated": false,
                  "dataTooltipVisible": true,
                  "query": {
                      "where": "Subtipo_Accidente='__other-split-value__'"
                  }
              }
          ],
          "axes": [
              {
                  "type": "chartAxis",
                  "visible": true,
                  "isLogarithmic": false,
                  "title": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-800)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 14,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "middle"
                      }
                  },
                  "labels": {
                      "type": "chartText",
                      "visible": true,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-500)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 14,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "middle"
                      }
                  },
                  "valueFormat": {
                      "type": "category",
                      "characterLimit": 11
                  },
                  "lineSymbol": {
                      "type": "esriSLS",
                      "style": "esriSLSSolid",
                      "color": "var(--light-800)",
                      "width": 1
                  },
                  "grid": {
                      "type": "esriSLS",
                      "style": "esriSLSDash",
                      "color": "var(--light-300)",
                      "width": 0
                  }
              },
              {
                  "type": "chartAxis",
                  "visible": true,
                  "isLogarithmic": false,
                  "title": {
                      "type": "chartText",
                      "visible": false,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-800)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 14,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "middle"
                      }
                  },
                  "labels": {
                      "type": "chartText",
                      "visible": true,
                      "content": {
                          "type": "esriTS",
                          "color": "var(--dark-500)",
                          "font": {
                              "family": "Avenir Next",
                              "size": 14,
                              "style": "normal",
                              "weight": "normal",
                              "decoration": "none"
                          },
                          "horizontalAlignment": "center",
                          "verticalAlignment": "middle"
                      }
                  },
                  "valueFormat": {
                      "type": "number",
                      "intlOptions": {
                          "style": "decimal",
                          "useGrouping": true,
                          "minimumFractionDigits": 0,
                          "maximumFractionDigits": 0
                      }
                  },
                  "lineSymbol": {
                      "type": "esriSLS",
                      "style": "esriSLSSolid",
                      "color": "var(--light-800)",
                      "width": 1
                  },
                  "grid": {
                      "type": "esriSLS",
                      "style": "esriSLSDash",
                      "color": "var(--light-300)",
                      "width": 0
                  }
              }
          ],
          "background": "var(--white)",
          "title": {
              "type": "chartText",
              "visible": true,
              "content": {
                  "type": "esriTS",
                  "color": "var(--black)",
                  "font": {
                      "family": "Avenir Next",
                      "size": 24,
                      "style": "normal",
                      "weight": "normal",
                      "decoration": "none"
                  },
                  "horizontalAlignment": "center",
                  "text": ""
              }
          },
          "footer": {
              "type": "chartText",
              "visible": true,
              "content": {
                  "type": "esriTS",
                  "color": "var(--dark-800)",
                  "font": {
                      "family": "Avenir Next",
                      "size": 14,
                      "style": "normal",
                      "weight": "normal",
                      "decoration": "none"
                  },
                  "horizontalAlignment": "center",
                  "text": ""
              }
          },
          "legend": {
              "type": "chartLegend",
              "visible": false,
              "title": {
                  "type": "chartText",
                  "visible": true,
                  "content": {
                      "type": "esriTS",
                      "color": "var(--dark-800)",
                      "font": {
                          "family": "Avenir Next",
                          "size": 20,
                          "style": "normal",
                          "weight": "normal",
                          "decoration": "none"
                      },
                      "horizontalAlignment": "center",
                      "text": ""
                  }
              },
              "body": {
                  "type": "esriTS",
                  "color": "var(--dark-800)",
                  "font": {
                      "family": "Avenir Next",
                      "size": 14,
                      "style": "normal",
                      "weight": "normal",
                      "decoration": "none"
                  },
                  "horizontalAlignment": "center",
                  "text": ""
              },
              "position": "right"
          }
      }
    }
    
    getAppStore().dispatch(appActions.widgetConfigLoaded(
      'widget_4', 
      config
    ))
  }

  function handleField (evt) {
    setCampo(evt.value)
  }

  return (
    <div>
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
      )}
      <div>
        <select name="Seleccionable" id="Seleccionable" onChange={handleField}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div>
        <button onClick={handleChart}>Cambiar gráfico</button>
      </div>
      <div>
        <p>
          Escala: {escala}
        </p>
        <p>
          Zoom: {zoom}
        </p>
      </div>
    </div>
  )
}
