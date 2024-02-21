import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';
import { TeammateAttributes } from '../TeamMemberCard/TeamMemberCard.props';

export const OurTeamList = ({ teamMembers }: { teamMembers: TeammateAttributes[] }) => {
  return (
    <ul className="relative justify-center md:flex md:flex-wrap xl:justify-around 2xl:justify-start 3xl:justify-start notMd:block ">
      {teamMembers.map((member: TeammateAttributes, index: number) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          lastName={member.lastName}
          image={member.image}
        />
      ))}
      {teamMembers.length % 3 === 1 && (
        <div className="box-container-line relative flex w-[1226px] gap-[15px] 3xl:h-[529px]">
          <li className=" box-line mt-[15px] h-full items-center justify-center rounded-2xl bg-box after:bottom-[32px] after:left-[1227px] after:block after:h-[1px] after:bg-grey-60 xl:after:left-[300px] 2xl:h-[346px] 2xl:w-[432px] 2xl:after:left-[907px] 3xl:ml-2  3xl:h-[436px]  3xl:w-[592px] 3xl:after:bottom-0 3xl:after:left-[0px] 3xl:after:h-[1px] 3xl:after:w-[1px]"></li>
          <li className=" box-line mt-[15px]  h-full items-center justify-center rounded-2xl bg-box after:absolute after:bottom-[32px] after:left-[1227px] after:block after:h-[1px] after:bg-grey-60 xl:after:left-[300px] 2xl:h-[346px] 2xl:w-[432px]  2xl:after:left-[907px]  3xl:ml-2 3xl:h-[436px] 3xl:w-[592px]"></li>
        </div>
      )}
      {teamMembers.length % 3 === 2 && (
        <div className=" 2xl:w-[453px]">
          <li className="one-box-line ml-4 mt-[15px]  h-full items-center justify-center rounded-2xl bg-box after:absolute after:bottom-[32px] after:left-[1227px] after:block after:h-[1px] after:bg-grey-60 xl:after:left-[300px] 2xl:h-[346px]  2xl:after:left-[907px]  3xl:ml-2  3xl:h-[436px] 3xl:w-[581px]"></li>
        </div>
      )}
    </ul>
  );
};
export default OurTeamList;
