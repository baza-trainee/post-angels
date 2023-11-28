import { ICONS } from '@/components/icons'
import Link from 'next/link'

import { Navigation } from '@/components/header/Navigation'

import { ButtonList } from '@/components/header/ButtonList'
import { Logo } from '@/layout/Logo'
import { HeaderProps } from './Header.props'

export const Header: React.FC<HeaderProps> = ({ data, lang, modal }) => {
  const { headerNav, headerButton, headerLanguageLabel } = data;

  return (
    <header className="sticky top-0 font-eUkraineHead text-base font-normal">
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b py-4 text-grey-80">
          <Link className="flex gap-x-2" href="/">
            <ICONS.HEADER_LOCATION className="h-6 w-6" />
            816 North Normandie ave., Los Angeles
          </Link>
          <Link className="flex gap-x-2" href="tel:+16572140272">
            <ICONS.HEADER_PHONE className="h-6 w-6" />
            +1 657-214-0272
          </Link>
          <Link className="flex gap-x-2" href="mailto:post.angeles.info@gmail.com">
            <ICONS.HEADER_MAIL className="h-6 w-6" />
            post.angeles.info@gmail.com
          </Link>
        </div>

        {/* Top Nav */}
        <div className=" flex h-auto items-center justify-between border-b py-6">
          <Logo type="dark" lang={lang} />

          <div className="flex items-center gap-6 ">
            <Navigation headerNav={headerNav} />
            <ButtonList
              lang={lang}
              headerButton={headerButton}
              headerLanguageLabel={headerLanguageLabel}
              modal={modal}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
// shadow-[0px_8px_6px_-6px_#333]
