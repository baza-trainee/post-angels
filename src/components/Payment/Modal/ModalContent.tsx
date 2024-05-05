import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { Button } from '@/components/buttons/Button';

const ModalContent = () => {
  return (
    <div className="">
      <div className='mb-5'>
        <input
          type="number"
          className="h-[54px] w-[320px] gap-4 rounded-[48px]  bg-grey-20 text-center ring-1   ring-inset ring-accent-primary  ring-offset-0 duration-300  hover:ring-4  sm:w-[440px] md:w-[728px]  lg:w-full  xl:w-full"
        />
      </div>

      <div className='mb-[20px]'>
        <Title variantSize="h4" tag="h4">
          Допоможи Post Angeles
        </Title>
      </div>

      <div className='mb-[10px]'>
        <Paragraph variant="dark" variantFontSize="16">
          Громадська організація Post Angeles є благодійною організацією та не змогла б існувати
          та допомагати без вашої підтримки.
        </Paragraph>
      </div>

      <div className='mb-[10px]'>
        <Paragraph variant="dark" variantFontSize="16">
          100% коштів, пожертвуваних на благодійні проєкти, використовуються виключно на потреби
          цих проєктів.
        </Paragraph>

        <div className='mb-[10px]'>
        <Paragraph variant="dark" variantFontSize="16">
Допомагаючи нам, Ви робите можливим роботу та удосконалення сервісу, що допомагає тисячам нужденних в Україні!</Paragraph>
        </div>

        <div className='mb-[122px]'>
        <Title variantSize="h4" tag="h4">
          Ми дуже вдячні за довіру та підтримку!
        </Title>
        </div>

        <div className='flex justify-center'>
            <Button variant='accent' className='w-[280px] h-[54px]'>Підтримати</Button>            
        </div>

      </div>
    </div>
  );
};

export default ModalContent;
