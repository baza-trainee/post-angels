'use client';

import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph';
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState('all');

  const handleClick = (mode: string) => {
    setFilterName(mode);
    setIsFilterOpen(false);
    setCheckedFilter(mode);
  };

  const handleSortClick = (mode: string) => {
    console.log(mode);
    setSortingMod(mode);
  };

  return (
    <div className="flex gap-x-8">
      <div className="relative w-[200px]">
        <button
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex w-[200px] items-center justify-center gap-x-2 rounded-2xl border border-grey-60 bg-transparent p-[14px] "
        >
          <ICONS.FILTER className="h-6 w-6" />
          <Paragraph variantFontSize="14" variant="dark_grey">
            {projects.filter.title}
          </Paragraph>
        </button>
        {isFilterOpen && (
          <ul className="shadow-shadow absolute left-0 top-[60px] z-10 flex w-full flex-col gap-y-4 rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px]">
            {projects.filter.filters.map(filter => {
              return (
                <li
                  key={filter.mod}
                  onClick={() => handleClick(filter.mod)}
                  className={`${
                    filter.mod !== 'fundraising' ? 'cursor-pointer' : 'pointer-events-none'
                  }`}
                >
                  <Paragraph
                    variantFontSize="14"
                    variant="dark_grey"
                    className={`${
                      checkedFilter === filter.mod ? '!text-accent-primary' : 'text-inherit'
                    }`}
                  >
                    {filter.name}
                  </Paragraph>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="relative w-[432px]">
        <button
          type="button"
          onClick={() => setIsSortingOpen(!isSortingOpen)}
          className="flex w-[432px] items-start justify-start gap-x-2 rounded-2xl border border-grey-60 bg-transparent p-[14px] "
        >
          <ICONS.FILTER className="h-6 w-6" />
          <Paragraph variantFontSize="14" variant="dark_grey">
            {projects.sorting[0].name}
          </Paragraph>

          {isSortingOpen && (
            <ul className="shadow-shadow absolute left-0 top-[60px] z-10 flex w-full flex-col gap-y-4 rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px]">
              {projects.sorting.map(sort => {
                return (
                  <li
                    key={sort.mod}
                    onClick={() => handleSortClick(sort.mod)}
                    className={`${
                      sort.mod !== 'fundraising' ? 'cursor-pointer' : 'pointer-events-none'
                    }`}
                  >
                    <Paragraph
                      variantFontSize="14"
                      variant="dark_grey"
                      className={`${
                        checkedFilter === sort.mod ? '!text-accent-primary' : 'text-inherit'
                      } text-left`}
                    >
                      {sort.name}
                    </Paragraph>
                  </li>
                );
              })}
            </ul>
          )}
        </button>
      </div>
    </div>
  );
};
