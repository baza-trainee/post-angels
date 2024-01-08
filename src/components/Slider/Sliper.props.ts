import { ProjectsProps } from '@/sections/Projects/Projects.props';

export interface SliderProps {
  id: string;
  data: {}[];
  cardData?: {};
  element: React.FC<any>;
  isInteractive?: boolean;
  isFadeEffect?: boolean;
  isLoop?: boolean;
  isAutoplay?: boolean;
  isFinished?: boolean;
  isPagination?: boolean;
  isNavigation?: boolean;
  className?: string;
  slidesPerView?: { mobile: number; tablet: number; desktop: number };
  slidesPerViewDef?: number;
  navigationBreakpoints?: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}
