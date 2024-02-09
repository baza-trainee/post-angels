export interface HeroProps {
  button: {
    text: string;
    href: string;
  };
}

export interface HeroDataProps {
  title: string;
  subtitle: string;
  image: ImageProps[];
}

export interface HeroDataType {
  heroSection: {
    data: {
      attributes: HeroDataProps;
    };
  };
}

export interface ImageProps {
  alt: string;
  src: {
    data: {
      attributes: { url: string };
    };
  };
}
