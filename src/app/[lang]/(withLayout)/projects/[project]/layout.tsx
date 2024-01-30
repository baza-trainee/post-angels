import { Locale } from '@/i18n.config';

import React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { ProjectHero } from '@/sections/ProjectPage/ProjectHero';

const getProjectData = async (project: string, lang: Locale) => {
  // GEt API//
  const projectData = {
    ua: {
      id: project,
      image: {
        src: `/images/project/project-${project}.jpg`,
        alt: 'project3',
      },
      title: 'Збір на травматологічні матеріали',
      collected: 1444,
      all: 68000,
      startDate: '2023-02-22',
      finishedDate: '',
      status: 'new',
      organizer: {
        name: 'Цегельник Вікторія Василівна',
        img: {
          src: '/images/project/project-org-foto.png',
          alt: 'Світлина організатора збору',
        },
      },
      socials: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/PostAngeles.Lviv',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/post_angeles_lviv/',
        },
      ],
    },
    en: {
      id: project,
      image: {
        src: `/images/project/project-${project}.jpg`,
        alt: 'project3',
      },
      title: 'Collection for traumatology materials',
      collected: 1444,
      all: 68000,
      startDate: '2023-02-22',
      finishedDate: '',
      status: 'new',
      organizer: {
        name: 'Tsehelnyk Viktoriia Vasylivna',
        img: {
          src: '/images/project/project-org-foto.png',
          alt: 'The photo of the collection organizer',
        },
      },
      socials: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/PostAngeles.Lviv',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/post_angeles_lviv/',
        },
      ],
    },
  };
  return projectData[lang];
};

export default async function ProjectLayout({
  children,
  params: { lang, project },
}: {
  children: React.ReactNode;
  params: { lang: Locale; project: string };
}) {
  const projectData = await getProjectData(project, lang);
  const { project_details } = await getDictionary(lang);

  return (
    <main>
      <ProjectHero
        data={{
          id: projectData.id,
          title: projectData.title,
          all: projectData.all,
          collected: projectData.collected,
          startDate: projectData.startDate,
          finishedDate: projectData.finishedDate,
          organizer: projectData.organizer,
          image: projectData.image,
          socials: projectData.socials,
          status: projectData.status,
        }}
        staticData={project_details.hero}
      />
      {children}
    </main>
  );
}
