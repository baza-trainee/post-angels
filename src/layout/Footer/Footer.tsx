import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';
import { FooterDoc } from '@/components/footer/FooterDoc/FooterDoc';

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  return (
    <footer className="bg-grey-120 pb-[34px] pt-5 md:pb-[62px] md:pt-[63px] lg:pb-[72px] lg:pt-[72px] xl:pb-[49px] xl:pt-12">
      <div className="container ml-0 flex w-80 flex-col gap-5 font-eUkraine md:ml-auto md:w-fit md:gap-[29px] lg:gap-[30px] xl:gap-[101px]">
        <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
          <Logo type="light" lang={lang} />

          <ul className="hidden xl:flex xl:gap-[58px]">
            {footerNav.map(ell => (
              <li key={ell.name}>
                <Link href={ell.href}>{ell.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-start gap-5 font-normal text-grey-70 md:flex-row md:gap-10 xl:gap-[159px]">
          <div className="md:w-[171px] lg:w-[293px] xl:w-fit">
            <Paragraph variantFontSize="14" variant="light_grey">
              {footerCop.name}
            </Paragraph>
          </div>
          <FooterDoc footerDoc={footerDoc} modal={modal} />
        </div>
      </div>
    </footer>
  );
};
