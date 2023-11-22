'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Navigation = ({ headerNav }: { headerNav: { name: string; href: string }[] }) => {
  const pathname = usePathname();

  const navLinks = headerNav.map(link => (
    <li key={link.name}>
      <Link href={link.href} className={pathname === link.href ? 'text-accent-primary' : ''}>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className="flex items-center justify-between gap-5 uppercase">{navLinks}</ul>
    </nav>
  );
};
