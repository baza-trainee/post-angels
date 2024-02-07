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
import OurTeam from '@/sections/OurTeam/OurTeam';
import { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

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

const getFinishedProject = (lang: Locale) => {
  // get projects api

  const projects = {
    ua: [
      {
        id: 1,
        image: {
          src: '/images/projects/finished-project-1.jpg',
          alt: 'project1',
        },
        title: 'Збір на травматологічні матеріали',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 2,
        image: {
          src: '/images/projects/finished-project-2.jpg',
          alt: 'project2',
        },
        title: 'Збір на травматологічні матеріали',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 3,
        image: {
          src: '/images/projects/finished-project-3.jpg',
          alt: 'project3',
        },
        title: 'Збір на травматологічні матеріали',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 4,
        image: {
          src: '/images/projects/finished-project-4.jpg',
          alt: 'project4',
        },
        title: 'Збір на травматологічні матеріали',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
    ],
    en: [
      {
        id: 1,
        image: {
          src: '/images/projects/finished-project-1.jpg',
          alt: 'project1',
        },
        title: 'Collection for traumatology materials',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 2,
        image: {
          src: '/images/projects/finished-project-2.jpg',
          alt: 'project2',
        },
        title: 'Collection for traumatology materials',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 3,
        image: {
          src: '/images/projects/finished-project-3.jpg',
          alt: 'project3',
        },
        title: 'Collection for traumatology materials',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
      {
        id: 4,
        image: {
          src: '/images/projects/finished-project-4.jpg',
          alt: 'project4',
        },
        title: 'Collection for traumatology materials',
        collected: 68000,
        all: 68000,
        startDate: '18.11.23',
        status: 'new',
      },
    ],
  };
  return projects[lang];
};

const getTeam = (lang: Locale): TeamMember[] => {
  const teamMembers = {
    ua: [
      {
        name: 'Себастіан Сироїшка',
        img: '/images/ourteam/Sebastian.png',
      },
      {
        name: 'Остап Хома',
        img: '/images/ourteam/Ostap.png',
      },
      {
        name: 'Володимир Гавришевський',
        img: '/images/ourteam/Volodymyr.png',
      },
      {
        name: 'Гавриляк Руслан',
        img: '/images/ourteam/Ryslan.png',
      },
      {
        name: 'Марта Ковалишин',
        img: '/images/ourteam/Marta.png',
      },
    ],
    en: [
      {
        name: 'Sebastian Syroyishka',
        img: '/images/ourteam/Sebastian.png',
      },
      {
        name: 'Ostap Khoma',
        img: '/images/ourteam/Ostap.png',
      },
      {
        name: 'Volodymyr Havryshevsky',
        img: '/images/ourteam/Volodymyr.png',
      },
      {
        name: 'Gavrilyak Ruslan',
        img: '/images/ourteam/Ryslan.png',
      },
      {
        name: 'Marta Kovalyshyn',
        img: '/images/ourteam/Marta.png',
      },
    ],
  };

  return teamMembers[lang];
};

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { contacts, hero, partners, projects, cooperation, whatWeDo, aboutInNumbers, ourTeam } =
    common;
  const partnersData = await getPartners(lang);
  const finishedData = getFinishedProject(lang);
  const teamData = getTeam(lang);

  return (
    <main className="">
      <Hero data={hero} lang={lang} />
      {partnersData && <PartnersTop partnersData={partnersData} data={partners} />}
      <AboutInNumbers data={aboutInNumbers} />
      <WhatWeDo lang={lang} data={whatWeDo} />
      <Projects projects={projects} lang={lang} />

      {finishedData && (
        <FinishedProjects projects={projects} finishedData={finishedData} lang={lang} />
      )}
      {teamData && <OurTeam data={ourTeam} lang={lang} />}
      {partnersData && <Partners partnersData={partnersData} data={partners} />}
      <Cooperation data={cooperation} />
      <Contacts data={contacts} />
    </main>
  );
}
