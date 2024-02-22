import { Help } from '@/components/veterans/Help';
import Tech from '@/components/veterans/Tech/Tech';
import { Locale } from '@/i18n.config';

import { fetchVeterans } from '@/api/fetchVeterans';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { resultTechnology, resultHelp } = await fetchVeterans(lang);
  const { common } = await getDictionary(lang);
  const { veterans } = common;

  return (
    <section className="mb-[100px] pt-[106px] xl:pt-[216px]">
      <div className="container flex flex-col gap-y-20 xl:gap-y-[100px]">
        <h1 className="hidden-h1">{veterans.title}</h1>
        <div className="flex flex-col gap-y-20">
          <Tech data={resultTechnology} dictionaryData={veterans} />
          <Help data={resultHelp} />
        </div>
      </div>
    </section>
  );
};

export default page;
