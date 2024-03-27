'use client';

import { Slider } from '@/components/Slider';
import classNames from 'classnames';
import { TechImage } from '../TechImage';
import { TechSliderProps } from './TechSlider.props';

export const TechSlider = ({ imageData, className }: TechSliderProps) => {
  const wrapSliderClasses = classNames(
    'h-auto w-full mb-[50px] xl:w-[584px] 2xl:w-[780px] 3xl:w-[1216px]',
    className
  );
  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="veteransTechSlider"
        className="veteransTechSlider"
        data={imageData}
        // cardData={imageData}
        element={TechImage}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 1, desktop: 1, desktop3xl: 1 }}
        isLoop={true}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        // isFinished={false}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};
