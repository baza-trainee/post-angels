'use client';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';

import { FooterDoc } from '@/components/footer/FooterDoc';

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  // const params = useSearchParams();
  // const router = useRouter();
  // const pathname = usePathname();

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [docToShow, setDocToShow] = useState<string>('');
  // const document = params.get('document');

  // const openDocument = (document: string) => {
  //   setDocToShow(document);
  //   setIsModalOpen(true);
  //   console.log(document);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   console.log(document);
  //   setDocToShow('');
  //   router.push(pathname);
  // };

  return (

      <footer className="bg-grey-120 pb-[43px] pt-12 ">
        <div className="container flex flex-col gap-[109px] font-eUkraine">
          <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
            <Logo type="light" lang={lang} />

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
            <FooterDoc footerDoc={footerDoc} modal={modal} />
          </div>
        </div>
      </footer>

  );
};
