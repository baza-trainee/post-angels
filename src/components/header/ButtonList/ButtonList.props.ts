import { Locale } from '@/i18n.config';

export interface ButtonListProps {
  lang: Locale;
  headerButton: {
    name: string;
  };
  headerLanguageLabel: {
    name: string;
  };
  modal: {
    button: {
      label: string;
    };
  };
}
