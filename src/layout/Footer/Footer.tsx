import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { footerNav, footerDoc, footerCop, footerLabel } = data;

  return (
    <footer className="bg-grey-120 pb-[43px] pt-12 ">
      <div className="container flex flex-col gap-[109px] font-eUkraine">
        <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
          <Logo type="light" label={footerLabel.name} />

          <ul className="flex gap-[58px]">
            {footerNav.map(ell => (
              <li key={ell.name}>
                <Link href={ell.href}>{ell.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-start gap-[231px] font-normal text-grey-0">
          <Paragraph variantFontSize="12" variant="white">
            {footerCop.name}
          </Paragraph>
          <ul className="flex gap-[91px] text-sm underline">
            {footerDoc.map(ell => (
              <li key={ell.name}>
                <Link href={ell.href}>{ell.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
