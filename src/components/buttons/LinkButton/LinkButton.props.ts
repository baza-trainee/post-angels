import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LinkButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'accent' | 'white' | 'orange';
  size?: 'big' | 'small';
  disabled?: boolean;
  href?: string;
}
