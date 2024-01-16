import { Title } from '@/components/typography/Title';
import { FinishedProjectSlider } from '@/components/Projects/FinishedProjectSlider';

import { FinishedProjectsProps } from './FinishedProjects.props';
import { ProjectCardProps } from '@/components/Projects/ProjectCard/ProjectsCard.props';
import { LinkButton } from '@/components/buttons/LinkButton';

export const FinishedProjects = async ({
  projects,
  finishedData,
}: {
  projects: FinishedProjectsProps;
  finishedData: ProjectCardProps[];
}) => {
  return (
    <section id="finishedProjects" className="pt-10">
      <div className="container">
        <Title tag="h2" variantSize="h2" className="mb-[30px] xl:mb-1">
          {projects.finishedProjects2023.title}
          <br />
          <span>{projects.finishedProjects2023.title1}</span>
        </Title>
        <FinishedProjectSlider projectsData={finishedData} projects={projects} isFinished />

        <LinkButton
          className="w-full md:w-[349px] lg:w-[465px]  xl:mx-auto xl:w-[276px]"
          href={projects.archiveBtn.link}
        >
          {projects.archiveBtn.text}
        </LinkButton>
      </div>
    </section>
  );
};
