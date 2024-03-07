import { Locale } from '@/i18n.config';
import { ProjectsProps } from '@/sections/Projects/Projects.props';

export interface ProjectCardProps {
  id: string;
  attributes: {
    image: {
      id: string;
      alt: string;
      src: {
        data: {
          attributes: {
            url: string;
            width?: number;
            height?: number;
          };
        };
      };
    };
    title: string;
    collected: number;
    all: number;
    startDate: Date;
    status: string;
    slug?: string;
  };
  isFinished?: boolean;
  lang?: Locale;
  cardData?: ProjectsProps;
}
