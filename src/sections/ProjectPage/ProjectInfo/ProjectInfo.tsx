import { ProjectLinks } from '@/components/project/ProjectLinks';
import { StaticDataProps, ProjectDataInfoProps, ProjectDataProps } from '../ProjectPage.props';
import { Info } from '@/components/project/Info';
import { Supported } from '@/components/project/Supported';
import { Locale } from '@/i18n.config';

export const ProjectInfo = ({
  projectDataInfo,
  projectSupportInfo,
  project_details,
}: {
  projectDataInfo: ProjectDataProps;
  project_details: StaticDataProps;
  projectSupportInfo: ProjectDataInfoProps[];
}) => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <ProjectLinks project_details={project_details.link_nav} variant="info" />
        <div className="flex flex-col justify-between gap-y-[50px]  pt-[40px] xl:flex-row xl:gap-x-8 xl:pt-[30px]">
          <Info projectDataInfo={projectDataInfo} />
          <Supported
            projectSupportInfo={projectSupportInfo}
            project_details={project_details.info}
          />
        </div>
      </div>
    </section>
  );
};
