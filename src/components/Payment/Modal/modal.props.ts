import { getDictionary } from '@/lib/dictionary';

export interface ModalSupportProps {
  title?: string;
  OnceSupport?: string;
  MonthlySupport?: string;
  helpPostAngeles?: string;
  discription1?: string;
  discription2?: string;
  discription3?: string;
  thanksText?: string;
  supportBtn?: string;
}

export type ModalContentProps = {
  InputValue: (value: number) => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['common'];
};
