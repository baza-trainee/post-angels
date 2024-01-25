import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import { ContentMapProps } from './ContentMap.props';

export const ContentMap = ({ data }: ContentMapProps) => {
  return data.map((object, index) => (
    <div
      className="flex flex-col gap-y-10 border-b border-grey-60 pb-10 xl:justify-between xl:gap-x-[134px] xl:pb-24 odd:xl:flex-row-reverse even:xl:flex-row"
      key={index}
    >
      {/* title and text */}
      <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
        {/* title */}
        <Title variantSize="h2" className="flex flex-wrap xl:w-[218px]">
          <p>{object.title} &zwnj;</p>
          {object.accentTitle ? <span>{object.accentTitle}</span> : null}
        </Title>
        {/* text */}
        <Paragraph variantFontSize="16" className="text-grey-80">
          {object.text}
        </Paragraph>
      </div>
      {/* image */}
      <div className="relative h-[205px] w-full rounded-2xl saturate-0 transition-all delay-150 hover:saturate-100 sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
        <Image
          src={object.imageSrc}
          alt={object.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-2xl object-cover object-center"
        />
      </div>
    </div>
  ));
};
