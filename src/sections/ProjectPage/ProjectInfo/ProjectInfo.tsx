import { ProjectLinks } from '@/components/project/ProjectLinks';
import { StaticDataProps, ProjectDataInfoProps } from '../ProjectPage.props';
import { Info } from '@/components/project/Info';
import { Supported } from '@/components/project/Supported';

export const ProjectInfo = ({
  projectDataInfo,
  project_details,
}: {
  projectDataInfo: ProjectDataInfoProps;
  project_details: StaticDataProps;
}) => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <ProjectLinks project_details={project_details.link_nav} variant="info" />
        <div className="flex flex-col justify-between gap-y-[50px]  pt-[40px] xl:flex-row xl:gap-x-8 xl:pt-[30px]">
          <Info projectDataInfo={projectDataInfo} />
          <Supported projectDataInfo={projectDataInfo} project_details={project_details.info} />
        </div>
      </div>
    </section>
  );
};
