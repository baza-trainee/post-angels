import { Locale } from '@/i18n.config';

export interface FormProps {
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
  identificationDocument: {
    name: string;
    title: string;
    placeholder: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  descriptionTermsAgreement: {
    name: string;
    description: string;
  };
  problem: {
    name: string;
    title: string;
    placeholder: string;
  };
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
    problem: {
      errorRequired: string;
      errorMin: string;
    };
    identificationDocument: {
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
export interface VeteransDataFormProps {
  name: string;
  lastName: string;
  city: string;
  email: string;
  phone: string;
  identificationDocument: string;
  problem: string;
}
export interface CreateVeteranResponse {
  createVeteran: {
    data: {
      id: string;
    };
  };
}
export interface ErrorObject {
  response: {
    status: number;
  };
  message: string;
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
  problem: {
    errorRequired: string;
    errorMin: string;
  };
  identificationDocument: {
    errorRequired: string;
  };
  descriptionTermsAgreement: {
    errorRequired: string;
  };
}
