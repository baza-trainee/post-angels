'use client';

import { FC, useState } from 'react';
import { Link as Scroll } from 'react-scroll';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { ICONS } from '../icons';

import { ScrollBtnProps } from './ScrollBtn.props';

export const ScrollBtn: FC<ScrollBtnProps> = ({ data }) => {
  const isVisible = useScrollVisibility('contacts');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Scroll
      to="hero"
      href="hero"
      smooth={true}
      duration={300}
      aria-label={data.label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        !isVisible ? 'opacity-0' : 'opacity-1'
      } fixed bottom-[300px] right-0 flex h-[65px] w-[22px] items-center justify-center rounded bg-transparent transition-opacity duration-300 md:right-[calc((100vw_-_768px)_*_0.5)] lg:right-[calc((100vw_-_1000px)_*_0.5)] xl:right-[calc((100vw_-_1258px)_*_0.5)] 2xl:right-[calc((100vw_-_1416px)_*_0.5)] 3xl:right-[calc((100vw_-_1900px)_*_0.5)]`}
    >
      <div className="relative flex h-[65px] w-[22px] items-center justify-center overflow-hidden rounded-[50%] ">
        {/* <ICONS.SCROLL_ARROW className="h-[62px] w-[21px]  " width={21} height={62} /> */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute right-[1px] top-0 duration-300	 ${isHovered ? 'animate-bounce' : ''}`}
        >
          <path
            d="M0.7145 13.6484C8.5516 13.6484 10.7908 5.12024 10.7908 0.571837C10.7907 5.34764 13.03 13.6484 20.8672 13.6484"
            stroke="#303030"
            stroke-width="2.5"
          />
        </svg>
        <svg
          width="4"
          height="62"
          viewBox="0 0 4 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={` duration-300	 ${isHovered ? 'translate-y-[110%]' : 'translate-y-0'}`}
        >
          <path d="M2.07617 0V61.2979" stroke="#303030" strokeWidth="2.5" />
        </svg>
      </div>
    </Scroll>
  );
};
