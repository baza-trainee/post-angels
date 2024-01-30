import { ProjectSupportDataProps } from '@/sections/ProjectPage/ProjectPage.props';
import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph';
import { formatTimestamp } from '@/utils/dateParser';

export const SupportCard = (props: ProjectSupportDataProps) => {
  const { name, date, sum, cardData } = props;
  const formattedDate = formatTimestamp(date);

  return (
    <div className=" flex w-full gap-x-[10px] border-b-[1px] border-grey-60 py-5">
      <div className="h-[60px] w-[60px]">
        <ICONS.USER_AVATAR width={60} height={60} />
      </div>

      <div className="flex w-full justify-between">
        <div>
          <Paragraph variant="grey" variantFontSize="16" className="mb-1">
            {name}
          </Paragraph>
          <Paragraph variant="grey" variantFontSize="14">
            {formattedDate}
          </Paragraph>
        </div>
        <Paragraph variant="grey" variantFontSize="16">
          {`${new Intl.NumberFormat('ua-UA').format(sum)} ${cardData}`}
        </Paragraph>
      </div>
    </div>
  );
};
