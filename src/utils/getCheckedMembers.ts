'use client';

import useBreakpoints from '@/utils/useBreakpoints';
import { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const getCheckedMembers = (members: TeamMember[]) => {
  const defaultMembers1 = {
    id: 'default1',
    name: '',
    lastName: '',
    image: {
      alt: '',
      url: '',
    },
  };
  const defaultMembers2 = {
    id: 'default2',
    name: '',
    lastName: '',
    image: {
      alt: '',
      url: '',
    },
  };
  const defaultMembers3 = {
    id: 'default3',
    name: '',
    lastName: '',
    image: {
      alt: '',
      url: '',
    },
  };
  const checkedTeamMembers = [];
  const { bigger768px, less1280px, bigger1280px, less1920px, bigger1920px } = useBreakpoints();
  if (bigger768px && less1280px) {
    bigger768px && less1280px && members.length % 2 !== 0
      ? checkedTeamMembers.push(...members, defaultMembers1)
      : checkedTeamMembers.push(...members);
  } else if (bigger1280px && less1920px) {
    members.length % 3 === 0
      ? checkedTeamMembers.push(...members)
      : members.length % 3 === 1
        ? checkedTeamMembers.push(...members, defaultMembers1, defaultMembers2)
        : checkedTeamMembers.push(...members, defaultMembers1);
  } else if (bigger1920px) {
    members.length % 4 === 0
      ? checkedTeamMembers.push(...members)
      : members.length % 4 === 1
        ? checkedTeamMembers.push(...members, defaultMembers1, defaultMembers2, defaultMembers3)
        : members.length % 4 === 2
          ? checkedTeamMembers.push(...members, defaultMembers1, defaultMembers2)
          : checkedTeamMembers.push(...members, defaultMembers1);
  } else checkedTeamMembers.push(...members);

  return checkedTeamMembers;
};
