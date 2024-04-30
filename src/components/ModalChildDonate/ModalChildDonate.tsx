import { Locale } from '@/i18n.config';
import { FC } from 'react';
import crypto from 'crypto';
import { useRouter } from 'next/navigation';
// import axios from 'axios';

interface OrderBody {
  [key: string]: string | number | string[] | number[]; // Define the properties and their types
}

const ModalDonate = ({ lang }: { lang: Locale }) => {
  const router = useRouter();
  const handelClick = async () => {
    const response = await fetch(`/${lang}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: `id-${Date.now()}`,
        order_desc: 'Благодійний внесок',
        amount: 100,
        currency: 'USD',
      }),
    });
    const res = await response.json();
    if (res.status === 'Ok') {
      router.push(res.response);
    }
  };
  return (
    <>
      <div className="flex text-3xl font-medium">
        <div className="text-accent-primary">Підтримати </div>
        <div className="text-orange">Post Angeles</div>
      </div>
      <div className="">це заглушкааааа</div>
      <button onClick={handelClick}>Підтримати</button>
    </>
  );
};

export default ModalDonate;
