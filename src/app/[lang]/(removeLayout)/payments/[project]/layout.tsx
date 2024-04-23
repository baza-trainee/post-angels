import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import { PaymentHeader } from '../../../../../components/Payment/Header/PaymentHeader';
import FooterPayments from '@/components/Payment/Footer/FooterPayments';

async function PaymentsLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { header, logo, modal } = common;
  return (
    <>
      <PaymentHeader data={header} lang={lang} logo={logo} modal={modal} />
      <main className=" flex-grow ">{children}</main>
      <FooterPayments /> 
    </>
  );
}
export default PaymentsLayout;
