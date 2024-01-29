import { ReactNode, RefObject } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white' | 'light' | 'grey' | 'dark_grey' | 'orange' | 'accent';
  variantFontWeight?: 'regular' | 'medium';
  variantFontSize?: '16' | '15' | '14' | '12' | '22';
  centered?: boolean;
  className?: string;
  children: ReactNode;
  paragraphRef?: RefObject<HTMLParagraphElement>;
}
