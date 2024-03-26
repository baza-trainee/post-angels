import { ChangeEvent } from 'react';

export interface CheckboxProps {
  name: string;
  description: string;
  className?: string;
  variantFontWeight?: 'normal' | 'medium';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
