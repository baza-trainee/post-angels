export interface FAQProps {
  dictionaryData: {
    buttonAreaLabel: string;
  };
  data: {
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
  };
}
