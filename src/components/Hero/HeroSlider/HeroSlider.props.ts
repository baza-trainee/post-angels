import { BannerProps } from '@/components/Hero/HeroBanner/HeroBanner.props';
import { Locale } from '@/i18n.config';

export interface BannerSliderProps {
  banners: BannerProps[];
  className?: string;
  lang: Locale;
}
