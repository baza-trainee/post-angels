import { DocumentDataProps } from '@/api/fetchDocuments';

export interface PopupCookieProps {
  data: {
    popupCookie: {
      text: string;
      text1: string;
      linkText: string;
      href: string;
      button_text: {
        yes: string;
        no: string;
      };
    };
  };
  modal: {
    button: {
      label: string;
    };
  };
  document: DocumentDataProps;
}
