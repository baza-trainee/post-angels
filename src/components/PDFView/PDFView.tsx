import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { PDFViewProps } from './PDFView.props';


export const PDFView: React.FC<PDFViewProps> = ({ document }) => {
  const docs = Array.isArray(document)
    ? document.map(doc => ({
        uri: require(`../../../public/docs/${doc}`),
      }))
    : [{ uri: require(`../../../public/docs/${document}`) }];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
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
