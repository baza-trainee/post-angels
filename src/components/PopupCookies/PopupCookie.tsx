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
        contentStyle={{
          margin: 0,
          display: 'block',
        }}
        contentClasses=""
        containerClasses="!w-[320px] sm:!w-[440px] md:!w-[728px] lg:!w-[960px] xl:!w-[1200px] !bottom-2 rounded-2xl !block p-[15px] sm:p-[32px] xl:!flex xl:gap-x-6 2xl:gap-x-14 2xl:!w-[1360px] 3xl:!w-[1840px]"
        expires={150}
        overlay={true}
        hideOnAccept={true}
        buttonWrapperClasses="my-0 mx-auto text-center"
        buttonClasses="!text-grey-0 !rounded-full !w-[236px] sm:!w-full md:!w-[372px] lg:!w-[465px]  !mt-4 xl:!mt-0 !bg-orange xl:!w-[236px]"
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
        <Paragraph variant="dark" variantFontSize="16" variantFontWeight="regular">
          {popupCookie.text1}
          <Link
            className="pl-1 font-eUkraine text-base font-medium leading-[160%] text-orange"
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
