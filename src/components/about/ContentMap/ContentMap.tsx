import Image from 'next/image';
import React from 'react';
import { ContentMapProps } from './ContentMap.props';

export const ContentMap = ({ data }: ContentMapProps) => {
  const mapTitle = (title: string): JSX.Element => (
    <h2 className="font-eUkraineHead text-3xl font-medium uppercase text-grey-100">
      {title.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {index === 0 ? word : <span className="text-accent-primary">{word}</span>}{' '}
        </React.Fragment>
      ))}
    </h2>
  );

  const mapText = (array: string[]) =>
    array.map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>);

  return data.map((object, index) => (
    <div
      className="mb-20 flex flex-col gap-y-10 border-b border-grey-60 pb-10 xl:justify-between xl:gap-x-[134px] xl:pb-24 odd:xl:flex-row even:xl:flex-row-reverse"
      key={index}
    >
      {/* title and text */}
      <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
        {/* title */}
        {mapTitle(object.title)}
        {/* text */}
        <div className="flex flex-col gap-y-6 text-[15px] font-normal leading-6 text-grey-80">
          {mapText(object.text)}
        </div>
      </div>
      {/* image */}
      <div className="relative h-[205px] w-full sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
        <Image
          src={object.imageSrc}
          alt={object.imageAlt}
          fill
          sizes="100%"
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  ));
};
