'use client';
import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { PopupCookieProps } from './PopupCookie.props';

const PopupCookie: React.FC<PopupCookieProps> = ({ data }) => {
  const { popupCookie } = data;
  return (
    <div className="relative flex w-full  items-center">
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="cookie"
        style={{
          background: '#F9FAFF',
          color: '#303030',
          alignItems: 'center',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        contentClasses=""
        containerClasses="!w-[1200px] flex items-center !bottom-2 rounded-2xl justify-center p-[32px]"
        expires={150}
        overlay={true}
        hideOnAccept={true}
        buttonStyle={{
          color: '#F9FAFF',
          backgroundColor: '#FF551A',
          borderRadius: '48px',
          width: '236px',
          padding: '12px',
        }}
      >
        <Paragraph className="mb-1" variant="dark" variantFontSize="14" variantFontWeight="regular">
          {popupCookie.text}
        </Paragraph>
        <Paragraph variant="dark" variantFontSize="14" variantFontWeight="regular">
          {popupCookie.text1}
          <Link
            className="pl-1 font-eUkraine text-sm font-medium leading-[160%] text-orange"
            href="/"
          >
            {popupCookie.linkText}
          </Link>
        </Paragraph>
      </CookieConsent>
    </div>
  );
};

export default PopupCookie;
