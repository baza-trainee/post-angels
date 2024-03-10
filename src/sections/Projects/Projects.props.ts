export interface ProjectsProps {
  filter: {
    title: string;
    filters: { name: string; mod: string }[];
  };
  sorting: { name: string; mod: string }[];

  ourProjects: {
    title: string;
    title1: string;
  };
  finishedProjects2023: {
    title: string;
    title1: string;
  };
  projectCard: {
    collected: string;
    starts: string;
    buttons: {
      fundBtn: {
        text: string;
        link: string;
      };
      moreBtn: {
        text: string;
        link: string;
      };
      finishedBtn: {
        text: string;
        link: string;
      };
    };
  };
  archiveBtn: {
    text: string;
    link: string;
  };
}

export interface ProjectsDataType {
  projects: {
    data: ProjectDataProps[];
  };
}

export interface ProjectDataProps {
  id: string;
  attributes: {
    title: string;
    all: number;
    collected: number;
    status: string;
    startDate: Date;
    image: {
      id: string;
      alt: string;
      src: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    };
  };
}

export interface ProjectsSlugsDataType {
  projects: {
    data: {
      attributes: {
        slug: string;
      };
    }[];
  };
}

export interface ProjectDataSlugsProps {
  slug: string;
}
