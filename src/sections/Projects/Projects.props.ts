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
