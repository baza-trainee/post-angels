import { Help } from '@/components/veterans/Help';
import { Tech } from '@/components/veterans/Tech';
import { Locale } from '@/i18n.config';

import { fetchVeterans } from '@/api/fetchVeterans';
import { Form } from '@/components/veterans/Form';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { resultTechnology, resultHelp } = await fetchVeterans(lang);
  const { common } = await getDictionary(lang);

  const { notice } = common.participant;
  const { description, form, schema, faq } = common.participant.veterans;

  return (
    <section className="mb-[100px] pt-[106px] xl:pt-[216px]">
      <div className="container flex flex-col gap-y-20 xl:gap-y-[100px]">
        <h1 className="hidden-h1">{description.title}</h1>
        <div className="flex flex-col gap-y-20">
          <Tech data={resultTechnology} faq={faq} />
          <Help data={resultHelp} descriptionData={description} faq={faq} />
          <Form
            inputFields={form.inputFields}
            problem={form.problem}
            identificationDocument={form.identificationDocument}
            descriptionTermsAgreement={form.descriptionTermsAgreement}
            buttonText={form.buttonText}
            schema={schema}
            notice={notice}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
