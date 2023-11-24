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
    }[];
    footerCop: {
      name: string;
    };
  };
  lang: Locale;
}
