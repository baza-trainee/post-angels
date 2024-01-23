import { ContentMap } from '@/components/about/ContentMap';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { about } = common;

  return (
    <section className="mb-2 pb-10 pt-[106px] font-eUkraine xl:pb-12 xl:pt-[216px] ">
      <h1 className="absolute">&nbsp;</h1>
      <div className="container">
        <ContentMap data={about} />
      </div>
    </section>
  );
};

export default page;
