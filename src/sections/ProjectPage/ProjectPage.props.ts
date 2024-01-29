export interface ProjectHeroProps {
  id: string;
  image: ProjectImageProps;
  title: string;
  collected: number;
  all: number;
  startDate: string;
  finishedDate: string;
  organizer: ProjectOrganizerProps;
  socials: ProjectSocialProps[];
  status: string;
}

export interface ProjectDataProps {
  id: string;
  image: ProjectImageProps;
  title: string;
  collected: number;
  all: number;
  startDate: string;
  finishedDate: string;
  status: string;
  organizer: ProjectOrganizerProps;
  socials: ProjectSocialProps[];
}

export interface ProjectImageProps {
  src: string;
  alt: string;
}

export interface ProjectOrganizerProps {
  name: string;
  img: ProjectImageProps;
}

export interface ProjectSocialProps {
  name: string;
  link: string;
}

export interface StaticDataProps {
  hero: StaticDataHeroProps;
}

export interface StaticDataHeroProps {
  subtitle: string;
  collected: string;
  startDate: string;
  finishedDate: string;
  organizer: {
    title: string;
  };
  buttons: {
    finishedBtn: {
      text: string;
      href: string;
    };
    fundBtn: {
      text: string;
      href: string;
    };
  };
  socials: {
    icon: StaticDataSocialIcon[];
  };
}

export interface StaticDataSocialIcon {
  name: string;
  label: string;
  src: string;
}
