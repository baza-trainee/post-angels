export interface TechSliderProps {
  className?: string;
  imageData: {
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
}
