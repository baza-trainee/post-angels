'use client';

import classNames from 'classnames';
import { ProjectCard } from '@/components/Projects/ProjectCard';
import { Slider } from '@/components/Slider';
import { ProjectSliderProps } from '@/components/Projects/ProjectSlider/ProjectSlider.props';

export const FinishedProjectSlider: React.FC<ProjectSliderProps> = ({
  projectsData,
  className = 'finishedProject',
  projects,
  lang,
}) => {
  const wrapSliderClasses = classNames('h-auto mb-[50px]', className);

  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="finishedProjects"
        className="finishedProjects"
        data={projectsData}
        cardData={projects}
        element={ProjectCard}
        lang={lang}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 3, desktop3xl: 4 }}
        isLoop={true}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        isFinished={true}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};
