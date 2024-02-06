import { CSSProperties, ReactNode } from 'react';

export interface IconLinkProps {
  children: ReactNode;
  className?: string;
  label: string;
  href: string;
  blank?: boolean;
}
