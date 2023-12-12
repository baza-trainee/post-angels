import { LinkButton } from '@/components/buttons/LinkButton';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const NotFound = async ({ params: { lang = 'ua' } }: { params: { lang: Locale } }) => {
  const { notfound } = (await getDictionary(lang)).common;

  return (
    <section className="background-404 h-[calc(100vh_-_260px)] min-h-[765px] py-40">
      <div className="container text-center">
        <Title tag="h1" className="mb-[52px] text-center !text-[240px] font-bold text-white">
          404
        </Title>
        <Paragraph
          className="mx-auto mb-[95px] w-[680px] text-3xl font-bold"
          variant="white"
          centered
        >
          {notfound.subtitle}
        </Paragraph>

        <LinkButton href="/" className="mt-10 h-14 w-64" centered>
          {notfound.label}
        </LinkButton>
      </div>
    </section>
  );
};

export default NotFound;
