import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { PDFViewProps } from './PDFView.props';

export const PDFView: React.FC<PDFViewProps> = ({ documents }) => {
  const docs = Array.isArray(documents)
    ? documents.map(doc => ({
        uri: doc.attributes.src.data[0].attributes.url,
      }))
    : [{ uri: documents.attributes.src.data[0].attributes.url }];

  return (
    <div>
      <div className="flex w-[320px] flex-col items-center justify-center sm:w-[450px] md:w-[680px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] 3xl:w-[1800px]">
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          config={{
            pdfVerticalScrollByDefault: true,
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: false,
            },
          }}
        />
      </div>
    </div>
  );
};
