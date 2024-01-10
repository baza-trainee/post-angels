import Link from 'next/link';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { ICONS } from '../icons';

export const ContactList = () => {
  return (
    <ul className="flex flex-col pb-[23px]">
      <li>
        <Link
          href="https://maps.app.goo.gl/deQbq6vrWQJQ7cud9"
          rel="nofollow noreferrer"
          className=" group flex cursor-pointer items-center gap-2 pb-[23px] group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.LOCATION className="h-10 w-10  group-hover:fill-accent-primary group-focus:fill-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className=" group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            816 North Normandie ave., Los Angeles
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href="tel:+1 657-214-0272"
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 pb-[23px] group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.PHONE className="h-10 w-10 fill-none  stroke-grey-100 group-hover:stroke-accent-hover group-hover:text-accent-primary group-focus:stroke-accent-primary group-focus:text-accent-primary" />

          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            +1 657-214-0272
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href="mailto:postangeleslwo@gmail.com"
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 pb-[23px] group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.MAIL className="h-10 w-10 group-hover:fill-accent-primary group-focus:fill-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className=" group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            postangeleslwo@gmail.com
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href="https://instagram.com/post_angeles_lviv?"
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 pb-[23px] group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.INSTAGRAM className="h-10 w-10 cursor-pointer group-hover:fill-accent-primary group-focus:fill-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className=" group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            Instagram
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href="https://www.facebook.com/PostAngeles.Lviv"
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center  gap-2 group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.FACEBOOK className="h-10 w-10 fill-none stroke-grey-100 hover:fill-none hover:stroke-accent-hover  group-hover:stroke-accent-hover group-hover:text-accent-primary group-focus:stroke-accent-primary group-focus:text-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            Facebook
          </Paragraph>
        </Link>
      </li>
    </ul>
  );
};
