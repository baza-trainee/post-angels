import { Button } from '@/components/buttons/Button';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { useState } from 'react';
import { ModalContentProps } from './modal.props';

const ModalContent: React.FC<ModalContentProps> = ({ dictionary, InputValue }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleButtonClick = (value: number) => {
    InputValue(value);
    setIsHidden(true);
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
      <div className={`relative mb-5 mt-10`}>
        <input
          type="number"
          className="h-[54px] w-[320px] gap-4 rounded-[48px] bg-transparent  px-4 outline-none ring-1 ring-inset ring-accent-primary duration-300 focus:ring-accent-primary sm:w-[440px]  md:w-[728px] md:rounded-2xl md:ring-grey-50  lg:w-full  xl:w-full"
          value={donationAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-5">
        <Title variantSize="h4" tag="h4">
          {dictionary.payments.modalSupport.helpPostAngeles}
        </Title>
      </div>

      <div className="mb-2.5">
        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription1}
        </Paragraph>
      </div>

      <div className="mb-2.5">
        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription2}
        </Paragraph>
      </div>

      <div className="mb-5">
        <Paragraph variant="dark" variantFontSize="16">
          {dictionary.payments.modalSupport.discription3}
        </Paragraph>
      </div>

      <div className="mb-[70px] border-b border-grey-60 pb-8">
        <Title variantSize="h4" tag="h4">
          {dictionary.payments.modalSupport.thanksText}
        </Title>
      </div>

      <div className="flex justify-center ">
        <Button variant="accent" className="h-[54px] w-[280px]" onClick={() => handleButtonClick}>
          {dictionary.payments.modalSupport.supportBtn}
        </Button>
      </div>
    </>
  );
};

export default ModalContent;
