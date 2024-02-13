'use client';
import { useRef, useEffect, useState } from 'react';
import { StaticDataHeroProps, ProjectHeroProps } from '@/sections/ProjectPage/ProjectPage.props';
import { Paragraph } from '@/components/typography/Paragraph';

export const ProjectData = ({
  staticData,
  data,
}: {
  staticData: StaticDataHeroProps;
  data: ProjectHeroProps;
}) => {
  const { all, collected, startDate, finishedDate, status } = data;
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [blockWidth, setBlockWidth] = useState(0);

  const updateBlockWidth = () => {
    if (blockRef.current) {
      const width = blockRef.current.offsetWidth;
      setBlockWidth(width);
    }
  };

  useEffect(() => {
    updateBlockWidth();
    window.addEventListener('resize', updateBlockWidth);
    return () => {
      window.removeEventListener('resize', updateBlockWidth);
    };
  }, [blockWidth]);

  const getPercent = (collected: number, all: number) => {
    return Math.round((collected / all) * 100);
  };

  const getPercentWidth = (blockWidth: number, collected: number, all: number) => {
    return Math.round(blockWidth * (collected / all));
  };

  return (
    <div className="mb-[30px] flex flex-col gap-y-4 xl:mb-5">
      <div className="flex justify-between	">
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {staticData.collected}
        </Paragraph>
        <Paragraph variantFontWeight="medium" variantFontSize="15">
          {new Intl.NumberFormat('ua-UA').format(collected)} /
          {new Intl.NumberFormat('ua-UA').format(all)}
        </Paragraph>
      </div>
      <div className="flex items-center	justify-between gap-x-2">
        <div ref={blockRef} className="h-[10px] w-full overflow-hidden rounded-full bg-progressBar">
          <div
            style={{ width: getPercentWidth(blockWidth, collected, all) + 'px' }}
            className={`${status === 'completed' ? 'hidden' : 'bg-green'} h-full rounded-full`}
          ></div>
        </div>
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {getPercent(collected, all)}%
        </Paragraph>
      </div>
      <div className="flex justify-between">
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {staticData.startDate}
        </Paragraph>
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {startDate}
        </Paragraph>
      </div>
      <div className="flex justify-between">
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {staticData.finishedDate}
        </Paragraph>
        <Paragraph
          variant={status === 'completed' ? 'light' : 'grey'}
          variantFontSize="15"
          variantFontWeight="regular"
        >
          {finishedDate}
        </Paragraph>
      </div>
    </div>
  );
};
