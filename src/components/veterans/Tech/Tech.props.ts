export interface TechProps {
  dictionaryData: {
    faq: {
      buttonAreaLabel: string;
    };
  };
  data: {
    title: string;
    description: string;
    image: {
      alt: string;
      id: number | string;
      src: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    technology: {
      name: string;
      text: string;
      image: {
        alt: string;
        id: number | string;
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
}
