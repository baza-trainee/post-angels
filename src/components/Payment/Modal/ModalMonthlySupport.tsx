import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import ModalContent from '@/components/Payment/Modal/ModalContent';
import { ModalContentProps } from './modal.props';

const ModalMonthlySupport = ({ dictionary, InputValue, setModalVisible }: ModalContentProps) => {
  return (
    <div className="w-full ">
      <div className="border-b border-grey-60 px-5 py-[40px] md:py-[50px]">
        <Title
          variantSize="h4"
          tag="h3"
          variant="dark"
          className=" mb-[10px] text-left md:text-center"
        >
          {dictionary.payments.modalSupport.title}
        </Title>

        <Paragraph variant="dark" variantFontSize="24" className=" text-left md:text-center">
          {dictionary.payments.modalSupport.MonthlySupport}
        </Paragraph>
      </div>
      <ModalContent
        InputValue={InputValue}
        dictionary={dictionary}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default ModalMonthlySupport;
