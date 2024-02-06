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
  info: ProjectDataInfoProps;
}

export interface ProjectDataInfoProps {
  info: string;
  conclusion: string;
  title: string;
  supportData: ProjectSupportDataProps[];
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
  link_nav: StaticDataLinkNav[];
  info: StaticDataInfo;
  document: StaticDataDocuments;
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

export interface StaticDataLinkNav {
  name: string;
  title: string;
  href: string;
}

export interface StaticDataInfo {
  supportTitle: string;
  currency: string;
}

export interface StaticDataDocuments {
  error_text: string;
}

export interface ProjectSupportDataProps {
  id: string;
  name: string;
  sum: number;
  date: number;
  cardData?: string;
}
