'use client';

import classNames from 'classnames';
import { HeroBanner } from '@/components/Hero/HeroBanner';
import { Slider } from '@/components/Slider';
import { BannerSliderProps } from './HeroSlider.props';

export const HeroSlider: React.FC<BannerSliderProps> = ({ banners, className = '' }) => {
  const wrapSliderClasses = classNames('h-auto  md:hidden	', className);
  const wrapDesktopClasses = classNames(
    'h-auto smOnly:hidden	grid grid-cols-2  gap-y-[30px] relative ',
    className
  );

  return (
    <>
      <div className={wrapSliderClasses}>
        <Slider
          id="homepage-hero"
          data={banners}
          element={HeroBanner}
          isAutoplay={true}
          // isLoop={true}
          isPagination={true}
          isInteractive={true}
          isFadeEffect={true}
          isNavigation={true}
          navigationBreakpoints={{
            isMobile: false,
            isTablet: true,
            isDesktop: true,
          }}
        />
      </div>

      <ul className={wrapDesktopClasses}>
        {banners.map((banner, ind) => {
          return (
            <li key={banner.url} className=" h-fit xl:relative xl:h-[200px] xl:w-[312px]">
              <HeroBanner url={banner.url} image_description={banner.image_description} ind={ind} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
