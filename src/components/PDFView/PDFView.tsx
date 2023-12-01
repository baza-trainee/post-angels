'use client';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf1 from '../../../public/docs/policy.pdf';
import pdf2 from '../../../public/docs/statut.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

// import { PDFViewProps } from './PDFView.props';

// import pdf from '../../../public/docs/policy.pdf';
// import pdf from './policy.pdf';

//  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// 'pdfjs-dist/legacy/build/pdf.worker.min.js',
//    import.meta.url,
//  ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PDFView: React.FC<PDFViewProps> = ({ document }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };
  const pdfWrapperRef = useRef<HTMLDivElement | null>(null) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const getWidth = () => pdfWrapperRef?.current?.getBoundingClientRect()?.width || 0;

    setWidth(getWidth());

    const handleResize = () => {
      setWidth(getWidth());
    };

    if (pdfWrapperRef?.current) {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pdfWrapperRef]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start " ref={pdfWrapperRef}>
      <Document
        options={options}
        className="flex w-full flex-col items-center justify-center p-5 "
        file={document === 'policy' ? pdf2 : pdf1}
        onLoadSuccess={onDocumentLoadSuccess}
        error={<div className="text-3xl font-bold">Error loading PDF</div>}
      >
        {[...Array(numPages)].map((ell, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={width}
            scale={6}
          ></Page>
        ))}
      </Document>
    </div>
  );
};

export default PDFView;
