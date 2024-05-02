import { Locale } from '@/i18n.config';
import { Title } from '../typography/Title';
import ModalChildDonateForm from './ModalChildDonateForm/ModalChildDonateForm';

interface OrderBody {
  [key: string]: string | number | string[] | number[]; // Define the properties and their types
}

const ModalDonate = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <div className="flex w-[360px] flex-col items-center gap-y-10 px-5 py-24">
        <Title
          variantSize="h2"
          tag="h2"
          colorVariant="accent"
          className="flex flex-col text-center"
        >
          <span>Підтримати</span>
          <span className="!text-orange">Post Angeles</span>
        </Title>
        <ModalChildDonateForm lang={lang} />
      </div>
    </>
  );
};

export default ModalDonate;
