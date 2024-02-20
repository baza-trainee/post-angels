import { Locale } from '@/i18n.config';

export interface CheckboxProps {
  // lang: Locale;
  name: string;
  description: string;
  checked?: boolean;
  className?: string;
  variantFontWeight?: 'normal' | 'medium';
  onChange?: any;
}
