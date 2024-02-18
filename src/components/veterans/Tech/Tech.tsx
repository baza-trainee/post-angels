import { formatTitle } from '@/components/formatTitle';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { TechProps } from './Tech.props';
import { TechSlider } from './TechSlider';

const Tech = ({ data }: TechProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-20 border-b border-grey-60 pb-10">
        {/* title / text / slider section */}
        <div className="flex flex-col gap-y-10">
          {/* title and text */}
          <div className="flex w-full flex-col gap-y-8 xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]">
            {/* title */}
            <Title variantSize="h2" className="flex flex-wrap text-inherit xl:w-[218px]">
              {formatTitle(data.title)}
            </Title>
            {/* text */}
            <Paragraph variantFontSize="16" variant="dark_grey">
              {data.description.split('\n').map((el: string, ind: number) => {
                return (
                  <Paragraph key={ind} variantFontSize="16" variant="dark_grey">
                    {el}
                  </Paragraph>
                );
              })}
            </Paragraph>
          </div>
          {/* slider */}
          <TechSlider data={data.image} className="" />
        </div>
        {/* faq section */}
        <div className="">FAQ</div>
      </div>
    </div>
  );
};

export default Tech;
