import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';
import { FooterDoc } from '@/components/footer/FooterDoc/FooterDoc';

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  return (
    <footer className="bg-grey-120 pb-[34px] pt-5 md:pb-[43px] md:pt-12">
      <div className="container flex flex-col gap-5 w-80 ml-0 font-eUkraine md:ml-auto md:w-fit md:gap-[109px]">
        <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
          <Logo type="light" lang={lang} />

          <ul className="hidden md:flex md:gap-[58px]">
            {footerNav.map(ell => (
              <li key={ell.name}>
                <Link href={ell.href}>{ell.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-start gap-5 font-normal text-grey-0 md:flex-row md:gap-[159px]">
          <Paragraph variantFontSize="14" variant="white">
            {footerCop.name}
          </Paragraph>
          <FooterDoc footerDoc={footerDoc} modal={modal} />
        </div>
      </div>
    </footer>
  );
};
