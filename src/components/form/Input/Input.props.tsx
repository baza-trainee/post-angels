import { Locale } from '@/i18n.config';

export interface InputProps {
  lang: Locale;
  name: string;
  title: string;
  type: string;
  placeholder: string;
//   register: UseFormRegister<TFieldValues>;
//   errors: FieldErrors<TFieldValues>;
}
