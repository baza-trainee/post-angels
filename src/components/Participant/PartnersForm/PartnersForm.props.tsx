import { Locale } from '@/i18n.config';

export interface PartnersFormProps {
  lang: Locale;
  errorObject?: {
    response: {
      status: number;
    };
    message: string;
  };
  inputFields: {
    type: string;
    name: string;
    title: string;
    placeholder: string;
  }[];
  waysSupport: {
    name: string;
    title: string;
    placeholder: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  ourOffer: {
    name: string;
    title: string;
    placeholder: string;
  };
  descriptionTermsAgreement: {
    name: string;
    description: string;
  };
  coreMsg: string;
  buttonText: string;
  schema: {
    name: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  surname: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  city: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  email: {
    errorType: string;
    errorRequired: string;
    errorLength: string;
  };
  phone: {
    errorType: string;
    errorRequired: string;
    errorLength: string;
  };
  companyName: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  EDRPOU: {
    errorRequired: string;
    errorLength: string;
  };
  waysSupport: {
    errorRequired: string;
  };
  ourOffer: {
    errorType: string;
  };
  descriptionTermsAgreement: {
    errorRequired: string;
  };
  };
  notice: {
    success: string;
    fail: string;
  };
}

export interface PartnersDataFormProps {
  name: string;
  email: string;
  phone: string;
  lastName: string;
  city: string;
  partnerOrgTitle: string;
  EDRPOU: string;
  supportMethods: string;
  ourOffer: string;
}

export interface SchemaTypes {
  name: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  surname: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  city: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  email: {
    errorType: string;
    errorRequired: string;
    errorLength: string;
  };
  phone: {
    errorType: string;
    errorRequired: string;
    errorLength: string;
  };
  companyName: {
    errorRequired: string;
    errorLength: string;
    errorType: string;
  };
  EDRPOU: {
    errorRequired: string;
    errorLength: string;
  };
  waysSupport: {
    errorRequired: string;
  };
  ourOffer: {
    errorType: string;
  };
  descriptionTermsAgreement: {
    errorRequired: string;
  };
}

export interface ErrorObject {
  response: {
    status: number;
  };
  message: string;
}

export interface CreatePartnerResponse {
  createPartner: {
    data: {
      id: string;
    };
  };
}
