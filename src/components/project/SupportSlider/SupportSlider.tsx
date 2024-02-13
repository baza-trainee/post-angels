'use client';

import { ProjectDataInfoProps } from '@/sections/ProjectPage/ProjectPage.props';
import classNames from 'classnames';
import { Slider } from '@/components/Slider';
import { SupportCard } from '@/components/project/SupportCard';

export const SupportSlider = ({
  projectDataInfo,
  project_details,
  className = '',
}: {
  projectDataInfo: ProjectDataInfoProps[];
  className?: string;
  project_details: string;
}) => {
  const wrapSliderClasses = classNames('h-auto  ', className);

  return (
    <div className={wrapSliderClasses}>
      <Slider
        id="supportSlider"
        className="supportSlider"
        data={projectDataInfo}
        cardData={project_details}
        element={SupportCard}
        isAutoplay={false}
        slidesPerView={{ mobile: 1, tablet: 1, desktop: 1, desktop3xl: 1 }}
        isLoop={false}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={false}
        isNavigation={true}
        isNumberPagination={true}
        isFinished={false}
        isGrid={6}
        navigationBreakpoints={{
          isMobile: true,
          isTablet: true,
          isDesktop: true,
        }}
      />
    </div>
  );
};
