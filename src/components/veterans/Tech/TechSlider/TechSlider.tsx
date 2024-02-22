'use client';

import { Slider } from '@/components/Slider';
import classNames from 'classnames';
import { TechImage } from '../TechImage';
import { TechSliderProps } from './TechSlider.props';

export const TechSlider = ({ data, className }: TechSliderProps) => {
  const wrapSliderClasses = classNames('h-auto mb-[50px]', className);
  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="veteransTechSlider"
        className="veteransTechSlider"
        data={data}
        cardData={(data.alt, data.src)}
        element={TechImage}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 1, desktop: 1, desktop3xl: 1 }}
        isLoop={true}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={false}
        // isFinished={false}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: false,
        }}
      />
    </div>
  );
};
