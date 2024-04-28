import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import { PaymentHeader } from '../../../../../components/Payment/Header/PaymentHeader';
import FooterPayments from '@/components/Payment/Footer/FooterPayments';
import { revalidateTag } from 'next/cache';
import { fetchProjectsSlug } from '@/api/fetchProjectsSlug';

export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale; project: string };
}): Promise<Array<{ lang: Locale; project: string }>> {
  const projectsData = await fetchProjectsSlug(lang);

  const staticParams =
    projectsData?.map(project => {
      return {
        lang: lang,
        project: project.slug,
      };
    }) || [];

  return staticParams;
}

async function PaymentsLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  revalidateTag('project');
  const { header, logo} = common;
  const {modal} = common.payments
  return (
    <>
      <PaymentHeader data={header} lang={lang} logo={logo} modal={modal} />
      <main className=" flex-grow ">{children}</main>
      <FooterPayments /> 
    </>
  );
}
export default PaymentsLayout;
