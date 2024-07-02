import { Button } from '@/components/buttons/Button';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { useState } from 'react';
import { ModalContentProps } from './modal.props';

const ModalContent: React.FC<ModalContentProps> = ({ dictionary, InputValue, setModalVisible }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handleButtonClick = (value: number) => {
    InputValue(donationAmount);
    setModalVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    InputValue(parseInt(value));
    if (
      !isNaN(parseFloat(value)) &&
      parseFloat(value) >= 0 &&
      Number.isInteger(parseFloat(value))
    ) {
      setDonationAmount(parseInt(value));
    } else {
      setDonationAmount(0);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-5 px-5 py-10 md:py-[50px] xl:px-[104px] ">
        <input
          type="number"
          className="h-[54px] w-full rounded-[48px]  bg-transparent px-4  outline-none ring-1 ring-inset ring-accent-primary duration-300 focus:ring-accent-primary  md:rounded-2xl md:ring-grey-50"
          value={donationAmount}
          onChange={handleInputChange}
        />

        <Title variantSize="h4" tag="h4">
          {dictionary.payments.modalSupport.helpPostAngeles}
        </Title>

        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription1}
        </Paragraph>

        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription2}
        </Paragraph>

        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription3}
        </Paragraph>

        <Title variantSize="h4" tag="h4">
          {dictionary.payments.modalSupport.thanksText}
        </Title>
      </div>
      <div className="flex justify-center border-t border-grey-60 py-10 md:py-[50px]">
        <Button
          variant="accent"
          className="h-[54px] w-[280px]"
          onClick={() => handleButtonClick(10)}
        >
          {dictionary.payments.modalSupport.supportBtn}
        </Button>
      </div>
    </>
  );
};

export default ModalContent;
