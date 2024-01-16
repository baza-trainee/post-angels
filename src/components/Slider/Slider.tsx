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
  cardData = [],
  element: Element,
  isInteractive = false,
  isFadeEffect = false,
  isLoop = false,
  isAutoplay = false,
  isFinished = false,
  isPagination = false,
  isNavigation = false,
  slidesPerViewDef = 1,
  slidesPerView,
  className,
  navigationBreakpoints = {
    isMobile: false,
    isTablet: false,
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
      const slider = document.querySelector(`#${id}`);
      const swiper = slider?.querySelector(`.swiper`);
      const buttonPrev = swiper?.querySelector('.swiper-button-prev');
      const buttonNext = swiper?.querySelector('.swiper-button-next');

      if (navButtonsClasses) {
        const parsedClasses = navButtonsClasses.split(' ');

        if (buttonPrev) buttonPrev.classList.add(...parsedClasses);
        if (buttonNext) buttonNext.classList.add(...parsedClasses);
      }
    }
  }, [isFirstRender, navigationBreakpoints, id]);

  return isFirstRender ? null : (
    <Swiper
      id={id}
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      effect={isFadeEffect ? 'fade' : ''}
      autoplay={isAutoplay ? { delay: 2000, disableOnInteraction: false } : false}
      loop={isLoop}
      className={className}
      navigation={isNavigation}
      slidesPerView={slidesPerViewDef}
      style={{ zIndex: 'auto' }}
      breakpoints={{
        360: {
          spaceBetween: 20,
          slidesPerView: slidesPerView?.mobile || slidesPerViewDef,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: slidesPerView?.tablet || slidesPerViewDef,
        },
        1280: {
          spaceBetween: 30,
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
          <Element {...props} cardData={cardData} isFinished={isFinished} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
