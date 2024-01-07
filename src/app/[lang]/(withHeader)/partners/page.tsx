import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  // const { common } = await getDictionary(lang);

  return (
    <section className="">

    </section>
  );
};

export default page;
