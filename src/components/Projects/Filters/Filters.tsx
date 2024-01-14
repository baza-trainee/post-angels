'use client';

import { Locale } from '@/i18n.config';
import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { useState } from 'react';

export const Filters = ({
  projects,
  setFilterName,
  setSortingMod,
  lang,
}: {
  projects: ProjectsProps;
  setFilterName: any;
  setSortingMod: any;
  lang: Locale;
}) => {
  const values = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleClick = () => {
    setFilterName('finished');
  };

  const handleSortClick = () => {
    setSortingMod('oldFirst');
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Фільтр</button>
      </div>

      <div>
        <button onClick={handleSortClick}>Сортування</button>
      </div>
    </div>
  );
};
