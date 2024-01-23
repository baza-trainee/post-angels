'use client';

import classNames from 'classnames';
import { Slider } from '@/components/Slider';
import { PartnerCard } from '@/components/Partners/PartnerCard';

import { PartnersSliderProps } from '@/sections/PartnersTop/PartnersTop.props';

export const PartnersSlider = ({
  partnersData,
  className = '',
}: {
  partnersData: PartnersSliderProps[];
  className?: string;
}) => {
  const wrapSliderClasses = classNames('h-[68px]', className);

  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="homepage-partners"
        data={partnersData}
        element={PartnerCard}
        isAutoplay={true}
        slidesPerView={{ mobile: 2, tablet: 4, desktop: 8, desktop3xl: 10 }}
        isLoop={true}
        isPagination={false}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={false}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: true,
          isDesktop: true,
        }}
      />
    </div>
  );
};
