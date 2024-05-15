import { DocumentDataProps } from '@/api/fetchDocuments';

export interface PopupCookieProps {
  data: {
    popupCookie: {
      text: string;
      text1: string;
      linkText: string;
      href: string;
    };
  };
  modal: {
    button: {
      label: string;
    };
  };
  document: DocumentDataProps;
}
