'use client';

import classNames from 'classnames';
import { HeroBanner } from '@/components/Hero/HeroBanner';
import { Slider } from '@/components/Slider';
import { BannerSliderProps } from './HeroSlider.props';
import useBreakpoints from '@/utils/useBreakpoints';

export const HeroSlider: React.FC<BannerSliderProps> = ({ banners, className = '' }) => {
  const { less768px } = useBreakpoints();
  const wrapSliderClasses = classNames('h-auto', className);
  const wrapDesktopClasses = classNames(
    'h-auto n	grid grid-cols-2  gap-y-[30px] relative',
    className
  );

  return (
    <>
      {less768px ? (
        <div className={wrapSliderClasses}>
          <Slider
            id="heroSlider"
            data={banners}
            element={HeroBanner}
            isAutoplay={true}
            isLoop={true}
            isPagination={true}
            isInteractive={true}
            isFadeEffect={true}
            isNavigation={false}
            navigationBreakpoints={{
              isMobile: false,
              isTablet: true,
              isDesktop: true,
            }}
          />
        </div>
      ) : (
        <ul className={wrapDesktopClasses}>
          {banners.map((banner, ind) => {
            return (
              <li key={banner.url} className=" h-fit xl:relative xl:h-[200px] xl:w-[312px]">
                <HeroBanner
                  url={banner.url}
                  image_description={banner.image_description}
                  ind={ind}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
