import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { ProjectCardProps } from '../ProjectCard/ProjectsCard.props';
import { Locale } from '@/i18n.config';

export interface ProjectSliderProps {
  projectsData: ProjectCardProps[];
  className?: string;
  projects: ProjectsProps;
  isFinished?: boolean;
  lang: Locale;
}
