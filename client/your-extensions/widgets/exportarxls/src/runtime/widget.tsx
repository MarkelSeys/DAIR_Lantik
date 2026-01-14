/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  DataSourceManager,
  type QueriableDataSource,
  DataSourceStatus,
  type DataRecord
} from 'jimu-core'
import { Button, Alert } from 'jimu-ui'
import * as XLSX from 'xlsx'
import { type IMConfig } from '../config'

interface State {
  exporting: boolean
  error?: string
  progress: number | null // 0–100
}

// ID del data source de Accidentes
const ACCIDENTES_DATASOURCE_ID = 'dataSource_1-AccidentesSeys_1709_5211'

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, State> {
  state: State = {
    exporting: false,
    error: undefined,
    progress: null
  }

  private progressTimer: number | null = null

  componentWillUnmount (): void {
    if (this.progressTimer != null) {
      window.clearInterval(this.progressTimer)
    }
  }

  // Barra de progreso "fake"
  private startProgress = (): void => {
    if (this.progressTimer != null) {
      window.clearInterval(this.progressTimer)
    }

    this.setState({ progress: 5 })

    this.progressTimer = window.setInterval(() => {
      this.setState((prev) => {
        const current = prev.progress ?? 0
        const next = current >= 90 ? 90 : current + 5
        return { ...prev, progress: next }
      })
    }, 300) as unknown as number
  }

  private stopProgress = (success: boolean): void => {
    if (this.progressTimer != null) {
      window.clearInterval(this.progressTimer)
      this.progressTimer = null
    }

    this.setState({ progress: success ? 100 : 0 })

    if (success) {
      window.setTimeout(() => {
        this.setState({ progress: null })
      }, 800)
    }
  }

  // Construye una query de exportación a partir de los filtros actuales
  private buildExportQuery (ds: QueriableDataSource) {
    const schema = ds.getSchema()
    const fieldNames = Object.keys(schema.fields || {})

    const currentQuery = ds.getCurrentQueryParams() || {}

    const query: any = {
      ...currentQuery,
      pageSize: currentQuery?.pageSize ?? 10000,
      // ¡clave! siempre pedimos todos los campos del datasource
      outFields: fieldNames
    }

    // Si algún widget ha metido estadísticas o groupBy, los quitamos:
    delete query.outStatistics
    delete query.groupByFieldsForStatistics

    return { query, fieldNames }
  }

  private exportToExcel = async (): Promise<void> => {
    const ds = DataSourceManager.getInstance().getDataSource(
      ACCIDENTES_DATASOURCE_ID
    ) as QueriableDataSource

    if (!ds) {
      this.setState({
        error: `No se ha encontrado el data source con id ${ACCIDENTES_DATASOURCE_ID}.`
      })
      return
    }

    this.setState({ exporting: true, error: undefined })
    this.startProgress()

    try {
      if (ds.getStatus() === DataSourceStatus.NotReady) {
        await ds.ready()
      }

      const { query, fieldNames } = this.buildExportQuery(ds)

      const result = await ds.query(query)
      const records: DataRecord[] = result?.records ?? []

      if (!records.length) {
        this.stopProgress(false)
        this.setState({
          exporting: false,
          error: 'No hay registros que exportar con los filtros actuales.'
        })
        return
      }

      const data = records.map((r) => {
        const row: Record<string, unknown> = {}
        fieldNames.forEach((fieldName) => {
          row[fieldName] = r.getFieldValue(fieldName)
        })
        return row
      })

      const worksheet = XLSX.utils.json_to_sheet(data, { header: fieldNames })
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos')

      const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
      const blob = new Blob([wbout], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Accidentes.xlsx'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      this.stopProgress(true)
      this.setState({ exporting: false })
    } catch (e) {
      console.error('Error exportando a Excel', e)
      this.stopProgress(false)
      this.setState({
        exporting: false,
        error: 'Error exportando datos. Revisa la consola del navegador para más detalles.'
      })
    }
  }

  private renderContent (): JSX.Element {
    const { exporting, error, progress } = this.state

    // Tamaños responsive basados en width del viewport:
    // - Mínimo en px para que no se haga diminuto
    // - Valor "normal" en vw para que escale
    // - Máximo en px para que no sea gigantesco en pantallas muy grandes
    const buttonSize = 'clamp(26px, 2.5vw, 42px)'  // círculo exterior
    const logoSize = 'clamp(20px, 2vw, 32px)'      // cuadrado verde
    const barWidth = logoSize
    const barHeight = 'clamp(3px, 0.35vw, 6px)'

    return (
      <div className='jimu-widget d-flex flex-column align-items-center justify-content-center'>
        {/* Botón circular con logo Excel */}
        <Button
          type='default'
          onClick={this.exportToExcel}
          disabled={exporting}
          style={{
            width: buttonSize,
            height: buttonSize,
            borderRadius: '50%',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            cursor: exporting ? 'default' : 'pointer'
          }}
          title={exporting ? 'Exportando a Excel…' : 'Exportar a Excel'}
        >
          {/* Logo Excel verde */}
          <span
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: 6,
              backgroundColor: '#107C41', // verde Excel
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
          >
            X
          </span>
        </Button>

        {/* Solo barra de progreso (sin texto) debajo del logo */}
        {(exporting || progress != null) && (
          <div
            style={{
              marginTop: '0.2rem',
              display: 'flex',
              justifyContent: 'center',
              width: buttonSize // ancho del botón (la barra va centrada dentro)
            }}
          >
            <div
              style={{
                width: barWidth, // mismo ancho que el logo
                height: barHeight,
                borderRadius: 2,
                background: 'rgba(0, 0, 0, 0.08)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${progress ?? 0}%`,
                  height: '100%',
                  background: '#007AC2', // barra azul
                  transition: 'width 0.2s linear'
                }}
              />
            </div>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <div className='mt-2'>
            <Alert
              form='feedback'
              type='error'
              text={error}
            />
          </div>
        )}
      </div>
    )
  }

  render (): JSX.Element {
    return this.renderContent()
  }
}
