import { Locale } from '@/i18n.config';

export interface VolunteersFormProps {
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
  waysVolunteering: {
    name: string;
    title: string;
    placeholder: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  reasonVolunteering: {
    name: string;
    title: string;
    placeholder: string;
  };
  volunteerCertificate: {
    name: string;
    title: string;
    options: { name: string; value: string; id: number }[];
  };
  carAvailability: {
    name: string;
    title: string;
    options: { name: string; value: string; id: number }[];
  };
  descriptionTermsAgreement: {
    name: string;
    description: string;
  };
  descriptionPrivacyPolice: {
    name: string;
    description: string;
  };
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
    telegram: {
      errorRequired: string;
      errorMin: string;
    };
    waysVolunteering: {
      errorRequired: string;
    };
    carAvailability: {
      errorRequired: string;
    };
    volunteerCertificate: {
      errorRequired: string;
    };
    descriptionTermsAgreement: {
      errorRequired: string;
    };
    descriptionPrivacyPolice: { errorRequired: string };
  };
  buttonText: string;
  notice: {
    success: string;
    fail: string;
  };
}

export interface VolunteersDataFormProps {
  name: string;
  email: string;
  phone: string;
  lastName: string;
  city: string;
  telegram: string;
  message: string;
  activity: string;
  volunteerCertificate: string;
  carAvailability: string;
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
  telegram: {
    errorRequired: string;
    errorMin: string;
  };
  waysVolunteering: {
    errorRequired: string;
  };
  carAvailability: {
    errorRequired: string;
  };
  volunteerCertificate: {
    errorRequired: string;
  };
  descriptionTermsAgreement: {
    errorRequired: string;
  };
  descriptionPrivacyPolice: {
    errorRequired: string;
  };
}

export interface ErrorObject {
  response: {
    status: number;
  };
  message: string;
}

export interface CreateVolunteerResponse {
  createVolonter: {
    data: {
      id: string;
    };
  };
}