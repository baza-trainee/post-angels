export interface TechProps {
  data: {
    title: string;
    description: string;
    image: {
      alt: string;
      id: string;
      src: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    }[];
    technology: {
      name: string;
      text: string;
      image: {
        alt: string;
        id: string;
        src: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }[];
  };
  faq: {
    button: {
      label: string;
    };
  };
}
