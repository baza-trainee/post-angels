import { ICONS } from '@/components/icons';
import Link from 'next/link';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const { nav } = data;
  return (
    <header className="font-eUkraine">
      <div className="container">
        <div className="flex h-auto items-center justify-between border-b py-4">
          {/* Upper Nav */}
          <Link className="flex text-base font-normal" href="/">
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
        <div className="flex h-6 items-center border-b">dwedefe</div>
      </div>
    </header>
  );
};
