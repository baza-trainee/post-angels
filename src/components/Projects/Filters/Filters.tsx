'use client';

import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph';

import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { useState, useRef, useEffect, useCallback } from 'react';

export const Filters = ({
  projects,
  checkFilter,
  checkSort,
}: {
  projects: ProjectsProps;
  checkFilter: (mode: string) => void;
  checkSort: (mode: string) => void;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState('all');
  const [checkedSorting, setCheckedSorting] = useState(projects.sorting[0].name);
  const filterRef = useRef<HTMLUListElement>(null);
  const sortRef = useRef<HTMLUListElement>(null);

  const closeFilterOutside = useCallback(
    (e: MouseEvent) => {
      if (filterRef.current && isFilterOpen && !filterRef.current?.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    },
    [isFilterOpen]
  );

  const closeSortingOutside = useCallback(
    (e: MouseEvent) => {
      if (sortRef.current && isSortingOpen && !sortRef.current?.contains(e.target as Node)) {
        setIsSortingOpen(false);
      }
    },
    [isSortingOpen]
  );

  useEffect(() => {
    document.addEventListener('click', closeFilterOutside);
    return () => {
      document.removeEventListener('click', closeFilterOutside);
    };
  }, [closeFilterOutside]);

  useEffect(() => {
    document.addEventListener('click', closeSortingOutside);
    return () => {
      document.removeEventListener('click', closeSortingOutside);
    };
  }, [closeSortingOutside]);

  const handleClick = (mode: string) => {
    setIsFilterOpen(false);
    setCheckedFilter(mode);
    checkFilter(mode);
  };

  const handleSortClick = (mode: string, name: string) => {
    setCheckedSorting(name);
    setIsSortingOpen(false);

    checkSort(mode);
  };

  return (
    <div className="mb-10 flex flex-col gap-x-8 gap-y-[30px] md:flex-row xl:mb-1">
      <div className="relative w-full md:basis-1/2 xl:basis-[200px]">
        <button
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex w-full items-center justify-start gap-x-2 rounded-2xl border border-grey-60 bg-transparent p-[14px] xl:justify-center "
        >
          <ICONS.FILTER className="h-6 w-6" />
          <Paragraph variantFontSize="14" variant="dark_grey">
            {projects.filter.title}
          </Paragraph>
        </button>
        {isFilterOpen && (
          <ul
            ref={filterRef}
            className="absolute left-0 top-[60px] z-10 flex w-full flex-col gap-y-4 rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px] shadow-shadow"
          >
            {projects.filter.filters.map(filter => {
              return (
                <li
                  key={filter.mod}
                  onClick={() => handleClick(filter.mod)}
                  className={`${
                    filter.mod !== 'fundraising'
                      ? 'cursor-pointer transition duration-300 hover:text-orange'
                      : 'pointer-events-none text-grey-120'
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
      <div className="relative w-full md:basis-1/2 xl:basis-[432px]">
        <button
          type="button"
          onClick={() => setIsSortingOpen(!isSortingOpen)}
          className="flex w-full items-center justify-start gap-x-2 rounded-2xl border border-grey-60 bg-transparent p-[14px] "
        >
          <ICONS.SORT className="h-6 w-6" />
          <Paragraph variantFontSize="14" variant="dark_grey">
            {checkedSorting}
          </Paragraph>

          {isSortingOpen && (
            <ul
              ref={sortRef}
              className="absolute left-0 top-[60px] z-10 flex w-full flex-col gap-y-4 rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px] shadow-shadow"
            >
              {projects.sorting.map(sort => {
                return (
                  <li
                    key={sort.mod}
                    onClick={() => handleSortClick(sort.mod, sort.name)}
                    className={`cursor-pointer transition duration-300 hover:text-orange`}
                  >
                    <Paragraph
                      variantFontSize="14"
                      variant="dark_grey"
                      className={`text-left ${
                        sort.name === checkedSorting ? '!text-accent-primary' : 'text-inherit'
                      } `}
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
