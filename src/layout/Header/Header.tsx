import { LinkButton } from '@/components/buttons/LinkButton';
import { ICONS } from '@/components/icons';
import Link from 'next/link';
import { Logo } from '../Logo';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const { nav } = data;
  return (
    <header className="font-eUkraine text-base font-normal">
      <div className="container">
        <div className="flex h-auto items-center justify-between border-b py-4">
          {/* Upper Nav */}
          <Link className="flex" href="/">
            <ICONS.HEADER_LOCATION className="mr-2 h-6 w-6" />
            816 North Normandie ave., Los Angeles
          </Link>
          <Link className="flex" href="tel:+16572140272">
            <ICONS.HEADER_PHONE className="mr-2 h-6 w-6" />
            +1 657-214-0272
          </Link>
          <Link className="flex" href="mailto:post.angeles.info@gmail.com">
            <ICONS.HEADER_MAIL className="mr-2 h-6 w-6" />
            post.angeles.info@gmail.com
          </Link>
        </div>

        {/* Top Nav */}
        <div className="flex h-auto items-center justify-between border-b py-6 text-grey-80">
          <Link href="/" className="mr-auto flex shrink-0 items-center justify-center">
            <Logo />
          </Link>

          <div className=" flex shrink-0 items-center gap-6 text-grey-100">
            <div className="flex items-center justify-between gap-5 uppercase">
              {nav.map(link => (
                <Link href={link.href}>{link.name}</Link>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <LinkButton href="#" className="">
                Зробити внесок
              </LinkButton>

              <div className="flex cursor-pointer items-center">
                UA
                <ICONS.HEADER_CHEVRON className="mr-2 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
