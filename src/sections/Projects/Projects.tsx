import { Title } from '@/components/typography/Title';
import { ProjectsList } from '@/components/Projects/ProjectsList';

import { ProjectsProps } from './Projects.props';
import { Locale } from '@/i18n.config';

export const Projects = async ({
  projects,
  lang,
  projectData,
}: {
  projects: ProjectsProps;
  lang: Locale;
  projectData: any;
}) => {
  return (
    <section id="projectSlider" className="pt-20 xl:pt-[100px]">
      <div className="container relative">
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
