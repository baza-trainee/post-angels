export interface SliderProps {
  id: string;
  data: {}[];
  element: React.FC<any>;
  isInteractive?: boolean;
  isFadeEffect?: boolean;
  isLoop?: boolean;
  isAutoplay?: boolean;
  isPagination?: boolean;
  isNavigation?: boolean;
  slidesPerView?: { mobile: number; tablet: number; desktop: number };
  slidesPerViewDef?: number;
  navigationBreakpoints?: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}
