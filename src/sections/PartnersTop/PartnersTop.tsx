import { PartnersSliderProps, PartnersDataProps } from './PartnersTop.props';
import { PartnersSlider } from '@/components/Partners/PartnersSlider';
import { Title } from '@/components/typography/Title';

export const PartnersTop = ({
  partnersData,
  data,
}: {
  partnersData: PartnersSliderProps[];
  data: PartnersDataProps;
}) => {
  return (
    <section>
      <div className="container">
        <div className="border-b border-grey-60  pb-[80px] pt-[85px] xl:pb-[40px] xl:pt-[85px]">
          <Title tag="h2" variantSize="h2" colorVariant="accent" className="hidden">
            {data.title}
            <br /> <span>{data.title1}</span>
          </Title>
          <PartnersSlider partnersData={partnersData} />
        </div>
      </div>
    </section>
  );
};
