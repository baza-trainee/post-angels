import { LinkButton } from '@/components/buttons/LinkButton';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const NotFound = async ({ params: { lang = 'uk' } }: { params: { lang: Locale } }) => {
  const { notfound } = (await getDictionary(lang)).common;

  return (
    <section className="background-404 h-[calc(100vh_-_156px)] min-h-[765px] pt-[174px] xl:h-full xl:pb-[100px] xl:pt-[150px]">
      <div className="container text-center">
        <Title
          tag="h1"
          variantSize="h1"
          className="mb-8 text-center font-eUkraineHead text-8xl font-bold text-grey-20 sm:mb-[52px] lg:text-[162px] xl:text-[162px] 2xl:text-[240px]"
        >
          404
        </Title>
        <Paragraph
          className="mx-auto mb-[95px] w-[320px] text-center font-eUkraineHead text-xl text-grey-20 lg:w-[540px] lg:font-bold 2xl:w-[790px] 2xl:text-3xl"
          variant="white"
          centered
        >
          {notfound.subtitle}
        </Paragraph>

        <LinkButton href="/" className="mt-10 h-14 w-full md:w-64" centered>
          {notfound.label}
        </LinkButton>
      </div>
    </section>
  );
};

export default NotFound;
