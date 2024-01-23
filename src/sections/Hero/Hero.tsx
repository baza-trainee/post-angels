import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { LinkButton } from '@/components/buttons/LinkButton';

import { HeroSlider } from '@/components/Hero/HeroSlider';

import { HeroProps } from './Hero.props';

const banners = [
  {
    url: '/images/hero/hero-1.jpg',
    image_description: 'фото з наданням гуманітарної допомоги',
  },
  {
    url: '/images/hero/hero-2.jpg',
    image_description: 'фото з наданням гуманітарної допомоги',
  },
  {
    url: '/images/hero/hero-3.jpg',
    image_description: 'фото з наданням гуманітарної допомоги',
  },
  {
    url: '/images/hero/hero-4.jpg',
    image_description: 'фото з наданням гуманітарної допомоги',
  },
];

export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="pt-[125px] xl:pt-[190px] ">
      <div className="container">
        <div className="flex flex-col gap-y-[30px] border-b border-grey-60 pb-10 md:flex-row md:justify-between xl:pb-[126px]">
          <div className="flex flex-col gap-y-[30px] xl:mt-[94px] xl:w-[383px] 2xl:mt-[136px] 3xl:mt-[216px]">
            <Title tag="h1" variantSize="h1" className="whitespace-pre-wrap ">
              {data.title}
            </Title>
            <Paragraph variant="dark" variantFontSize="16">
              {data.subtitle}
            </Paragraph>
            <LinkButton
              variant="accent"
              href={data.button.href}
              className="inline-block xl:w-[276px]"
            >
              {data.button.text}
            </LinkButton>
          </div>
          <HeroSlider banners={banners} />
        </div>
      </div>
    </section>
  );
};
