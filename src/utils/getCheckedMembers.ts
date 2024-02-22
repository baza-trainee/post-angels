'use client';

import useBreakpoints from '@/utils/useBreakpoints';
import { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const getCheckedMembers = (members: TeamMember[]) => {
  const defaultMembers = {
    id: 'default',
    name: '',
    lastName: '',
    image: {
      alt: '',
      url: '',
    },
  };
  const checkedTeamMembers = [];
  const { bigger768px, less1280px, bigger1280px } = useBreakpoints();
  if (bigger768px && less1280px) {
    bigger768px && less1280px && members.length % 2 !== 0
      ? checkedTeamMembers.push(...members, defaultMembers)
      : checkedTeamMembers.push(...members);
  } else if (bigger1280px) {
    members.length % 3 === 0
      ? checkedTeamMembers.push(...members)
      : members.length % 3 === 1
        ? checkedTeamMembers.push(...members, defaultMembers, defaultMembers)
        : checkedTeamMembers.push(...members, defaultMembers);
  }

  return checkedTeamMembers;
};
