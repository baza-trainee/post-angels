import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import React from 'react';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { mission, strategy, goal } = common.about;

  const titleMapping = (title: string): JSX.Element => (
    <h2 className="font-eUkraineHead text-3xl font-medium uppercase text-grey-100">
      {title.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? <span className="text-accent-primary">{word} </span> : `${word} `}
        </React.Fragment>
      ))}
    </h2>
  );

  const textMapping = (array: string[]) =>
    array.map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>);

  return (
    <section className="mb-2 mt-[66px] py-10 font-eUkraine xl:mt-[150px] xl:py-12 ">
      <div className="container">
        {/* item 1 */}
        <div className="mb-20 flex flex-col gap-y-10 border-b pb-10 xl:flex-row xl:justify-between xl:gap-x-[134px] xl:pb-24">
          {/* title and text */}
          <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
            {/* title */}
            {titleMapping(mission.title)}
            {/* text */}
            <div className="flex flex-col gap-y-6 text-[15px] font-normal leading-6 text-grey-80">
              {textMapping(mission.text)}
            </div>
          </div>
          {/* image */}
          <div className="relative h-[205px] w-full sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
            <Image src={mission.imageScr} alt="" fill className="rounded-xl object-cover" />
          </div>
        </div>

        {/* item 2 */}
        <div className="mb-20 flex flex-col gap-y-10 border-b pb-10 xl:flex-row xl:justify-between xl:gap-x-[134px] xl:pb-24">
          {/* image */}
          <div className="relative order-2 h-[205px] w-full sm:h-[282px] md:h-[468px] lg:h-[620px] xl:order-1 xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
            <Image src={strategy.imageScr} alt="" fill className="rounded-xl object-cover" />
          </div>
          {/* title and text */}
          <div className="order-1 flex w-full flex-col gap-y-8 xl:order-2 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
            {/* title */}
            {titleMapping(strategy.title)}
            {/* text */}
            <div className="flex flex-col gap-y-6 text-[15px] font-normal leading-6 text-grey-80">
              {textMapping(strategy.text)}
            </div>
          </div>
        </div>

        {/* item 3 */}
        <div className="mb-20 flex flex-col gap-y-10 border-b pb-10 xl:flex-row xl:justify-between xl:gap-x-[134px] xl:pb-24">
          {/* title and text */}
          <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
            {/* title */}
            {titleMapping(goal.title)}
            {/* text */}
            <div className="flex flex-col gap-y-6 text-[15px] font-normal leading-6 text-grey-80">
              {textMapping(goal.text)}
            </div>
          </div>
          {/* image */}
          <div className="relative h-[205px] w-full sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
            <Image src={goal.imageScr} alt="" fill className="rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
