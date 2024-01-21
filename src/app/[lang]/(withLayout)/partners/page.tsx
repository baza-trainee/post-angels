import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { ParticipantHero } from '@/components/Participant/ParticipantHero/ParticipantHero';
import { PartnersForm } from '@/components/Participant/PartnersForm/PartnersForm';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);

  const { title } = common.participant;
  const { description } = common.participant.partners;
  const { form } = common.participant.partners;

  return (
    <section className="pt-[113px] xl:pt-[188px]">
      <ParticipantHero
        title={title}
        accentTitle={description.accentTitle}
        description={description.text}
        img={description.img}
        alt={description.alt}
      />
      <PartnersForm
        inputFields={form.inputFields}
         />
    </section>
  );
};

export default page;
