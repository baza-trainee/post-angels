'use client';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { LinkButton } from '@/components/buttons/LinkButton';
import { CooperationProps } from './Cooperation.props';

export const Cooperation: React.FC<CooperationProps> = ({ data }) => {
  const { cooperationSection } = data;
  return (
    <section>
      <div className="container">
        <div className="border-b border-grey-60 pb-[80px] pt-[100px]">
          <Title tag="h2" variantSize="h2" className="mb-[30px]">
            {cooperationSection.title}
            <span>
              <br /> {cooperationSection.title1}
            </span>
          </Title>
          <Paragraph
            variant="dark_grey"
            variantFontSize="16"
            variantFontWeight="regular"
            className="mb-[30px]"
          >
            {cooperationSection.text}
          </Paragraph>
          <div className="md:flex">
            <div>
              <LinkButton
                href={`/partners`}
                className="mb-[30px] md:mr-[30px] md:w-[349px] lg:w-[465px] xl:w-[276px]"
              >
                {cooperationSection.buttons.partnerBtn.text}
              </LinkButton>
            </div>
            <div>
              <LinkButton href={`/volunteers`} className="md:w-[349px] lg:w-[465px] xl:w-[276px]">
                {cooperationSection.buttons.volunteerBtn.text}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
