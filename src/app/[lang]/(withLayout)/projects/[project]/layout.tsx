import { Locale } from '@/i18n.config';
import { revalidateTag } from 'next/cache';
import React from 'react';
import { getDictionary, getMetadata } from '@/lib/dictionary';
import { ProjectHero } from '@/sections/ProjectPage/ProjectHero';
import { fetchOneProject } from '@/api/fetchOneProject';
import { fetchProjectsSlug } from '@/api/fetchProjectsSlug';
import { Metadata } from 'next';

export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale; project: string };
}): Promise<Array<{ lang: Locale; project: string }>> {
  const projectsData = await fetchProjectsSlug(lang);

  const staticParams =
    projectsData?.map(project => {
      return {
        lang: lang,
        project: project.slug,
      };
    }) || [];

  return staticParams;
}

export async function generateMetadata({
  params,
}: {
  params: { project: string; lang: Locale };
}): Promise<Metadata> {
  const { project, lang } = params;
  const { meta } = await getMetadata(lang);

  const title = project.split('_').join(' ');
  return {
    title: meta.metadata.title,
    description: title,
  };
}

export default async function ProjectLayout({
  children,
  params: { lang, project },
}: {
  children: React.ReactNode;
  params: { lang: Locale; project: string };
}) {
  const projectData = await fetchOneProject(lang, project);
  const { project_details } = await getDictionary(lang);
  revalidateTag('project');
  const { projects } = projectData;

  return (
    <>
      <ProjectHero
        data={{
          id: projectData.projects.id,
          title: projects.attributes.title,
          all: projects.attributes.all,
          collected: projects.attributes.collected,
          startDate: projects.attributes.startDate,
          finishedDate: projects.attributes.finishedDate,
          organizer: projects.attributes.organizer,
          image: projects.attributes.image,
          socials: projects.attributes.socials,
          status: projects.attributes.status,
        }}
        staticData={project_details.hero}
        lang={lang}
      />
      {children}
    </>
  );
}
