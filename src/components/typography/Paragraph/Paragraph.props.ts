import { ReactNode, RefObject } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white' | 'light_grey';
  variantFontWeight?: 'regular' | 'medium';
  variantFontSize?: '16' | '15' | '14' | '12';
  centered?: boolean;
  className?: string;
  children: ReactNode;
  paragraphRef?: RefObject<HTMLParagraphElement>;
}
