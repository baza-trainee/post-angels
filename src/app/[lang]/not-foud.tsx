import Link from 'next/link';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function NotFound({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  console.log(dictionary);
  return (
    <div>
      {/* Using the dictionary by selected language: */}

      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
