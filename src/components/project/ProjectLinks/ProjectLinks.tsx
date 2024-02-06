import { Paragraph } from '@/components/typography/Paragraph';
import { StaticDataLinkNav } from '@/sections/ProjectPage/ProjectPage.props';
import Link from 'next/link';

export const ProjectLinks = ({
  project_details,
  variant,
}: {
  project_details: StaticDataLinkNav[];
  variant: string;
}) => {
  return (
    <div className="border-b border-grey-60 pb-[40px] xl:pb-8 ">
      <ul className="relative flex justify-between gap-x-5 xl:justify-start xl:gap-x-[100px] before:notXl:absolute before:notXl:right-[50%] before:notXl:h-full before:notXl:w-[1px] before:notXl:bg-grey-60">
        {project_details.map(el => {
          return (
            <li
              key={el.name}
              className="relative first:after:h-full first:after:xl:absolute  first:after:xl:right-[-50px] first:after:xl:top-0 first:after:xl:w-[1px] first:after:xl:bg-grey-60"
            >
              <Link href={`${el.href}`}>
                <Paragraph
                  variantFontWeight="medium"
                  className=" !font-eUkraineHead sm:w-fit"
                  variantFontSize="24"
                  variant={variant === el.name ? 'accent' : 'dark'}
                >
                  {el.title}
                </Paragraph>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
