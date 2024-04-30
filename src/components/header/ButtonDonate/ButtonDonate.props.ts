import { Locale } from '@/i18n.config';

export interface ButtonDonateProps {
  buttonClassName?: string;
  lang: Locale;
  headerButton: {
    name: string;
  };
  modal: {
    button: {
      label: string;
    };
  };
}
