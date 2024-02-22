'use client';
import Link from 'next/link';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { ICONS } from '../icons';
import { ContactDataProps } from '@/sections/Contacts/Contacts.props';

export const ContactList = ({ data }: { data: ContactDataProps }) => {
  console.log(data);
  return (
    <ul className="flex flex-col gap-y-4 md:w-[349px] lg:w-[465px] xl:w-[390px] 2xl:w-[538px]">
      <li>
        <Link
          href={data.address_link}
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.LOCATION className="h-10 w-10 group-hover:fill-accent-primary group-focus:fill-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            {data.address}
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href={`tel:${data.phone}`}
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.PHONE className="h-10 w-10 fill-none  stroke-grey-100 group-hover:stroke-accent-hover group-hover:text-accent-primary group-focus:stroke-accent-primary group-focus:text-accent-primary" />

          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            {data.phone}
          </Paragraph>
        </Link>
      </li>

      <li>
        <Link
          href={`mailto:${data.email}`}
          rel="nofollow noreferrer"
          className="group flex cursor-pointer items-center gap-2 group-hover:text-accent-primary group-focus:text-accent-primary"
          target="_blank"
        >
          <ICONS.MAIL className="h-10 w-10 group-hover:fill-accent-primary group-focus:fill-accent-primary" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="group-hover:text-accent-primary group-focus:text-accent-primary"
          >
            {data.email}
          </Paragraph>
        </Link>
      </li>

      {data.socials.map(social => (
        <li key={social.name}>
          <Link
            href={social.link}
            rel="nofollow noreferrer"
            className="group flex cursor-pointer items-center gap-2 group-hover:text-accent-primary group-focus:text-accent-primary"
            target="_blank"
          >
            {social.name.toLowerCase() === 'facebook' && (
              <ICONS.FACEBOOK className="h-10 w-10 fill-none stroke-grey-100 hover:fill-none hover:stroke-accent-hover group-hover:stroke-accent-hover group-hover:text-accent-primary group-focus:stroke-accent-primary group-focus:text-accent-primary" />
            )}
            {social.name.toLowerCase() === 'instagram' && (
              <ICONS.INSTAGRAM className="h-10 w-10 cursor-pointer group-hover:fill-accent-primary group-focus:fill-accent-primary" />
            )}

            <Paragraph
              variant="dark"
              variantFontSize="16"
              variantFontWeight="regular"
              className="capitalize group-hover:text-accent-primary  group-focus:text-accent-primary"
            >
              {social.name}
            </Paragraph>
          </Link>
        </li>
      ))}
    </ul>
  );
};
