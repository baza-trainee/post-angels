'use client';

import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';
import { FooterDoc } from '@/components/footer/FooterDoc/FooterDoc';

import { Input } from '@/components/form/Input/Input';
import * as yup from '../../../node_modules/yup/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';

const values = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const schema = yup.object({
  name: yup.string().required("Поле обов'язкове для заповнення").min(4, 'Мінімальна довжина 4 символа'),
  no: yup.string().required("Поле обов'язкове для заповнення").min(4, 'Мінімальна довжина 4 символа'),
  subscribe: yup.boolean().default(false).oneOf([true], "Поле обов'язкове для заповнення"),
  discr: yup.string().required("Поле обов'язкове для заповнення").min(4, 'Мінімальна довжина 4 символа'),
  a: yup
    .object({
      label: yup.string().required("Поле обов'язкове для заповнення"),
      value: yup.string().required("Поле обов'язкове для заповнення"),
    })
    .required("Поле обов'язкове для заповнення"),
});

type FormData = yup.InferType<typeof schema>;

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  const onSubmit = (data: FormData) => console.log(data);

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input title="Ваше ім’я" name="name" type="text" placeholder="Placeholder" lang={lang} />
          <Input title="Ваше прізвище" name="no" type="text" placeholder="Placeholder" lang={lang} />

          <Textarea
            name="discr"
            title="Опишіть вашу проблему"
            placeholder="Введіть вашу відповідь"
            lang={lang}
          />
          <Checkbox
            name="subscribe"
            description="Я погоджуюсь з умовами використання, та даю згоду на обробку моїх персональних даних відповідно до політики конфіденційності та GDPR"
            lang={lang}
          />

          <SelectInput
            name="a"
            title="Яка вам потрібна допомога?"
            options={values}
            placeholder="Оберіть відповідне"
            lang={lang}
          />

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
      <footer className="bg-grey-120 pb-[43px] pt-12 ">
        <div className="container flex flex-col gap-[109px] font-eUkraine">
          <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
            <Logo type="light" lang={lang} />

            <ul className="flex gap-[58px]">
              {footerNav.map(ell => (
                <li key={ell.name}>
                  <Link href={ell.href}>{ell.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-start gap-[159px] font-normal text-grey-0">
            <Paragraph variantFontSize="14" variant="white">
              {footerCop.name}
            </Paragraph>
            <FooterDoc footerDoc={footerDoc} modal={modal} />
          </div>
        </div>
      </footer>
    </>
  );
};
