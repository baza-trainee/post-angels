'use client';
import Link from 'next/link';
import { ContactsProps } from '../../sections/Contacts/Contacts.props';
import { Title } from '../typography/Title';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { ICONS } from '../icons';

export const ContactList: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <div>
      <Title tag="h2" colorVariant="accent" className="pb-[50px] font-eUkraineHead">
        <b>{contactsSection[0].title}</b>
        <span>
          <br /> <b>{contactsSection[0].title1}</b>
        </span>
      </Title>

      <ul>
        <div className="group flex cursor-pointer items-center gap-3 group-hover:text-accent-primary ">
          <li className="flex items-center gap-2  group-hover:text-accent-primary">
            <ICONS.LOCATION className="h-6 w-6 cursor-pointer  group-hover:fill-accent-primary " />
            <Paragraph
              variant="dark"
              variantFontSize="16"
              variantFontWeight="regular"
              className="flex gap-4 font-eUkraine group-hover:text-accent-primary"
            >
              <Link
                href="https://maps.app.goo.gl/deQbq6vrWQJQ7cud9"
                rel="nofollow noreferrer"
                className="flex gap-4 font-eUkraine group-hover:text-accent-primary"
                target="_blank"
              >
                816 North Normandie ave., Los Angeles
              </Link>
            </Paragraph>
          </li>
        </div>

        <div className="group flex cursor-pointer items-center gap-4 group-hover:text-accent-primary">
          <li className="flex items-center gap-2 py-2 group-hover:text-accent-hover">
            <ICONS.PHONE className="h-6 w-6 fill-none  stroke-grey-100 group-hover:stroke-accent-hover group-hover:text-accent-primary" />
            <Link
              href="tel:+1 657-214-0272"
              rel="nofollow noreferrer"
              className="flex font-eUkraine group-hover:text-accent-hover"
              target="_blank"
            >
              <Title tag="h2" className="font-eUkraine group-hover:text-accent-hover">
                +1 657-214-0272
              </Title>
            </Link>
          </li>
        </div>

        <div className="group flex cursor-pointer items-center group-hover:text-accent-primary">
          <li className="flex items-center gap-2 py-2 group-hover:text-accent-hover">
            <ICONS.MAIL className="h-6 w-6 cursor-pointer group-hover:fill-accent-primary" />
            <Paragraph
              variant="dark"
              variantFontSize="16"
              variantFontWeight="regular"
              className="font-eUkraine group-hover:text-accent-primary"
            >
              <Link
                href="mailto:postangeleslwo@gmail.com"
                rel="nofollow noreferrer"
                className="font-eUkraine group-hover:text-accent-primary"
                target="_blank"
              >
                postangeleslwo@gmail.com
              </Link>
            </Paragraph>
          </li>
        </div>

        <div className="group flex cursor-pointer items-center group-hover:text-accent-primary">
          <li className="flex items-center gap-2 py-2 group-hover:text-accent-hover ">
            <ICONS.INSTAGRAM className=" h-6 w-6 cursor-pointer group-hover:fill-accent-primary" />
            <Paragraph
              variant="dark"
              variantFontSize="16"
              variantFontWeight="regular"
              className="font-eUkraine hover:text-accent-primary"
            >
              <Link
                href="https://instagram.com/post_angeles_lviv?"
                rel="nofollow noreferrer"
                className="font-eUkraine group-hover:text-accent-hover"
                target="_blank"
              >
                Instagram
              </Link>
            </Paragraph>
          </li>
        </div>

        <div className="group flex cursor-pointer items-center  group-hover:text-accent-primary">
          <li className="flex items-center gap-2 py-2 group-hover:text-accent-hover">
            <ICONS.FACEBOOK className="h-6 w-6 cursor-pointer fill-none stroke-grey-100 hover:fill-none hover:stroke-accent-hover  group-hover:stroke-accent-hover group-hover:text-accent-primary" />
            <Paragraph
              variant="dark"
              variantFontSize="16"
              variantFontWeight="regular"
              className="font-eUkraine hover:text-accent-primary"
            >
              <Link
                href="https://www.facebook.com/PostAngeles.Lviv"
                rel="nofollow noreferrer"
                className="font-eUkraine group-hover:text-accent-hover"
                target="_blank"
              >
                Facebook
              </Link>
            </Paragraph>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ContactList;
