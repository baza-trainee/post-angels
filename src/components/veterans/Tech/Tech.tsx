import { formatTitle } from '@/components/formatTitle';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { FAQ } from '../Faq';
import { TechProps } from './Tech.props';
import { TechSlider } from './TechSlider';

const Tech = ({ data, dictionaryData }: TechProps) => {
  return (
    <div className="flex flex-col gap-y-20">
      {/* title / text / slider section */}
      <div className="flex flex-col gap-y-10 border-b border-grey-60 xl:flex-row xl:justify-between">
        {/* title and text */}
        <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
          {/* title */}
          <Title variantSize="h2" className="flex w-full flex-wrap text-inherit sm:w-[230px]">
            {formatTitle(data.title)}
          </Title>
          {/* text */}
          <div className="flex flex-col gap-y-4">
            {data.description.split('\n').map((el, ind) => {
              return (
                <Paragraph key={ind} variantFontSize="16" variant="dark_grey">
                  {el}
                </Paragraph>
              );
            })}
          </div>
        </div>
        {/* slider */}
        <TechSlider data={data.image} />
      </div>
      {/* faq section */}
      <div className="flex flex-col gap-y-10 border-b border-grey-60 pb-10">
        {data.technology.map((el, ind) => (
          <FAQ data={el} key={ind} dictionaryData={dictionaryData.faq} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
