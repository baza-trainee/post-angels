import { Locale } from '@/i18n.config';

export interface MobileNavProps {
  lang: Locale;
  headerNav: { name: string; href: string }[];
}
