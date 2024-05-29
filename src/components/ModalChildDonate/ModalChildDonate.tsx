import { Locale } from '@/i18n.config';
import { Title } from '../typography/Title';
import { FormDonate } from './FormDonate';

export interface ModalDonateProps {
  title: string;
  currencyPlaceholder: string;
  amountPlaceholder: string;
  subscriptionOptions: {
    label: string;
    value: string;
  }[];
  button: {
    title: string;
    label: string;
  };
  order_desc: string;
}

const ModalDonate = ({ lang, data }: { lang: Locale; data: ModalDonateProps }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-[10px] lg:px-10">
        <Title
          variantSize="h2"
          tag="h2"
          colorVariant="accent"
          className="flex flex-col text-center"
        >
          <span>{data.title}</span>
          <span className="!text-orange">Post Angeles</span>
        </Title>
        <FormDonate lang={lang} data={data} />
      </div>
    </>
  );
};

export default ModalDonate;
