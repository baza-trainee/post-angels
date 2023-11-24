"use client"
import { useState } from 'react';

import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';
import { PDFView } from '@/components/PDFView/PDFView';
import Modal from '@/components/modal/Modal';

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openDocument = () => {
    setIsModalOpen(false);
  }

  return (
    <>
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
          <ul className="flex gap-[91px] text-sm underline">
            {footerDoc.map(ell => (
              <li key={ell.name}>
                <Link href={ell.href} onClick={openDocument}>{ell.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    {isModalOpen && <Modal
          modal={modal}
          modalClose={() => {
            setIsModalOpen(false);
          }}
        >llll
          {/* <PDFView /> */}
        </Modal>
      }
      </>
  );
};
