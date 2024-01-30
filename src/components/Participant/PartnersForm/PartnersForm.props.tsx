import { Locale } from '@/i18n.config';

export interface PartnersFormProps {
  // lang: Locale;
  inputFields: {
    type: string;
    name: string;
    title: string;
    placeholder: string;
  }[],
  waysSupport: {
    name: string;
    title: string;
    placeholder: string;
    options: {
    value: string;
    label: string;
  }[],
  },
  ourOffer: {
    name: string;
    title: string;
    placeholder: string;
  },
  descriptionTermsAgreement: {
    name: string;
    description: string;
  },
  coreMsg: string;
}
