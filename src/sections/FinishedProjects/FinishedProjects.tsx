import { Title } from '@/components/typography/Title';
import { FinishedProjectSlider } from '@/components/Projects/FinishedProjectSlider';

import { FinishedProjectsProps } from './FinishedProjects.props';
import { ProjectCardProps } from '@/components/Projects/ProjectCard/ProjectsCard.props';

export const FinishedProjects = async ({
  projects,
  finishedData,
}: {
  projects: FinishedProjectsProps;
  finishedData: ProjectCardProps[];
}) => {
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
