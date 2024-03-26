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
      errorLength: string;
    };
    surname: {
      errorRequired: string;
      errorLength: string;
    };
    city: {
      errorRequired: string;
      errorLength: string;
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
    telegram: {
      errorType: string;
      errorLength: string;
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
    reasonVolunteering: {
      errorLength: string;
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
  telegram: {
    errorType: string;
    errorRequired: string;
    errorLength: string;
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
  reasonVolunteering:{
    errorType: string;
    errorLength: string;
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
