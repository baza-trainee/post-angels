import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const NotFound = async ({ params: { lang = 'ua' } }: { params: { lang: Locale } }) => {
  console.log(lang);

  const dictionary = await getDictionary(lang);
  console.log(dictionary);
  return (
    <div>
      {/* Using the dictionary by selected language: */}

      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
