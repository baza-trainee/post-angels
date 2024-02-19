import { ContentMap } from '@/components/about/ContentMap';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { title, content } = common.about;
  return (
    <section className="mb-[100px] pt-[106px] xl:pt-[216px] " id="scroll">
      <div className="container flex flex-col gap-y-20 xl:gap-y-[100px]">
        <h1 className="hidden-h1">{title}</h1>
        <ContentMap data={content} />
      </div>
    </section>
  );
};

export default page;
