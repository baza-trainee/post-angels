import { fetchOneProject } from '@/api/fetchOneProject';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { ProjectInfo } from '@/sections/ProjectPage/ProjectInfo';
export const revalidate = 600;
export default async function Project({ params }: { params: { project: string; lang: Locale } }) {
  const { project, lang } = params;

  const { project_details } = await getDictionary(lang);
  const projectData = await fetchOneProject(lang, project);
  const { projects, supportsData } = projectData;

  return (
    <ProjectInfo
      projectDataInfo={projects.attributes}
      projectSupportInfo={supportsData}
      project_details={project_details}
    />
  );
}
