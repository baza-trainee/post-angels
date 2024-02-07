import { Locale } from '@/i18n.config';
import type { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export interface OurTeamProps {
  title1: string;
  title2: string;

  teamData: TeamMember[];
  lang?: Locale;
}

export interface OurTeamListProps {
  teamMembers: TeamMember[];
  lang?: Locale;
}
