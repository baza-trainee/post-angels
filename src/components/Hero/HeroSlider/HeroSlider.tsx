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
    'h-auto 	grid grid-cols-2  gap-y-[50px] relative 2xl:gap-y-[60px] 3xl:gap-y-[100px] 3xl:mr-[89px]',
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
              <li
                key={banner.url}
                className=" h-fit xl:relative xl:h-[200px] xl:w-[312px] 2xl:h-[240px] 2xl:w-[432px] 3xl:h-[272px] 3xl:w-[592px]"
              >
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
