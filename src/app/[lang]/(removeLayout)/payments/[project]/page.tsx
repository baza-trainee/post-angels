import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { Locale } from '@/i18n.config';
import { Logo } from '@/layout/Logo';
import { getDictionary } from '@/lib/dictionary';
import FooterPayments from '@/components/Payment/Footer/FooterPayments';
import PageContent from '@/components/Payment/PageContent/PageContent';
import { SchemaTypes } from '@/components/Payment/Payments.props';

export const page = async ({ params: { lang },schema}: { params: { lang: Locale }, schema:SchemaTypes}) => {
  const { common } = await getDictionary(lang);
  const { payments} = common
  const {needToCollect, title} = common.payments
  
  return (
    <div className="container ">
      <div className="mb-10">
      <div className="mb-5 flex">
  <div className='md:my-auto md:flex xs:hidden sm:hidden mt-[40px] xl:mt-[50px] lg:mt-[50px]'>
    <Logo variantSize='big' type='dark' logo={{
      label: '',
      href: '/'
    }} />
  </div>

  <div className='md:ml-[100px] mt-[40px] ml-0 xl:ml-[120px] lg:mt-[50px] xl:mt-[50px] 2xl:ml-[250px] 3xl:ml-[500px]'>
      <Title variantSize="h4" className='break-words'>{title}</Title>
      <Paragraph variant="orange">{needToCollect}</Paragraph>
  </div>
</div>
      </div>
  <PageContent payments={payments} schema={schema}/>
      <FooterPayments />
    </div>
  );
};

export default page;

