'use client';

import { Dropdown } from '@/components/header/Dropdown';
import { ICONS } from '@/components/icons';
import { Logo } from '@/layout/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ButtonDonate } from '../ButtonDonate';
import { MobileNavProps } from './MobileNav.props';

const MobileNav = ({
  lang,
  headerNav,
  headerButton,
  headerLanguageLabel,
  headerLanguageName,
  modal,
}: MobileNavProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  // overflow-y-hidden while menu is opened
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    openMobileMenu && (document.body.style.overflow = 'hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMobileMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown as unknown as EventListener);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
    };
  }, [openMobileMenu]);

  const mobileNavLinks = headerNav.map(link => (
    <li key={link.name}>
      <Link
        href={link.href}
        onClick={() => setOpenMobileMenu(false)}
        className={`flex h-[60px] items-center border-b border-grey-40 ${
          pathname === link.href ? 'text-accent-primary' : ''
        }`}
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <>
      <div className="flex h-10 w-10 lg:hidden" onClick={() => setOpenMobileMenu(true)}>
        {!openMobileMenu && <ICONS.HAMBURGER_MENU />}
      </div>

      {openMobileMenu && (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="fixed left-0 top-0 z-50 h-screen w-full bg-black/25"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="z-90 absolute right-0 top-0 flex h-screen w-[320px] flex-col gap-8 overflow-y-hidden bg-grey-100 p-5"
          >
            {/* logo and close icon */}
            <div className="flex h-10 items-center justify-between">
              <div onClick={() => setOpenMobileMenu(false)}>
                <Logo type="light" lang={lang} />
              </div>
              <div className="flex h-8 w-8" onClick={() => setOpenMobileMenu(false)}>
                {openMobileMenu && <ICONS.HAMBURGER_CLOSE />}
              </div>
            </div>
            {/* links & language */}
            <nav>
              <ul className="flex flex-col border-t border-grey-40 font-normal uppercase text-grey-40">
                {mobileNavLinks}
                <div className="flex h-[60px] items-center justify-between border-b border-grey-40">
                  {headerLanguageName.name}
                  <Dropdown headerLanguageLabel={headerLanguageLabel} lang={lang} />
                </div>
                <div></div>
              </ul>
            </nav>
            {/* donate button*/}
            <ButtonDonate headerButton={headerButton} modal={modal} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
