import { Title } from '@/components/typography/Title';
import { StaticDataInfo, ProjectDataInfoProps } from '@/sections/ProjectPage/ProjectPage.props';
import { SupportSlider } from '@/components/project/SupportSlider';

export const Supported = ({
  projectDataInfo,
  project_details,
}: {
  projectDataInfo: ProjectDataInfoProps;
  project_details: StaticDataInfo;
}) => {
  return (
    <div className="xl:w-[584px] 2xl:w-[664px] 3xl:w-[904px]">
      <Title tag="h2" variantSize="h4" className="mb-5">
        {project_details.supportTitle}
      </Title>
      <SupportSlider projectDataInfo={projectDataInfo} project_details={project_details.currency} />
    </div>
  );
};
