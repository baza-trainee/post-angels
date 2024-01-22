import { ICONS } from '@/components/icons';
import { AboutProps, AboutNumberProps } from '@/sections/AboutInNumbers/AboutInNumbers.props';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Paragraph } from '@/components/typography/Paragraph';

export const AboutInNumberCard = async ({
  data,
  numberData,
}: {
  data: AboutProps;
  numberData: AboutNumberProps;
}) => {
  const Icon = dynamic(() => import(`../../../../public/icons/aboutInNumber/${data.icon}`), {
    ssr: false,
  });

  return (
    <li className="flex w-full  flex-row items-start  gap-x-4 md:basis-[calc(50%_-_15px)] xl:px-6">
      <div className=" flex  basis-[80px] items-center justify-center">
        <Icon />
      </div>
      <div className="basis-[calc(100%_-_80px_-_30px)] md:basis-[calc(100%_-_80px_-_15px)]  xl:basis-[calc(100%_-_80px_-_16px)]">
        <Paragraph
          variant="orange"
          variantFontSize="22"
          className="!font-eUkraineHead! mb-4 xl:!text-[32px]"
          variantFontWeight="medium"
        >
          {numberData.measure} {data.measure.toUpperCase()}
        </Paragraph>
        <Paragraph variant="dark_grey">{data.title}</Paragraph>
      </div>
    </li>
  );
};
