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
  console.log('slider');
  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="projectSlider"
        className="projectSlider"
        data={projectsData}
        cardData={projects}
        element={ProjectCard}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        isLoop={false}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        isFinished={false}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};
