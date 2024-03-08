import { Locale } from '@/i18n.config';
import { ProjectDocument } from '@/sections/ProjectPage/ProjectDocument';
import { getDictionary } from '@/lib/dictionary';
import { fetchOneProject } from '@/api/fetchOneProject';

export const revalidate = 600;

export default async function Project({ params }: { params: { project: string; lang: Locale } }) {
  const { project, lang } = params;
  const { project_details } = await getDictionary(lang);
  const projectInfoData = await fetchOneProject(lang, project);

  return <ProjectDocument projectInfoData={projectInfoData} project_details={project_details} />;
}
