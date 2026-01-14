import { React, type AllWidgetProps, getAppStore, appActions } from 'jimu-core'
import { type IMConfig } from '../config'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const canvas = document.querySelector('canvas')
  const image = canvas.toDataURL('image/png')

  
  // console.log(dataURL)
  // const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true })
  const generatePDF = () => {
    // console.log(getAppStore().getState().appConfig)
    // // Crear un nuevo documento PDF
    // const pdf = new jsPDF()

    // // Agregar la imagen al PDF
    // pdf.addImage(image, 'PNG', 10, 10, 100, 100) // Ajusta las coordenadas y dimensiones según tu diseño

    // // Guardar o mostrar el documento PDF
    // pdf.save('mapa.pdf')
    console.log(canvas)
    html2canvas(canvas, {
      useCORS: true,
      logging: true,
      allowTaint: true,
      onclone: (clonedDoc) => {
        // Asegurarse de que los estilos necesarios estén presentes
        clonedDoc.getElementById('canvas')
      }
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        let imgHeight = canvas.height * pdfWidth / canvas.width
        let heightLeft = imgHeight

        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
        heightLeft -= pdfHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
          heightLeft -= pdfHeight
        }

        pdf.save('informe.pdf')
      })
      .catch((error) => {
        console.error('Error generating PDF:', error)
      })
  }
  return (
    <div>
      <button onClick={generatePDF}>Generar Informe PDF</button>
    </div>
  )
}

export default Widget
