import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import ModalContent from '@/components/Payment/Modal/ModalContent';
import { ModalContentProps } from './modal.props';

const ModalOnceSupport = ({ dictionary, InputValue }: ModalContentProps) => {
  return (
    <div className="">
      <div className=" mb-10">
        <div className="border-b border-grey-60">
          <div className="flex text-3xl font-medium mb-[10px] md:justify-center">
            <Title variantSize='h4' tag='h3' variant="dark" className="md:text-center font-black">{dictionary.payments.modalSupport.title}</Title>
          </div>
          <div className='mb-[50px] '>
            <Paragraph variant='dark' variantFontSize='24' className="md:text-center">{dictionary.payments.modalSupport.OnceSupport}</Paragraph>
          </div>
        </div>
        <ModalContent InputValue={InputValue} dictionary={dictionary} />
      </div>
    </div>
  );
};

export default ModalOnceSupport;