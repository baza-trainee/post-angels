import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { FC } from 'react';
import ModalContent from './ModalContent';

const ModalSupport: FC = () => {
  return (
    <>
      <div className="flex text-3xl font-medium mb-[10px]">
        <Title variantSize='h2' tag='h2'>Підтримати Post Angeles</Title>
      </div>
      <div className='mb-[50px]'>
      <Paragraph centered variant='dark' variantFontSize='24'>Щомісячна допомога</Paragraph>
      </div>
      <ModalContent/> 
    </>
  );
};

export default ModalSupport;
