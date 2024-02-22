import { Title } from '@/components/typography/Title';
import { FinishedProjectSlider } from '@/components/Projects/FinishedProjectSlider';

import { FinishedProjectsProps } from './FinishedProjects.props';
import { ProjectCardProps } from '@/components/Projects/ProjectCard/ProjectsCard.props';
import { LinkButton } from '@/components/buttons/LinkButton';
import { Locale } from '@/i18n.config';

export const FinishedProjects = async ({
  projects,
  finishedData,
  lang,
}: {
  projects: FinishedProjectsProps;
  finishedData: ProjectCardProps[];
  lang: Locale;
}) => {
  return (
    <section id="finishedProjects" className="pt-10">
      <div className="container relative">
        <Title tag="h2" variantSize="h2" className="absolute  ">
          {projects.finishedProjects2023.title}
          <br />
          <span>{projects.finishedProjects2023.title1}</span>
        </Title>
        <FinishedProjectSlider
          projectsData={finishedData}
          projects={projects}
          isFinished
          lang={lang}
        />

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
