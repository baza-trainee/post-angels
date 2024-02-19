'use client';

import { ICONS } from '@/components/icons';
import { Title } from '@/components/typography/Title';
import { useState } from 'react';

export const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [openQuestion, setOpenQuestion] = useState(false);
  const handleQuestion = () => setOpenQuestion(!openQuestion);
  return (
    <div className="rounded-2xl">
      <div className="flex items-center gap-x-5 bg-[#F0F0F0]">
        <ICONS.FAQ
          className={`h-[50px] w-[50px] duration-300 ${openQuestion ? 'rotate-45' : 'rotate-0'}`}
          aria-label="bla"
          onClick={handleQuestion}
        />
        {!openQuestion && (
          <Title variantSize="h5" tag="h3" className="font-eUkraineHead text-xl font-normal">
            {question}
          </Title>
        )}
      </div>
      {openQuestion && (
        <>
          <Title
            variantSize="h5"
            tag="h3"
            className="bg-[#EBEFFF] font-eUkraineHead text-xl font-normal"
          >
            {question}
          </Title>
          <p>{answer}</p>
          <div>
            {/* <Image src={} /> */}
            Image
          </div>
        </>
      )}
    </div>
  );
};
