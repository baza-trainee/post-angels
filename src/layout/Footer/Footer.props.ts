import { Locale } from '@/i18n.config';

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
}
