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
import { fetchPartners } from '@/api/fetchPartners';
import { ScrollBtn } from '@/components/ScrollBtn/ScrollBtn';
import { fetchTeam } from '@/api/fetchTeam';
import OurTeam from '@/sections/OurTeam/OurTeam';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const {
    contacts,
    hero,
    partners,
    projects,
    cooperation,
    whatWeDo,
    aboutInNumbers,
    scrollbtn,
    ourTeam,
  } = common;
  const partnersData = await fetchPartners(lang);
  const finishedData = await fetchProjects(lang, ['completed']);
  const projectData = await fetchProjects(lang, ['new', 'completed']);
  const teamData = await fetchTeam(lang);

  return (
    <>
      <Hero data={hero} lang={lang} />
      {partnersData.length !== 0 && <PartnersTop partnersData={partnersData} data={partners} />}
      <AboutInNumbers data={aboutInNumbers} />
      <WhatWeDo lang={lang} data={whatWeDo} />
      {projectData.length !== 0 && (
        <Projects projects={projects} lang={lang} projectData={projectData} />
      )}

      {finishedData.length !== 0 && (
        <FinishedProjects projects={projects} finishedData={finishedData} lang={lang} />
      )}
      <OurTeam data={ourTeam} lang={lang} />
      {partnersData.length !== 0 && <Partners partnersData={partnersData} data={partners} />}
      <Cooperation data={cooperation} />
      <Contacts data={contacts} />
      <ScrollBtn data={scrollbtn} />
    </>
  );
}
