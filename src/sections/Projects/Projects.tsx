import { Title } from '@/components/typography/Title';
import { ProjectsList } from '@/components/Projects/ProjectsList';

import { ProjectsProps } from './Projects.props';
import { Locale } from '@/i18n.config';

const getProjects = async (lang: Locale) => {
  // get projects api
  const projects = [
    {
      id: 1,
      image: {
        src: '/images/projects/project-1.jpg',
        alt: 'project1',
      },
      title: 'Збір на травматологічні матеріали',
      collected: 13444,
      all: 68000,
      startDate: '01.01.24',
      status: 'new',
    },
    {
      id: 2,
      image: {
        src: '/images/projects/project-2.jpg',
        alt: 'project2',
      },
      title: 'Збір на травматологічні матеріали',
      collected: 13444,
      all: 68000,
      startDate: '18.09.23',
      status: 'new',
    },
    {
      id: 3,
      image: {
        src: '/images/projects/project-3.jpg',
        alt: 'project3',
      },
      title: 'Збір на травматологічні матеріали',
      collected: 13444,
      all: 68000,
      startDate: '18.08.23',
      status: 'new',
    },
    {
      id: 4,
      image: {
        src: '/images/projects/project-4.jpg',
        alt: 'project4',
      },
      title: 'Збір на травматологічні матеріали',
      collected: 13444,
      all: 68000,
      startDate: '18.12.23',
      status: 'finished',
    },
  ];
  return projects;
};

export const Projects = async ({ projects, lang }: { projects: ProjectsProps; lang: Locale }) => {
  const projectsData = await getProjects(lang);

  return (
    <section id="projectSlider">
      <div className="container">
        <Title tag="h2" variantSize="h2" className="mb-[30px]">
          {projects.ourProjects.title}
          <br />
          <span>{projects.ourProjects.title1}</span>
        </Title>
        <ProjectsList projects={projects} lang={lang} projectsData={projectsData} />
      </div>
    </section>
  );
};
