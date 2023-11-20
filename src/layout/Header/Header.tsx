'use client';

import { ICONS } from '@/components/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '../Logo';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const { nav, button } = data;
  const pathname = usePathname();

  const Dropdown = () => {
    const options = ['ua', 'en'];
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('ua');

    const onChangeSelected = (selectedOption: string) => {
      setSelected(selectedOption);
      setIsOpen(false);
    };

    return (
      <div className="relative">
        <button
          className="flex cursor-pointer items-center gap-2 uppercase"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {selected}
          {isOpen ? (
            <ICONS.HEADER_CHEVRON_UP className="h-6 w-6" />
          ) : (
            <ICONS.HEADER_CHEVRON_DOWN className="h-6 w-6" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-7 flex w-full flex-col rounded-md border bg-white">
            {options.map(item => (
              <div
                className={`flex w-full justify-between p-0.5 uppercase hover:bg-grey-40 ${
                  selected === item
                    ? 'rounded bg-accent-primary text-white hover:bg-accent-primary'
                    : ''
                }`}
                key={item}
                onClick={() => onChangeSelected(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const navItems = nav.map(link => (
    <li>
      <Link
        key={link.name}
        href={link.href}
        className={pathname === link.href ? 'text-accent-primary' : ''}
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <header className="font-eUkraineHead text-base font-normal">
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b py-4 text-grey-80">
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
        <nav className="flex h-auto items-center justify-between border-b py-6">
          <Logo />

          <div className=" flex items-center gap-6 ">
            <ul className="flex items-center justify-between gap-5 uppercase">{navItems}</ul>

            <div className="flex items-center">
              <button className="mr-8 flex items-center justify-center rounded-full bg-accent-primary p-[14px] font-eUkraine text-base font-medium text-grey-0 hover:bg-accent-hover focus:bg-accent-pressed">
                {button.name}
              </button>

              <Dropdown />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
