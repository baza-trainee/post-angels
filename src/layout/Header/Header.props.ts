import { Locale } from '@/i18n.config';

export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
    buttons: {
      headerButton: { name: string };
      headerLanguageLabel: { name: string };
      headerLanguageName: { name: string };
      menuOpen: {
        label: string;
      };
      menuClose: {
        label: string;
      };
    };
  };
  lang: Locale;
  transparent?: boolean;
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
