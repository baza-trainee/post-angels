import { Locale } from '@/i18n.config';

export interface MobileNavProps {
  lang: Locale;
  headerNav: { name: string; href: string }[];
  buttons: {
    headerButton: {
      name: string;
    };
    headerLanguageLabel: {
      name: string;
    };
    headerLanguageName: { name: string };
    menuOpen: { label: string };
    menuClose: { label: string };
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
