import { ProjectLinks } from '@/components/project/ProjectLinks';
import { ProjectDataInfoProps, ProjectDocumentProps, StaticDataProps } from '../ProjectPage.props';
import { Paragraph } from '@/components/typography/Paragraph';
import { Supported } from '@/components/project/Supported';
import { FileIcon, defaultStyles } from 'react-file-icon';
import Link from 'next/link';

export const ProjectDocument = ({
  projectDataDoc,
  project_details,
  projectSupportsData,
}: {
  projectDataDoc: ProjectDocumentProps[];
  projectSupportsData: ProjectDataInfoProps[];
  project_details: StaticDataProps;
}) => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <ProjectLinks project_details={project_details.link_nav} variant="documents" />
        <div className="flex flex-col justify-between gap-y-[50px]  pt-[40px] xl:flex-row xl:gap-x-8 xl:pt-[30px]">
          <div className="grid h-fit w-full grid-cols-1 gap-5 md:grid-cols-2">
            {projectDataDoc.length > 0 ? (
              projectDataDoc.map(doc => {
                const ext = doc.href.data[0].attributes.ext.replace(
                  /^\./,
                  ''
                ) as keyof typeof defaultStyles;
                const fileIconProps = defaultStyles[ext];

                return (
                  <Link
                    key={doc.name}
                    className="flex h-fit items-center gap-x-4"
                    href={doc.href.data[0].attributes.url}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <div className="block w-10">
                      <FileIcon extension={doc.href.data[0].attributes.ext} {...fileIconProps} />
                    </div>
                    <Paragraph>{doc.title}</Paragraph>
                  </Link>
                );
              })
            ) : (
              <Paragraph variant="dark_grey" className="py-10">
                {project_details.document.error_text}
              </Paragraph>
            )}
          </div>
          <Supported
            projectSupportInfo={projectSupportsData}
            project_details={project_details.info}
          />
        </div>
      </div>
    </section>
  );
};
