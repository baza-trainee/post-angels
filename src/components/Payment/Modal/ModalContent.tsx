import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { Button } from '@/components/buttons/Button';
import { ModalContentProps } from './modal.props';
import { useState } from 'react';

const ModalContent: React.FC<ModalContentProps> = ({ dictionary, InputValue}) => {
  const [donationAmount, setDonationAmount] = useState<string>('');

  const handleButtonClick = (value: string) => {
    InputValue(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    InputValue(value);
    if (
      !isNaN(parseFloat(value)) &&
      parseFloat(value) >= 0 &&
      Number.isInteger(parseFloat(value))
    ) {
      setDonationAmount(value);
    } else {
      setDonationAmount('');
    }
  };

  return (
        <div>
          <div className='mb-5 relative mt-10'>
            <input
              type="number"
              className="h-[54px] w-[320px] gap-4 rounded-[48px] md:rounded-2xl  bg-transparent px-4 outline-none ring-1 ring-inset ring-accent-primary md:ring-grey-50 focus:ring-accent-primary  duration-300 sm:w-[440px] md:w-[728px]  lg:w-full  xl:w-full"
              value={donationAmount}
              onChange={handleInputChange}
            />
          </div>

          <div className='mb-[20px]'>
            <Title variantSize="h4" tag="h4">
              {dictionary.payments.modalSupport.helpPostAngeles}
            </Title>
          </div>

          <div className='mb-[10px]'>
            <Paragraph variant="dark" variantFontSize="16">
              {dictionary.payments.modalSupport.discription1}
            </Paragraph>
          </div>

          <div className='mb-[10px]'>
            <Paragraph variant="dark" variantFontSize="16">
              {dictionary.payments.modalSupport.discription2}
            </Paragraph>
          </div>


            <div className='mb-[20px]'>
              <Paragraph variant="dark" variantFontSize="16">
                {dictionary.payments.modalSupport.discription3}
              </Paragraph>
            </div>

            <div className='mb-[70px] border-b border-grey-60 pb-8'>
              <Title variantSize="h4" tag="h4">
                {dictionary.payments.modalSupport.thanksText}
              </Title>
            </div>

            <div className='flex justify-center '>
              <Button variant='accent' className='w-[280px] h-[54px]' onClick={() => handleButtonClick}>
                {dictionary.payments.modalSupport.supportBtn}
              </Button>
            </div>
        </div>
  );
};

export default ModalContent;
