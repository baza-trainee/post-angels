import { ProjectLinks } from '@/components/project/ProjectLinks';
import { StaticDataProps } from '../ProjectPage.props';
import { Paragraph } from '@/components/typography/Paragraph';

export const ProjectDocument = ({
  projectDataDoc,
  project_details,
}: {
  projectDataDoc: any;
  project_details: StaticDataProps;
}) => {
  return (
    <section>
      <div className="container">
        <ProjectLinks project_details={project_details.link_nav} variant="documents" />
        {projectDataDoc.length > 0 ? (
          <div>Documents</div>
        ) : (
          <Paragraph variant="dark_grey" className="py-10">
            {project_details.document.error_text}
          </Paragraph>
        )}
      </div>
    </section>
  );
};
