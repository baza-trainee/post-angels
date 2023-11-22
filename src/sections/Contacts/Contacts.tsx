import Link from 'next/link';
import Image from 'next/image';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { ICONS } from '@/components/icons';
import { ContactsProps } from '../../sections/Contacts/Contacts.props';

import Partners from '../../../public/images/image 87.jpg';
import './Contacts.css';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <section className="mt-50px container flex justify-between">
      <div>
        <Title tag="h2" colorVariant="accent" className="mb-50px font-eUkraineHead">
          <b>{contactsSection[0].title}</b>
          <span>
            <br /> <b>{contactsSection[0].title1}</b>
          </span>
        </Title>
        <div className="mb-4 flex">
          <ICONS.LOCATION className="svg mr-2 h-6 w-6 cursor-pointer" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="font-eUkraine hover:text-accent-primary"
          >
            <Link
              href="https://maps.app.goo.gl/deQbq6vrWQJQ7cud9"
              rel="nofollow noreferrer"
              className="font-eUkraine "
              target="_blank"
            >
              816 North Normandie ave., Los Angeles
            </Link>
          </Paragraph>
        </div>
        <div className="mb-4 flex">
          <ICONS.PHONE className="mr-2 mt-2 h-6 w-6 cursor-pointer fill-none stroke-grey-100 hover:fill-none hover:stroke-accent-hover" />
          <Link
            href="tel:+1 657-214-0272"
            rel="nofollow noreferrer"
            className=" font-eUkraine"
            target="_blank"
          >
            <Title tag="h2" className="font-eUkraine hover:text-accent-primary">
              +1 657-214-0272
            </Title>
          </Link>
        </div>
        <div className="mb-4 flex">
          <ICONS.MAIL className="svg mr-2 mt-1 h-6 w-6 cursor-pointer" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="font-eUkraine hover:text-accent-primary"
          >
            <Link
              href="mailto:postangeleslwo@gmail.com"
              rel="nofollow noreferrer"
              className="font-eUkraine"
              target="_blank"
            >
              postangeleslwo@gmail.com
            </Link>
          </Paragraph>
        </div>
        <div className="mb-4 flex">
          <ICONS.INSTAGRAM className="svg mr-2 h-6 w-6 cursor-pointer" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="font-eUkraine hover:text-accent-primary"
          >
            <Link
              href="https://instagram.com/post_angeles_lviv?"
              rel="nofollow noreferrer"
              className=" font-eUkraine"
              target="_blank"
            >
              Instagram
            </Link>
          </Paragraph>
        </div>
        <div className="flex">
          <ICONS.FACEBOOK className="mr-2 h-6 w-6 cursor-pointer fill-none stroke-grey-100 hover:fill-none hover:stroke-accent-hover" />
          <Paragraph
            variant="dark"
            variantFontSize="16"
            variantFontWeight="regular"
            className="font-eUkraine hover:text-accent-primary"
          >
            <Link
              href="https://www.facebook.com/PostAngeles.Lviv"
              rel="nofollow noreferrer"
              className=" font-eUkraine"
              target="_blank"
            >
              Facebook
            </Link>
          </Paragraph>
        </div>
      </div>
      <div>
        <Image src={Partners} width={688} height={458} alt="Partners" />
      </div>
    </section>
  );
};
