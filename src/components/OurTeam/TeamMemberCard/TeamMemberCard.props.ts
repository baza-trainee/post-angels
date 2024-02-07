import { Locale } from '@/i18n.config';

export interface TeamMemberProps {
  member: TeamMember;
}
export type TeamMember = {
  name: string;
  img: string;
  lang?: Locale;
};
