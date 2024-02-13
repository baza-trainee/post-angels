'use client';

import { Filters } from '@/components/Projects/Filters';
import { ProjectSlider } from '@/components/Projects/ProjectSlider';
import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '../ProjectCard/ProjectsCard.props';
import { Locale } from '@/i18n.config';

const getFilteredData = (filterName: string, data: ProjectCardProps[]) => {
  switch (filterName) {
    case 'all':
      return data;

    case 'new':
      return data.filter(dataProject => dataProject.attributes.status === 'new');

    case 'completed':
      return data.filter(dataProject => dataProject.attributes.status === 'completed');

    default:
      return data;
  }
};

const getSortedData = (sortingMod: string, data: ProjectCardProps[]) => {
  switch (sortingMod) {
    case 'newFirst':
      return [...data].sort((a, b) => {
        const dateA = new Date(a.attributes.startDate).getTime();
        const dateB = new Date(b.attributes.startDate).getTime();
        return dateB - dateA;
      });

    case 'moreFunds':
      return [...data].sort((a, b) => {
        const percentA = a.attributes.collected / a.attributes.all;
        const percentB = b.attributes.collected / b.attributes.all;
        return percentB - percentA;
      });

    case 'lessFunds':
      return [...data].sort((a, b) => {
        const percentA = a.attributes.collected / a.attributes.all;
        const percentB = b.attributes.collected / b.attributes.all;
        return percentA - percentB;
      });

    case 'oldFirst':
      return [...data].sort((a, b) => {
        const dateA = new Date(a.attributes.startDate).getTime();
        const dateB = new Date(b.attributes.startDate).getTime();

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
  projectsData,
  lang,
}: {
  projects: ProjectsProps;
  projectsData: ProjectCardProps[];
  lang: Locale;
}) => {
  const [sortedProjects, setSortedProjects] = useState<ProjectCardProps[]>(projectsData);
  const [filterName, setFilterName] = useState<string>('all');
  const [sortingMod, setSortingMod] = useState<string>('newFirst');

  useEffect(() => {
    const filtered = getFilteredData(filterName, projectsData);
    const sorted = getSortedData(sortingMod, filtered);

    setSortedProjects(sorted);
  }, [projectsData, filterName, sortingMod]);

  const checkFilter = (name: string) => {
    setFilterName(name);
  };

  const checkSort = (mode: string) => {
    setSortingMod(mode);
  };

  return (
    <>
      <Filters projects={projects} checkFilter={checkFilter} checkSort={checkSort} />
      <ProjectSlider projectsDat={sortedProjects} projects={projects} lang={lang} />
    </>
  );
};
