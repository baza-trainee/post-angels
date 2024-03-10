export interface HelpProps {
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
    };
    helps: {
      name: string;
      text: string;
    }[];
  };
  dictionaryData: {
    faq: {
      buttonAreaLabel: string;
    };
    help: string;
  };
}
