import { AboutProps, AboutNumberProps } from '@/sections/AboutInNumbers/AboutInNumbers.props';
import dynamic from 'next/dynamic';
import { Paragraph } from '@/components/typography/Paragraph';

export const AboutInNumberCard = async ({
  data,
  numberData,
  ind,
}: {
  data: AboutProps;
  numberData: AboutNumberProps;
  ind: number;
}) => {
  const Icon = dynamic(() => import(`../../../../public/icons/aboutInNumber/${data.icon}`), {
    ssr: false,
  });

  const afterClass = `xl:after:bg-grey-60 xl:after:block xl:after:w-[calc(100%_-_48px)] 2xl:after:w-[calc(100%_-_80px)] 3xl:after:w-[calc(100%_-_184px)] xl:after:h-[1px] xl:after:absolute xl:after:bottom-[-25px] xl:after:left-6 2xl:after:left-[40px] 3xl:after:left-[94px]`;

  return (
    <li
      className={`relative flex w-full flex-row items-start gap-x-4 md:basis-[calc(50%_-_15px)]  xl:pl-6 2xl:basis-[448px] 2xl:pl-[40px]  3xl:basis-[646px] 3xl:pl-[86px]  ${
        ind === 0 || ind === 1 ? afterClass : ''
      }`}
    >
      <div className=" flex  basis-[80px] items-center justify-center">
        <Icon />
      </div>
      <div className="basis-[calc(100%_-_80px_-_30px)] md:basis-[calc(100%_-_80px_-_15px)]  xl:basis-[259px] 2xl:basis-[273px]">
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
