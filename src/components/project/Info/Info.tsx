import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { ProjectDataProps } from '@/sections/ProjectPage/ProjectPage.props';

export const Info = ({ projectDataInfo }: { projectDataInfo: ProjectDataProps }) => {
  return (
    <div className="flex flex-col gap-y-5 xl:w-[50%] 3xl:w-[748px]">
      <Title tag="h2" variantSize="h4" className="">
        {projectDataInfo.title}
      </Title>
      <Paragraph variant="dark_grey">{projectDataInfo.info}</Paragraph>
      <Paragraph>{projectDataInfo.conclusion}</Paragraph>
    </div>
  );
};
