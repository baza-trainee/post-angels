import { Title } from '@/components/typography/Title';
import OurTeamList from '@/components/OurTeam/OurTeamList/OurTeamList';
import { Locale } from '@/i18n.config';
import { fetchTeam } from '@/api/fetchTeam';
import { OurTeamProps } from '@/sections/OurTeam/OurTeam.props';
import {
  TeammateAttributes,
} from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';
import { getTeam } from '@/api/requests/getTeam';

const OurTeam = async ({ lang, data }: { data: OurTeamProps; lang: Locale }) => {
  const teamData: TeammateAttributes[] = await fetchTeam(lang);
  return (
    <section>
      <div className="container">
        <div className="pb-[40px] pt-[80px] ">
          <Title tag="h2" variantSize="h2" className="mb-[40px] md:mb-4">
            {data.title1}
            <span>
              <br /> {data.title2}
            </span>
          </Title>
          <OurTeamList teamMembers={teamData} />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
