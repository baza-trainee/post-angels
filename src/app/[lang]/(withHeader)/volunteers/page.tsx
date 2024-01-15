import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { ParticipantHero } from '@/components/Participant/ParticipantHero/ParticipantHero';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);

  const { title } = common.participant;
  const { discription } = common.participant.volunteers;

  return (
    <section>
      <ParticipantHero
        title={title}
        accentTitle={discription.accentTitle}
        description={discription.text}
        img={discription.img}
        alt={discription.alt}
      />
    </section>
  );
};

export default page;
