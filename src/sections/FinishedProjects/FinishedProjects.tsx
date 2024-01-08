import { Title } from '@/components/typography/Title';
import { FinishedProjectSlider } from '@/components/Projects/FinishedProjectSlider';

import { ProjectsProps } from './FinishedProjects.props';
import { Locale } from '@/i18n.config';

const getFinishedProject = async (lang: Locale) => {
  // get projects api
  const projects = [
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
    },
  ];
  return projects;
};

export const FinishedProjects = async ({
  projects,
  lang,
}: {
  projects: ProjectsProps;
  lang: Locale;
}) => {
  const finishedData = await getFinishedProject(lang);
  return (
    <section id="finishedProjects">
      <div className="container">
        <Title tag="h2" variantSize="h2" className="mb-[30px]">
          {projects.finishedProjects2023.title}
          <br />
          <span>{projects.finishedProjects2023.title1}</span>
        </Title>
        <FinishedProjectSlider projectsData={finishedData} projects={projects} isFinished />
      </div>
    </section>
  );
};
