import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';
import { TeamMember } from '../TeamMemberCard/TeamMemberCard.props';

const OurTeamList = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <ul className="relative justify-center md:flex md:flex-wrap xl:justify-around 2xl:justify-start 3xl:justify-start notMd:block ">
      {teamMembers.map((member, index: number) => (
        <TeamMemberCard key={index} member={member} />
      ))}
      {teamMembers.length < 6 && (
        <li className="mt-[15px] h-full items-center justify-center rounded-2xl bg-grey-60 after:absolute after:bottom-[32px] after:left-[1227px] after:block after:h-[1px] after:bg-grey-60 xl:after:left-[300px] 2xl:h-[346px] 2xl:w-[422px] 2xl:after:left-[907px]  3xl:ml-2  3xl:h-[436px] 3xl:w-[581px]"></li>
      )}
    </ul>
  );
};
export default OurTeamList;
