'use client';
import { RefObject, useEffect, useRef, useState } from 'react';
import { PDFViewProps } from './PDFView.props';

import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

export const PDFView: React.FC<PDFViewProps> = ({ document }) => {
  const docs = Array.isArray(document)
    ? document.map(doc => ({ uri: require(`../../../public/docs/${document}`) }))
    : [{ uri: require(`../../../public/docs/${document}`) }];

  const [width, setWidth] = useState<number>(0);

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
    <div>
      <div className="flex flex-col items-center justify-center" ref={pdfWrapperRef}>
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          config={{
            pdfZoom: {
              defaultZoom: 4,
              zoomJump: 0.1,
            },
          }}
        />
      </div>
    </div>
  );
};
