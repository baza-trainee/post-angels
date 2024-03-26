'use client';

import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import { useState } from 'react';
import { FAQProps } from './FAQ.props';

export const FAQ = ({ data, isPreOpen }: FAQProps) => {
  const { name, text, image } = data;
  const [openQuestion, setOpenQuestion] = useState(isPreOpen);
  const handleQuestion = () => setOpenQuestion(!openQuestion);

  return (
    <li className="w-full xl:w-[566px]">
      <div className="">
        {/* question */}
        <div
          className="flex cursor-pointer items-center gap-x-5 rounded-2xl bg-[#F0F0F0]"
          onClick={handleQuestion}
        >
          <button className="h-[50px] w-[50px]">
            <ICONS.FAQ
              className={`h-[50px] w-[50px] duration-300 ${
                openQuestion ? 'rotate-45' : 'rotate-0'
              }`}
            />
          </button>
          <Title variantSize="h5" tag="h3" className="font-eUkraineHead text-xl font-normal">
            {name}
          </Title>
        </div>
        {/* answer */}
        <div
          className={`ml-12 mt-3 flex flex-col gap-y-4 rounded-2xl bg-[#EBEFFF] p-[10px] transition-all ${
            openQuestion ? '' : 'hidden'
          }`}
        >
          {text.split('\n').map((el, ind) => {
            return (
              <Paragraph key={ind} variantFontSize="16" variant="dark_grey" className="">
                {el}
              </Paragraph>
            );
          })}
        </div>
        {/* image */}
        {image && (
          <div
            className={`relative right-0 top-0 mt-7 h-[264px] w-full rounded-2xl sm:h-[364px] xl:absolute xl:mt-0 xl:h-[628px] xl:w-[584px] 2xl:h-[640px] 2xl:w-[664px] 3xl:w-[904px] ${
              openQuestion ? '' : 'hidden'
            }`}
          >
            <Image
              src={image.src.data.attributes.url}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              className="rounded-2xl object-cover object-center"
            />
          </div>
        )}
      </div>
    </li>
  );
};
