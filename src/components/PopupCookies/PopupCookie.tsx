'use client';
import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { PopupCookieProps } from './PopupCookie.props';
import { LinkButton } from '../buttons/LinkButton';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { PDFView } from '../PDFView';

const PopupCookie: React.FC<PopupCookieProps> = ({ data, modal, document }) => {
  const { popupCookie } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="relative flex w-full  items-center">
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText={popupCookie.button_text.yes}
        declineButtonText={popupCookie.button_text.no}
        cookieName="cookie"
        style={{
          background: '#F9FAFF',
          color: '#303030',
          alignItems: 'center',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        contentStyle={{
          margin: 0,
          display: 'block',
        }}
        overlayClasses="!z-[60]"
        contentClasses=""
        containerClasses="!w-[320px] sm:!w-[440px] md:!w-[728px] lg:!w-[960px] xl:!w-[1200px] !bottom-2 rounded-2xl !block p-[15px] sm:p-[32px] xl:!flex xl:gap-x-6 2xl:gap-x-14 2xl:!w-[1360px] 3xl:!w-[1840px]"
        expires={150}
        overlay={true}
        hideOnAccept={true}
        disableButtonStyles={true}
        declineButtonClasses="ring-1 hover:ring-2 ring-orange ring-offset-0 text-grey-100  !rounded-full sm:!w-full  lg:!w-[465px] !bg-transparent xl:!w-[236px]"
        buttonWrapperClasses="my-0 mx-auto text-center gap-x-4 flex-col-reverse md:flex-row-reverse flex xl:flex-col-reverse gap-y-4 !mt-4 xl:!mt-0"
        buttonClasses="ring-1 ring-offset-0 ring-orange hover:ring-[#FC4100]  text-grey-0 rounded-full  sm:!w-full  lg:!w-[465px]   bg-orange xl:!w-[236px] hover:bg-[#FC4100]"
        declineButtonStyle={{ padding: '12px', margin: 0 }}
        buttonStyle={{
          padding: '12px',
          margin: 0,
        }}
      >
        <Paragraph
          className="md:mb-1 lg:mb-2"
          variant="dark"
          variantFontSize="16"
          variantFontWeight="regular"
        >
          {popupCookie.text}
        </Paragraph>
        <Paragraph
          variant="dark"
          variantFontSize="16"
          variantFontWeight="regular"
          className="inline-block"
        >
          {popupCookie.text1}
        </Paragraph>
        <button
          className="inline-flex pl-1 font-eUkraine text-base font-medium leading-[160%] text-orange hover:text-[#FC4100]"
          onClick={() => handleClick()}
        >
          {popupCookie.linkText}
        </button>
      </CookieConsent>

      {isModalOpen && (
        <Modal
          modalClose={() => {
            setIsModalOpen(false);
          }}
          modal={modal}
          className="z-50 px-10 py-10"
          scroll
        >
          <PDFView documents={document} />
        </Modal>
      )}
    </div>
  );
};

export default PopupCookie;
