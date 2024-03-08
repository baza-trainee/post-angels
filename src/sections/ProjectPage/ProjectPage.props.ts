export interface ProjectHeroProps {
  id: string;
  image: ProjectImageProps;
  title: string;
  collected: number;
  all: number;
  startDate: Date;
  finishedDate?: Date;
  organizer: ProjectOrganizerProps;
  socials: ProjectSocialProps[];
  status: string;
}

export interface ProjectDataProps {
  image: ProjectImageProps;
  title: string;
  collected: number;
  all: number;
  startDate: Date;
  finishedDate?: Date;
  status: string;
  conclusion: string;
  organizer: ProjectOrganizerProps;
  socials: ProjectSocialProps[];
  info: string;
  document: ProjectDocumentProps[];
}

export interface ProjectDocumentProps {
  name: string;
  title: string;
  href: {
    data: { attributes: { url: string; ext: string } }[];
  };
}

export interface ProjectDataInfoProps {
  id: string;
  attributes: { name: string; sum: number; date: Date };
}

export interface ProjectImageProps {
  src: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  alt: string;
}

export interface ProjectOrganizerProps {
  name: string;
  image: ProjectImageProps;
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
  noSupport: string;
  currency: string;
}

export interface StaticDataDocuments {
  error_text: string;
}

export interface ProjectSupportDataProps {
  id: string;
  attributes: {
    name: string;
    sum: number;
    date: Date;
  };
  cardData?: string;
}

export interface ProjectOneDataType {
  projects: {
    data: {
      id: string;
      attributes: ProjectDataProps;
    }[];
  };
  supportsData: {
    data: ProjectSupportDataProps[];
  };
}

export interface ProjectOneDataProps {
  supportsData: ProjectSupportDataProps[];
  projects: {
    id: any;
    attributes: ProjectDataProps;
  };
}
