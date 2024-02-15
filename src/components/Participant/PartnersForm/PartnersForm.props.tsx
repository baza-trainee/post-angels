export interface PartnersFormProps {
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
}
