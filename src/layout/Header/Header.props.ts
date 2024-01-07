import { Locale } from '@/i18n.config';

export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
    headerButton: { name: string };
    headerLanguageLabel: { name: string };
    headerLanguageName: { name: string };
  };
  lang: Locale;
  modal: {
    button: {
      label: string;
    };
  };
}
