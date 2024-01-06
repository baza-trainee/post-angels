'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = ({ headerNav }: { headerNav: { name: string; href: string }[] }) => {
  const pathname = usePathname();

  const navLinks = headerNav.map(link => (
    <li key={link.name}>
      <Link
        href={link.href}
        className={pathname === link.href ? 'text-accent-primary' : 'focus:text-accent-hover'}
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className="flex items-center justify-between gap-5 uppercase hover:[&>*]:text-accent-hover">
        {navLinks}
      </ul>
    </nav>
  );
};
