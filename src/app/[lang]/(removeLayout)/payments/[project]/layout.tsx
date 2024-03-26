import { Locale, i18n } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/layout/Footer';
import { PaymentHeader } from './../../../../../components/Payment/PaymentHeader';

async function PaymentsLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { header, modal, logo, footer } = common;
  return (
    <>
      {/* <PaymentHeader data={header} lang={lang} modal={modal} logo={logo} /> */}
      <main className=" flex-grow ">{children}</main>
      {/* <Footer data={footer} modal={modal} logo={logo} /> */}
    </>
  );
}
export default PaymentsLayout;
