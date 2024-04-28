export interface Payments {
  title: string;
  needToCollect: string;
  sum: string;
  currency: string;
  OneTimeTextButton: string;
  MonthlyTextButton: string;
  supportUsButton: string;
  otherAmountText: string;
  supportPostAngeles: string;
  chooseYourContribution: string;
  contributionText: string;
  paymentSystemTitle: string;
  schema?: {
    otherAmount: {
      errorRequired: string;
    };
    supportPostAngeles: {
      errorRequired: string;
      errorLength?: string;
      errorType?: string;
    };
  };
  modal: {
    button: {
      label: string;
    };
  };
}

export interface SchemaTypes {
  otherAmount: {
    errorRequired: string;
    errorLength?: string;
    errorType?: string;
  };
}
