import { LinkButton } from '@/components/buttons/LinkButton';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const NotFound = async ({ params: { lang = 'ua' } }: { params: { lang: Locale } }) => {
  console.log(lang);

  const { notfound } = (await getDictionary(lang)).common; //! не знаю чи так можна саме з цією сторінкою :(
  console.log(notfound);
  return (
    <div className="background-404">
      <picture>
        {/* WEBP format for browsers that support it */}
        <source srcSet="/images/404/img1x.webp 1x, /images/404/img2x.webp 2x" type="image/webp" />
        {/* Fallback to JPG for browsers that do not support WEBP */}
        <img
          srcSet="/images/404/img1x.jpg 1x, /images/404/img1x.jpg 2x"
          src="/images/404/img1x.jpg" // Provide a default image
          alt="404 Not Found"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-center gap-12 pb-24 text-center text-grey-20/80">
        {/* Using the dictionary by selected language: */}
        <h1 className="mt-40 text-[240px] font-bold">404</h1>
        <h2 className="w-[680px] text-3xl">{notfound.subtitle}</h2>

        <LinkButton href="/" className="mt-10 h-14 w-64">
          {notfound.label}
        </LinkButton>
      </div>
    </div>
  );
};

export default NotFound;
