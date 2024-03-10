import { formatTitle } from '@/components/formatTitle';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import { FAQ } from '../Faq';
import { HelpProps } from './Help.props';

export const Help = ({ data, dictionaryData }: HelpProps) => {
  const { title, description, image, helps } = data;
  return (
    <div className="flex flex-col gap-y-10 border-b border-grey-60 pb-10 xl:gap-y-24 xl:pb-20">
      {/* title and text and photo */}
      <div className="flex flex-col gap-y-10 xl:flex-row xl:justify-between">
        <div className="flex w-full flex-col gap-y-8 xl:w-[482px]">
          {/* title */}
          <Title variantSize="h2" className="flex w-[230px] flex-wrap text-inherit xl:w-full">
            {formatTitle(title)}
          </Title>
          {/* text */}
          <div className="flex flex-col gap-y-4">
            {description.split('\n').map((el, ind) => {
              return (
                <Paragraph key={ind} variantFontSize="16" variant="dark_grey">
                  {el}
                </Paragraph>
              );
            })}
          </div>
        </div>
        {/* photo */}
        <div className="relative h-[205px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 lg:h-[256px] xl:w-[580px] 2xl:w-[664px] 3xl:w-[904px]">
          <Image
            id={image.id}
            src={image.src.data.attributes.url}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            className="rounded-2xl object-cover object-center"
          />
        </div>
      </div>
      {/* FAQ */}
      <div className="flex flex-col gap-y-8 xl:gap-y-12">
        <Title variantSize="h3" tag="h3" className="font-eUkraineHead !text-accent-primary">
          {dictionaryData.help}
        </Title>
        {/* <div className=""> */}
        <div className="flex flex-col gap-y-8 xl:grid xl:grid-flow-row xl:grid-cols-2">
          {helps.map((el, ind) => (
            <FAQ data={el} key={ind} isPreOpen={false} dictionaryData={dictionaryData.faq} />
          ))}
        </div>
      </div>
    </div>
  );
};
