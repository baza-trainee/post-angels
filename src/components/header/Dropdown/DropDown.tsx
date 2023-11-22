'use client';

import { useState } from 'react';
import { ICONS } from '@/components/icons';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';
import Link from 'next/link';

export const Dropdown = ({
  headerLanguageLabel,
  lang,
}: {
  lang: string;
  headerLanguageLabel: { name: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(lang);

  const onChangeSelected = (selectedOption: string) => {
    setSelected(selectedOption);
    setIsOpen(false);
  };

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/');
        const isHome = segments.length === 2;
        if (isHome) return '/';

        segments.splice(1, 1);
        return segments.join('/');
      }

      const segments = pathName.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  };

  return (
    <div className="relative">
      <button
        className="flex cursor-pointer items-center gap-2 uppercase"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {lang}

        <ICONS.HEADER_CHEVRON_UP
          className={`h-6 w-6 duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-label={headerLanguageLabel.name}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-7 flex w-full cursor-pointer flex-col rounded-md border bg-white">
          {i18n.locales.map(item => (
            <li key={item} onClick={() => onChangeSelected(item)}>
              <Link
                href={redirectedPathName(item)}
                className={`flex w-full justify-between p-0.5 uppercase hover:bg-grey-40 ${
                  selected === item
                    ? 'rounded bg-accent-primary text-white hover:bg-accent-primary'
                    : ''
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
