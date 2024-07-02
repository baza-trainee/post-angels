import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import ModalContent from '@/components/Payment/Modal/ModalContent';
import { ModalContentProps } from './modal.props';

const ModalOnceSupport = ({ dictionary, InputValue, setModalVisible }: ModalContentProps) => {
  return (
    <div className="">
      <div className=" mb-10">
        <div className="border-b border-grey-60">
          <div className="mb-[10px] flex text-3xl font-medium md:justify-center">
            <Title variantSize="h4" tag="h3" variant="dark" className="font-black md:text-center">
              {dictionary.payments.modalSupport.title}
            </Title>
          </div>
          <div className="mb-[50px] ">
            <Paragraph variant="dark" variantFontSize="24" className="md:text-center">
              {dictionary.payments.modalSupport.OnceSupport}
            </Paragraph>
          </div>
        </div>
        <ModalContent
          InputValue={InputValue}
          dictionary={dictionary}
          setModalVisible={setModalVisible}
        />
      </div>
    </div>
  );
};

export default ModalOnceSupport;
