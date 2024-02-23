'use client';

import { FC } from 'react';
import { Link as Scroll } from 'react-scroll';

import { useScrollVisibility } from '@/utils/useScrollVisibility';
import { ICONS } from '../icons';

import { ScrollBtnProps } from './ScrollBtn.props';

export const ScrollBtn: FC<ScrollBtnProps> = ({ data }) => {
  const isVisible = useScrollVisibility('what_we_do');

  return (
    <Scroll
      to="hero"
      href="hero"
      smooth={true}
      duration={300}
      aria-label={data.label}
      className={`${
        !isVisible ? 'opacity-0' : 'opacity-1'
      } fixed bottom-[300px] right-0 flex h-[62px] w-[21px] items-center justify-center rounded bg-transparent transition-opacity duration-300 md:right-[calc((100vw_-_768px)_*_0.5)] lg:right-[calc((100vw_-_1000px)_*_0.5)] xl:right-[calc((100vw_-_1258px)_*_0.5)] 2xl:right-[calc((100vw_-_1416px)_*_0.5)] 3xl:right-[calc((100vw_-_1900px)_*_0.5)]`}
    >
      <ICONS.SCROLL_ARROW className="h-[62px] w-[21px]  " width={21} height={62} />
    </Scroll>
  );
};
