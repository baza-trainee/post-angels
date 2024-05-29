'use client';

import { ProjectCard } from '@/components/Projects/ProjectCard'
import { ProjectSliderProps } from '@/components/Projects/ProjectSlider/ProjectSlider.props'
import { Slider } from '@/components/Slider'
import classNames from 'classnames'

export const ArchiveProjectsSlider = ({
  projectsData,
  className = 'archivedProject',
  projects,
  lang,
}: ProjectSliderProps) => {
  const wrapSliderClasses = classNames('h-auto mb-[50px]', className);

  projectsData.forEach(obj => {
    obj.attributes.status = 'completed';
  });

  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="archivedProjects"
        className="archivedProjects"
        data={projectsData}
        cardData={projects}
        element={ProjectCard}
        lang={lang}
        isGrid={1}
        isAutoplay={true}
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 3, desktop3xl: 4 }}
        isLoop={false}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        isFinished={true}
        isArchive={true}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};
