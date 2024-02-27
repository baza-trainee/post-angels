import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { ParticipantHero } from '@/components/Participant/ParticipantHero/ParticipantHero';
import { VolunteersForm } from '@/components/Participant/VolunteersForm/VolunteersForm';


const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);

  const { title } = common.participant;
  const { description, form, schema } = common.participant.volunteers;

  return (
    <section className="pb-[100px] pt-[113px] xl:pt-[188px]">
      <ParticipantHero
        title={title}
        accentTitle={description.accentTitle}
        description={description.text}
        img={description.img}
        alt={description.alt}
      />
      <VolunteersForm
        inputFields={form.inputFields}
        waysVolunteering={form.waysVolunteering}
        volunteerCertificate={form.volunteerCertificate}
        carAvailability={form.carAvailability}
        reasonVolunteering={form.reasonVolunteering}
        descriptionTermsAgreement={form.descriptionTermsAgreement}
        descriptionPrivacyPolice={form.descriptionPrivacyPolice}
        buttonText={form.buttonText}
        schema={schema}
        lang={lang}
      />
    </section>
  );
};

export default page;
