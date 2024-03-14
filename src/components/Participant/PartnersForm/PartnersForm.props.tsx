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
      errorMin: string;
    };
    surname: {
      errorRequired: string;
      errorMin: string;
    };
    city: {
      errorRequired: string;
      errorMin: string;
    };
    email: {
      errorType: string;
      errorRequired: string;
      errorMin: string;
    };
    phone: {
      errorType: string;
      errorRequired: string;
      errorMin: string;
    };
    companyName: {
      errorRequired: string;
      errorMin: string;
    };
    EDRPOU: {
      errorRequired: string;
      errorMin: string;
    };
    waysSupport: {
      errorRequired: string;
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
    errorMin: string;
  };
  surname: {
    errorRequired: string;
    errorMin: string;
  };
  city: {
    errorRequired: string;
    errorMin: string;
  };
  email: {
    errorType: string;
    errorRequired: string;
    errorMin: string;
  };
  phone: {
    errorType: string;
    errorRequired: string;
    errorMin: string;
  };
  companyName: {
    errorRequired: string;
    errorMin: string;
  };
  EDRPOU: {
    errorRequired: string;
    errorMin: string;
  };
  waysSupport: {
    errorRequired: string;
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
