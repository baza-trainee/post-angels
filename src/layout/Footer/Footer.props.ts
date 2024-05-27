import { DocumentDataProps } from '@/api/fetchDocuments';
import { Locale } from '@/i18n.config';
import { ReactNode } from 'react';

export interface FooterProps {
  data: {
    footerNav: {
      name: string;
      href: string;
    }[];
    footerDoc: {
      name: string;
      href: string;
      doc?: string;
    }[];
    footerCop: {
      name: string;
    };
  };

  modal: {
    button: {
      label: string;
    };
  };
  logo: {
    label: string;
    href: string;
  };
  documents: DocumentDataProps[];
  className?:string
}
