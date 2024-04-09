export interface Payments {
  title: string;
  needToCollect: string;
  OneTimeTextButton: string;
  MonthlyTextButton: string;
  supportUsButton: string;
  otherAmountText: string;
  otherAmountValue: number;
  supportPostAngeles: string;
  chooseYourContribution: string;
  contributionText: string;
  paymentSystemTitle: string;
  schema: {
    otherAmount: {
      errorRequired: string;
      errorLength?: string;
      errorType?: string;
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

