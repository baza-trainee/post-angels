import { Locale } from '@/i18n.config';

export interface MobileNavProps {
  lang: Locale;
  headerNav: { name: string; href: string }[];
  headerButton: {
    name: string;
  };
  headerLanguageLabel: {
    name: string;
  };
  headerLanguageName: { name: string };
  modal: {
    button: {
      label: string;
    };
  };
}
