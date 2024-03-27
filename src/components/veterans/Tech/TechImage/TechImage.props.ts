export interface TechImageProps {
  alt: string;
  id: string;
  src: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
