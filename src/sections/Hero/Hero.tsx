import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { LinkButton } from '@/components/buttons/LinkButton';

import { HeroSlider } from '@/components/Hero/HeroSlider';

import { HeroProps } from './Hero.props';
import { Locale } from '@/i18n.config';

import { fetchHero } from '@/api/fetchHero';

export const Hero = async ({ data, lang }: { data: HeroProps; lang: Locale }) => {
  const heroData = await fetchHero(lang);

  return (
    <section className="pt-[125px] xl:pt-[190px] " id="hero">
      <div className="container">
        <div className="flex flex-col gap-y-[30px] border-b border-grey-60 pb-10 md:flex-row md:justify-between md:gap-x-[30px] xl:pb-[126px]">
          <div className="flex flex-col gap-y-[30px] xl:mt-[94px] xl:w-[383px] 2xl:mt-[136px] 3xl:mt-[216px]">
            <Title tag="h1" variantSize="h1" className="whitespace-pre-wrap ">
              {heroData.title}
            </Title>
            <Paragraph variant="dark" variantFontSize="16">
              {heroData.subtitle}
            </Paragraph>
            <LinkButton
              variant="accent"
              href={data.button.href}
              className="inline-block xl:w-[276px]"
            >
              {data.button.text}
            </LinkButton>
          </div>
          {heroData?.image.length > 0 && <HeroSlider banners={heroData?.image} lang={lang} />}
        </div>
      </div>
    </section>
  );
};
