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
      <div className="flex h-[98vh] w-full flex-col items-center justify-center lg:h-[800px] ">
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
