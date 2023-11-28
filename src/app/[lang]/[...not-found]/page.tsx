import { LinkButton } from '@/components/buttons/LinkButton'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const NotFound = async ({ params: { lang = 'ua' } }: { params: { lang: Locale } }) => {
  console.log(lang);

  const { notfound } = (await getDictionary(lang)).common; //! не знаю чи так можна саме з цією сторінкою :(
  console.log(notfound);
  return (
    <div className="background-404">
      <div className=" flex flex-col items-center gap-12 pb-24 text-center text-grey-20/80">
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
