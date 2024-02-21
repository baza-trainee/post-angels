import { Locale } from '@/i18n.config';

export interface TeamMemberProps {
  member: TeamMember;
}
export interface TeamMember {
  name: string;
  lastName: string;
  image: ImageAttributes;
  lang?: Locale;
}

export interface TeammateAttributes {
  name: string;
  lastName: string;
  image: ImageAttributes;
}

export interface ImageAttributes {
  alt: string;
  src: SrcAttributes;
}

export interface SrcAttributes {
  data: DataAttributes;
}

export interface DataAttributes {
  attributes: UrlAttributes;
}

export interface UrlAttributes {
  url: string;
}

export interface TeammateData {
  attributes: TeammateAttributes;
}

export interface TeammatesResponse {
  teammates: any;
  data: TeammateData[];
}
