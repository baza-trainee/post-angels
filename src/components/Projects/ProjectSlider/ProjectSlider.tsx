'use client';

import classNames from 'classnames';
import { ProjectCard } from '@/components/Projects/ProjectCard';
import { Slider } from '@/components/Slider';
import { ProjectSliderProps } from '@/components/Projects/ProjectSlider/ProjectSlider.props';

export const ProjectSlider: React.FC<ProjectSliderProps> = ({
  projectsData,
  className = '',
  projects,
}) => {
  const wrapSliderClasses = classNames('h-auto', className);

  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="homepage-projects"
        className="project"
        data={projectsData}
        cardData={projects}
        element={ProjectCard}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        isLoop={true}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};
