import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import { ContentMapProps } from './ContentMap.props';
import CustomImage from '@/components/CustomImage/CustomImage';

export const ContentMap = ({ data }: ContentMapProps) => {
  return data.map((object, index) => (
    <div
      className="flex flex-col gap-y-10 border-b border-grey-60 pb-10 xl:justify-between xl:gap-x-[134px] xl:pb-24 odd:xl:flex-row-reverse even:xl:flex-row"
      key={index}
    >
      {/* title and text */}
      <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
        {/* title */}
        <Title
          variantSize="h2"
          className={`flex flex-wrap xl:w-[218px]

            
            ${!object.accentTitle ? '!text-accent-primary' : 'text-inherit'}`}
        >
          {object.title}
          <br />
          {object.accentTitle ? (
            <span className={`ml-2 ${index === 0 ? 'xl:ml-0' : 'xl:ml-2'}`}>
              {object.accentTitle}
            </span>
          ) : null}
        </Title>
        {/* text */}

        {object.text.map((el, ind) => {
          return (
            <Paragraph key={ind} variantFontSize="16" variant="dark_grey">
              {el}
            </Paragraph>
          );
        })}
      </div>
      {/* image */}
      <div className="relative h-[205px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
        <CustomImage
          src={object.imageSrc || ''}
          alt={object.imageAlt || 'background image'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-2xl object-cover object-center"
          defaultImg="/images/about/about-us.jpg"
        />
      </div>
    </div>
  ));
};
