import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { LinkButton } from '@/components/buttons/LinkButton';
import { CooperationProps } from './Cooperation.props';

export const Cooperation: React.FC<CooperationProps> = ({ data }) => {
  const { cooperationSection } = data;
  return (
    <section>
      <div className="container">
        <div className="border-b border-grey-60 pb-[40px] pt-[80px]">
          <Title tag="h2" variantSize="h2" className="mb-[30px] md:mb-4">
            {cooperationSection.title}
            <span>
              <br /> {cooperationSection.title1}
            </span>
          </Title>
          <Paragraph
            variant="dark_grey"
            variantFontSize="16"
            variantFontWeight="regular"
            className="mb-[30px] md:mb-12"
          >
            {cooperationSection.text}
          </Paragraph>
          <div className="md:flex md:gap-x-[30px]">
            <LinkButton
              href={cooperationSection.buttons.partnerBtn.link}
              className="flex-basis-1/2 w-full xl:w-[276px] 2xl:w-[316px] 3xl:w-[280px] smOnly:mb-[30px]"
            >
              {cooperationSection.buttons.partnerBtn.text}
            </LinkButton>

            <LinkButton
              href={cooperationSection.buttons.volunteerBtn.link}
              className="flex-basis-1/2 w-full xl:w-[276px] 2xl:w-[316px] 3xl:w-[280px]"
            >
              {cooperationSection.buttons.volunteerBtn.text}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
