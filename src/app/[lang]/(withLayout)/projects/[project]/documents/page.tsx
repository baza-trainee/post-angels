import { Locale } from '@/i18n.config';
import { ProjectDocument } from '@/sections/ProjectPage/ProjectDocument';
import { getDictionary } from '@/lib/dictionary';
import { fetchOneProject } from '@/api/fetchOneProject';

const getProjectDataDocuments = async (project: string, lang: Locale) => {
  return [];
};

export default async function Project({ params }: { params: { project: string; lang: Locale } }) {
  const { project, lang } = params;
  const projectData = await getProjectDataDocuments(project, lang);
  const { project_details } = await getDictionary(lang);
  const projectInfoData = await fetchOneProject(lang, project);
  const { supportsData, projects } = projectInfoData;

  return (
    <ProjectDocument
      projectDataDoc={projects.attributes.document}
      projectSupportsData={supportsData}
      project_details={project_details}
    />
  );
}
