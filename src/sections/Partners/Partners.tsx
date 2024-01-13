import { PartnersSliderProps, PartnersDataProps } from '@/sections/PartnersTop/PartnersTop.props';
import { PartnersSlider } from '@/components/Partners/PartnersSlider';
import { Title } from '@/components/typography/Title';
import { LinkButton } from '@/components/buttons/LinkButton';

export const Partners = ({
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
          <Title tag="h2" variantSize="h2" colorVariant="accent" className="mb-[30px] xl:mb-12">
            {data.title}
            <br /> <span>{data.title1}</span>
          </Title>
          <PartnersSlider partnersData={partnersData} className="mb-[30px] xl:mb-12" />
          <LinkButton href={data.button.href} className="inline-block md:w-[280px]">
            {data.button.text}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
