'use client';

import { Filters } from '@/components/Projects/Filters';
import { ProjectSlider } from '@/components/Projects/ProjectSlider';
import { Locale } from '@/i18n.config';
import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '../ProjectCard/ProjectsCard.props';

const getFilteredData = (filterName: string, data: ProjectCardProps[]) => {
  switch (filterName) {
    case 'all':
      return data;

    case 'new':
      return data.filter(dataProject => dataProject.status === 'new');

    case 'finished':
      return data.filter(dataProject => dataProject.status === 'finished');

    default:
      return data;
  }
};

const getSortedData = (sortingMod: string, data: ProjectCardProps[]) => {
  switch (sortingMod) {
    case 'newFirst':
      return data.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();

        return dateA - dateB;
      });

    case 'moreFunds':
      return data.sort((a, b) => {
        const percentA = a.collected / a.all;
        const percentB = b.collected / b.all;
        return percentA - percentB;
      });

    case 'lessFunds':
      return data.sort((a, b) => {
        const percentA = a.collected / a.all;
        const percentB = b.collected / b.all;
        return percentB - percentA;
      });

    case 'oldFirst':
      return data.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();

        return dateA - dateB;
      });

    case 'default':
      return data;
    default:
      return data;
  }
};

export const ProjectsList = ({
  projects,
  lang,
  projectsData,
}: {
  projects: ProjectsProps;
  lang: Locale;
  projectsData: ProjectCardProps[];
}) => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>(projectsData);
  const [sortedProjects, setSortedProjects] = useState<ProjectCardProps[]>(filteredProjects);
  const [filterName, setFilterName] = useState<string>('all');
  const [sortingMod, setSortingMod] = useState<string>('default');

  useEffect(() => {
    const filtered = getFilteredData(filterName, projectsData);
    setFilteredProjects(filtered);
  }, [filterName, projectsData]);

  useEffect(() => {
    const sorted = getSortedData(sortingMod, filteredProjects);
    setSortedProjects(sorted);
  }, [sortingMod, filteredProjects]);

  return (
    <>
      <Filters
        projects={projects}
        lang={lang}
        setFilterName={setFilterName}
        setSortingMod={setSortingMod}
      />
      <ProjectSlider projectsData={sortedProjects} projects={projects} />
    </>
  );
};
