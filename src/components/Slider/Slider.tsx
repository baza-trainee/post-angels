'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import classNames from 'classnames';

import { SliderProps } from './Sliper.props';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export const Slider: React.FC<SliderProps> = ({
  id,
  data = [],
  element: Element,
  isInteractive = false,
  isFadeEffect = false,
  isLoop = false,
  isAutoplay = false,
  isPagination = false,
  isNavigation = false,
  slidesPerViewDef = 1,
  slidesPerView,
  navigationBreakpoints = {
    isMobile: true,
    isTablet: true,
    isDesktop: true,
  },
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  // hide navigation buttons on certain breakpoints
  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
    if (!isFirstRender) {
      const navButtonsClasses = classNames({
        'smOnly:!hidden': !navigationBreakpoints.isMobile,
        'mdOnly:!hidden': !navigationBreakpoints.isTablet,
        'xl:!hidden': !navigationBreakpoints.isDesktop,
      });

      const buttonPrev = document.querySelector('.swiper-button-prev');
      const buttonNext = document.querySelector('.swiper-button-next');

      if (navButtonsClasses) {
        const parsedClasses = navButtonsClasses.split(' ');

        if (buttonPrev) buttonPrev.classList.add(...parsedClasses);
        if (buttonNext) buttonNext.classList.add(...parsedClasses);
      }
    }
  }, [isFirstRender, navigationBreakpoints]);

  return isFirstRender ? null : (
    <Swiper
      id={'swiper'}
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      effect={isFadeEffect ? 'fade' : ''}
      autoplay={isAutoplay ? { delay: 2000, disableOnInteraction: false } : false}
      loop={isLoop}
      navigation={isNavigation}
      slidesPerView={slidesPerViewDef}
      breakpoints={{
        360: {
          slidesPerView: slidesPerView?.mobile || slidesPerViewDef,
        },
        768: {
          slidesPerView: slidesPerView?.tablet || slidesPerViewDef,
        },
        1280: {
          slidesPerView: slidesPerView?.desktop || slidesPerViewDef,
        },
      }}
      pagination={{
        enabled: isPagination,
        clickable: true,
        type: 'bullets',
      }}
      lazyPreloadPrevNext={1}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index}>
          <Element {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
