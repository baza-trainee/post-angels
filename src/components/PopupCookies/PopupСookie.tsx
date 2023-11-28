'use client';
import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';
import { Paragraph } from '../typography/Paragraph/Paragraph';
import { PopupCookieProps } from './PopupCookie.props';

const PopupCookie: React.FC<PopupCookieProps> = ({ data }) => {
  const { popupCookie } = data;
  return (
    <div className="">
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="cookie"
        style={{
          background: '#F9FAFF',
          color: '#303030',
          alignItems: 'center',
        }}
        containerClasses="rounded-2xl"
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
        <Paragraph variant="dark" variantFontSize="14" variantFontWeight="regular">
          {popupCookie.text}
        </Paragraph>
        <br className="font-eUkraine text-sm leading-[160%]" /> {popupCookie.text1}
        <Link className="pl-1 font-eUkraine text-base leading-[160%] text-orange" href="/">
          {popupCookie.linkText}
        </Link>
      </CookieConsent>
    </div>
  );
};

export default PopupCookie;
