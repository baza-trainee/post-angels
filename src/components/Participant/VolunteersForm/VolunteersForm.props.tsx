export interface VolunteersFormProps {
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
    yes: {
      name: string;
      description: string;
    };
    no: {
      name: string;
      description: string;
    };
  };
  carAvailability: {
    yes: {
      name: string;
      description: string;
    };
    no: {
      name: string;
      description: string;
    };
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
  buttonText: string;
}
