export interface BannerProps {
  src: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  alt: string;
  ind?: number;
}
