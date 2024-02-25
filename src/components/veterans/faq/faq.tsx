'use client';

import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import { useState } from 'react';
import { FAQProps } from './FAQ.props';

export const FAQ = ({ data, dictionaryData }: FAQProps) => {
  const { name, text, image } = data;
  const [openQuestion, setOpenQuestion] = useState(false);
  const handleQuestion = () => setOpenQuestion(!openQuestion);
  return (
    <div className="relative font-eUkraine">
      {/* title question */}
      <div className="flex items-center gap-x-5 rounded-2xl bg-[#F0F0F0]">
        <div className="h-[50px] w-[50px]">
          <ICONS.FAQ
            className={`h-[50px] w-[50px] duration-300 ${openQuestion ? 'rotate-45' : 'rotate-0'}`}
            aria-label={dictionaryData.buttonAreaLabel}
            onClick={handleQuestion}
          />
        </div>
        <Title variantSize="h5" tag="h3" className="font-eUkraineHead text-xl font-normal">
          {name}
        </Title>
      </div>
      {/* image and answer */}
      {openQuestion && (
        <>
          {/* answer */}
          <div className="ml-12 mt-3 flex flex-col gap-y-4 rounded-2xl bg-[#EBEFFF] p-[10px]">
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
            <div className="relative mt-7 h-[264px] w-full rounded-2xl sm:h-[364px]">
              <Image
                src={image.src.data.attributes.url}
                alt={image.alt}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className="rounded-2xl object-cover object-center"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
