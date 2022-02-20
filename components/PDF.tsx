import { FC, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'
import workerSrc from '../pdf-worker'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

type Props = {
  src: string
  className?: string
}

const PDF: FC<Props> = ({ src, className }) => {
  const [numPages, setNumPages] = useState(0)

  const onLoad = (pdf: PDFDocumentProxy) => {
    setNumPages(pdf.numPages)
  }

  return (
    <Document file={src} onLoadSuccess={onLoad} className={className}>
      {Array.from({ length: numPages }, (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page"
        />
      ))}
    </Document>
  )
}

export default PDF
