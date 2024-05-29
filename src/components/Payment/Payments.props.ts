import { getDictionary } from "@/lib/dictionary";

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
  modal?: {
    button: {
      label: string;
    };
  };
  logo?: {
    label: string;
    href: string;
  };
}

export interface SchemaTypes {
  otherAmount: {
    errorRequired: string;
    errorLength?: string;
    errorType?: string;
  };
}

export interface PaymentFormProps {
  className: string;
  schema: SchemaTypes;
  isDisabled: boolean;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['common'];
}