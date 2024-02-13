import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { ProjectCardProps } from '../ProjectCard/ProjectsCard.props';
import { Locale } from '@/i18n.config';

export interface ProjectSliderProps {
  projectsDat: ProjectCardProps[];
  className?: string;
  projects: ProjectsProps;
  isFinished?: boolean;
  lang: Locale;
}
