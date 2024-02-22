'use client';

import { getCheckedMembers } from '@/utils/getCheckedMembers';
import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';
import { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const OurTeamList = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  const checkedTeamMembers = getCheckedMembers(teamMembers);
  return (
    <ul className="relative md:flex md:flex-wrap">
      {checkedTeamMembers.map((member: TeamMember, index: number) => (
        <TeamMemberCard
          key={member.id || index}
          name={member.name}
          lastName={member.lastName}
          image={member.image}
          id={member.id}
        />
      ))}
    </ul>
  );
};
export default OurTeamList;
