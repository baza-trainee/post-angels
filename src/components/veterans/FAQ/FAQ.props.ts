export interface FAQProps {
  data: {
    name: string;
    text: string;
    image?: {
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
  };
  isPreOpen: boolean;
  faq: {
    button: {
      label: string;
    };
  };
}
