import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Contacts } from '@/sections/Contacts/Contacts';
import { Hero } from '@/sections/Hero/Hero';
import { PartnersTop } from '@/sections/PartnersTop';
import { Partners } from '@/sections/Partners';
import { Projects } from '@/sections/Projects';
import { FinishedProjects } from '@/sections/FinishedProjects';
import { Cooperation } from '@/sections/Cooperation';
import { WhatWeDo } from '@/sections/WhatWeDo';
import { AboutInNumbers } from '@/sections/AboutInNumbers';
import { fetchProjects } from '@/api/fetchProjects';

const getPartners = async (lang: Locale) => {
  console.log(lang);
  // запит до базиданних за партнерами.
  // якщо партнерів немає повинно повертати null
  const partner = [
    { name: 'partners1', src: '/images/partners/partners-1.png' },
    { name: 'partners2', src: '/images/partners/partners-2.png' },
    { name: 'partners3', src: '/images/partners/partners-3.png' },
    { name: 'partners4', src: '/images/partners/partners-1.png' },
    { name: 'partners5', src: '/images/partners/partners-2.png' },
    { name: 'partners6', src: '/images/partners/partners-3.png' },
    { name: 'partners7', src: '/images/partners/partners-1.png' },
    { name: 'partners8', src: '/images/partners/partners-2.png' },
    { name: 'partners9', src: '/images/partners/partners-3.png' },
    { name: 'partners10', src: '/images/partners/partners-1.png' },
    { name: 'partners11', src: '/images/partners/partners-2.png' },
    { name: 'partners12', src: '/images/partners/partners-3.png' },
  ];

  if (partner.length <= 0) {
    return null;
  }
  return partner;
};

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { contacts, hero, partners, projects, cooperation, whatWeDo, aboutInNumbers } = common;
  const partnersData = await getPartners(lang);
  const finishedData = await fetchProjects(lang, ['completed']);
  const projectData = await fetchProjects(lang, ['new', 'completed']);

  return (
    <main className="">
      <Hero data={hero} lang={lang} />
      {partnersData && <PartnersTop partnersData={partnersData} data={partners} />}
      <AboutInNumbers data={aboutInNumbers} />
      <WhatWeDo lang={lang} data={whatWeDo} />
      <Projects projects={projects} lang={lang} projectData={projectData} />

      {finishedData && (
        <FinishedProjects projects={projects} finishedData={finishedData} lang={lang} />
      )}
      {partnersData && <Partners partnersData={partnersData} data={partners} />}
      <Cooperation data={cooperation} />
      <Contacts data={contacts} />
    </main>
  );
}
