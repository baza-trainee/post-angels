import { Locale } from '@/i18n.config';
import { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  title: string;
  type: string;
  placeholder: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  lang?: Locale;
}
