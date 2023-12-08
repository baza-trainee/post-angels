'use client';

import Link from 'next/link';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';
import { FooterDoc } from '@/components/footer/FooterDoc/FooterDoc';

import { Input } from '@/components/form/Input/Input';
import * as yup from '../../../node_modules/yup/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { Textarea } from '@/components/form/Textarea/Textarea';

const schema = yup
  .object({
    name: yup.string().required(),
    no: yup.string().required('rrrrr'),
    discr: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const Footer: React.FC<FooterProps> = ({ data, lang, modal }) => {
  const { footerNav, footerDoc, footerCop } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <footer className="bg-grey-120 pb-[43px] pt-12 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          title="Ваше ім’я"
          name="name"
          type="text"
          placeholder="Placeholder"
          register={register}
          errors={errors}
          lang={lang}
        />
        <Input
          name="no"
          type="text"
          placeholder="Placeholder"
          register={register}
          errors={errors}
          lang={lang}
        />

        <Textarea
          name="discr"
          title="Опишіть вашу проблему"
          placeholder="Введіть вашу відповідь"
          register={register}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>
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

        <div className="flex items-center justify-start gap-[231px] font-normal text-grey-0">
          <Paragraph variantFontSize="12" variant="white">
            {footerCop.name}
          </Paragraph>
          <FooterDoc footerDoc={footerDoc} modal={modal} />
        </div>
      </div>
    </footer>
  );
};
