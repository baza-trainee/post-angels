export interface WhatWeDoProps {
  title1: string;
  title2: string;

  workWith: WhatWeDoCardProps[];
}

export interface WhatWeDoCardProps {
  title: string;
  subTitle: string;
  text: string;
  img: string;
  alt: string;
  linkTitle: string;
  href: string;
}
