'use client';

import classNames from 'classnames';
import { HeroBanner } from '@/components/Hero/HeroBanner';
import { Slider } from '@/components/Slider';
import { BannerSliderProps } from './HeroSlider.props';
import useBreakpoints from '@/utils/useBreakpoints';

export const HeroSlider: React.FC<BannerSliderProps> = ({ banners, className = '', lang }) => {
  const { less1280px } = useBreakpoints();
  const wrapSliderClasses = classNames('h-auto md:w-[349px] lg:w-[465px]', className);
  const wrapDesktopClasses = classNames(
    'h-auto 	grid grid-cols-2  gap-y-[50px] relative 2xl:gap-y-[60px] 3xl:gap-y-[100px] 3xl:mr-[89px]',
    className
  );

  return (
    <>
      {less1280px ? (
        <div className={wrapSliderClasses}>
          <Slider
            id="heroSlider"
            lang={lang}
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
                key={banner.ind}
                className=" h-fit xl:relative xl:h-[200px] xl:w-[312px] 2xl:h-[240px] 2xl:w-[432px] 3xl:h-[272px] 3xl:w-[592px]"
              >
                <HeroBanner src={banner.src} alt={banner.alt} ind={ind} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
