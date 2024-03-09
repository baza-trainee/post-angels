import { Title } from '@/components/typography/Title';
import { StaticDataInfo, ProjectDataInfoProps } from '@/sections/ProjectPage/ProjectPage.props';
import { SupportSlider } from '@/components/project/SupportSlider';
import { Paragraph } from '@/components/typography/Paragraph';

export const Supported = ({
  projectSupportInfo,
  project_details,
}: {
  projectSupportInfo: ProjectDataInfoProps[];
  project_details: StaticDataInfo;
}) => {
  return (
    <div className="xl:w-[584px] 2xl:w-[664px] 3xl:w-[904px]">
      <Title tag="h2" variantSize="h4" className="mb-5">
        {project_details.supportTitle}
      </Title>
      {projectSupportInfo.length > 0 ? (
        <SupportSlider
          projectDataInfo={projectSupportInfo}
          project_details={project_details.currency}
        />
      ) : (
        <Paragraph>{project_details.noSupport}</Paragraph>
      )}
    </div>
  );
};
