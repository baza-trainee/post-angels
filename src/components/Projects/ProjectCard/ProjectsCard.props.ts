import { Locale } from '@/i18n.config';
import { ProjectsProps } from '@/sections/Projects/Projects.props';

export interface ProjectCardProps {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  collected: number;
  all: number;
  startDate: string;
  cardData?: ProjectsProps;
  isFinished?: boolean;
  status: string;
  lang?: Locale;
}
