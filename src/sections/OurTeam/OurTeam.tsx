import { Title } from '@/components/typography/Title';
import { OurTeamProps } from './OurTeam.props';
import OurTeamList from '@/components/OurTeam/OurTeamList/OurTeamList';
import { Locale } from '@/i18n.config';

const OurTeam = ({ lang, data }: { data: OurTeamProps; lang: Locale }) => {
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
          <OurTeamList teamMembers={data.teamData} />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
