import { Locale } from '@/i18n.config';

export interface TeamMemberProps {
  member: TeamMember;
}
export interface TeamMember {
  id?: string;
  name: string;
  lastName: string;
  image: {
    alt: string;
    url: string;
  };
  lang?: Locale;
}

export interface TeammateAttributes {
  name: string;
  lastName: string;
  image: ImageAttributes;
}

export interface ImageAttributes {
  alt: string;
  src: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface TeammateData {
  id: string;
  attributes: TeammateAttributes;
}

export interface TeammatesResponse {
  teammates: {
    data: TeammateData[];
  };
}
