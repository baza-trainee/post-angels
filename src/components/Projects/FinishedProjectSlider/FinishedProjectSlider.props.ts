import { ProjectsProps } from '@/sections/Projects/Projects.props';
import { ProjectCardProps } from '../ProjectCard/ProjectsCard.props';

export interface ProjectSliderProps {
  projectsData: ProjectCardProps[];
  className?: string;
  projects: ProjectsProps;
}
