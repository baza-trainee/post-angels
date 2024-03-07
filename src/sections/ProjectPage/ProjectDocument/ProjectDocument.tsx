import { ProjectLinks } from '@/components/project/ProjectLinks';
import { ProjectDataInfoProps, StaticDataProps } from '../ProjectPage.props';
import { Paragraph } from '@/components/typography/Paragraph';
import { Supported } from '@/components/project/Supported';

export const ProjectDocument = ({
  projectDataDoc,
  project_details,
  projectSupportsData,
}: {
  projectDataDoc: any;
  projectSupportsData: ProjectDataInfoProps[];
  project_details: StaticDataProps;
}) => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <ProjectLinks project_details={project_details.link_nav} variant="documents" />
        <div className="flex flex-col justify-between gap-y-[50px]  pt-[40px] xl:flex-row xl:gap-x-8 xl:pt-[30px]">
          {projectDataDoc.length > 0 ? (
            <div>Documents</div>
          ) : (
            <Paragraph variant="dark_grey" className="py-10">
              {project_details.document.error_text}
            </Paragraph>
          )}
          <Supported
            projectSupportInfo={projectSupportsData}
            project_details={project_details.info}
          />
        </div>
      </div>
    </section>
  );
};
