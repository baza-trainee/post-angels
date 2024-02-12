import { Title } from '@/components/typography/Title';
import { ProjectsList } from '@/components/Projects/ProjectsList';

import { ProjectsProps } from './Projects.props';
import { Locale } from '@/i18n.config';

// const getProjects = async (lang: Locale) => {
//   // get projects api

//   const projects = {
//     uk: [
//       {
//         id: 1,
//         image: {
//           src: '/images/projects/project-1.jpg',
//           alt: 'project1',
//         },
//         title: 'Збір на травматологічні матеріали',
//         collected: 20000,
//         all: 68000,
//         startDate: '2023-01-01',
//         status: 'new',
//       },
//       {
//         id: 2,
//         image: {
//           src: '/images/projects/project-2.jpg',
//           alt: 'project2',
//         },
//         title: 'Збір на травматологічні матеріали',
//         collected: 13444,
//         all: 68000,
//         startDate: '2023-03-18',
//         status: 'new',
//       },
//       {
//         id: 3,
//         image: {
//           src: '/images/projects/project-3.jpg',
//           alt: 'project3',
//         },
//         title: 'Збір на травматологічні матеріали',
//         collected: 1444,
//         all: 68000,
//         startDate: '2023-02-22',
//         status: 'new',
//       },
//       {
//         id: 4,
//         image: {
//           src: '/images/projects/project-4.jpg',
//           alt: 'project4',
//         },
//         title: 'Збір на травматологічні матеріали',
//         collected: 51000,
//         all: 68000,
//         startDate: '2023-05-15',
//         status: 'completed',
//       },
//     ],
//     en: [
//       {
//         id: 1,
//         image: {
//           src: '/images/projects/project-1.jpg',
//           alt: 'project1',
//         },
//         title: 'Collection for traumatology materials',
//         collected: 20000,
//         all: 68000,
//         startDate: '2023-01-01',
//         status: 'new',
//       },
//       {
//         id: 2,
//         image: {
//           src: '/images/projects/project-2.jpg',
//           alt: 'project2',
//         },
//         title: 'Collection for traumatology materials',
//         collected: 13444,
//         all: 68000,
//         startDate: '2023-03-18',
//         status: 'new',
//       },
//       {
//         id: 3,
//         image: {
//           src: '/images/projects/project-3.jpg',
//           alt: 'project3',
//         },
//         title: 'Collection for traumatology materials',
//         collected: 1444,
//         all: 68000,
//         startDate: '2023-02-22',
//         status: 'new',
//       },
//       {
//         id: 4,
//         image: {
//           src: '/images/projects/project-4.jpg',
//           alt: 'project4',
//         },
//         title: 'Collection for traumatology materials',
//         collected: 51000,
//         all: 68000,
//         startDate: '2023-05-15',
//         status: 'completed',
//       },
//     ],
//   };
//   return projects[lang];
// };

export const Projects = async ({
  projects,
  lang,
  projectData,
}: {
  projects: ProjectsProps;
  lang: Locale;
  projectData: any;
}) => {
  // const projectsData = await getProjects(lang);

  return (
    <section id="projectSlider" className="pt-20 xl:pt-[100px]">
      <div className="container">
        <Title tag="h2" variantSize="h2" className="mb-[30px]">
          {projects.ourProjects.title}
          <br />
          <span>{projects.ourProjects.title1}</span>
        </Title>
        <ProjectsList projects={projects} projectsData={projectData} lang={lang} />
      </div>
    </section>
  );
};
