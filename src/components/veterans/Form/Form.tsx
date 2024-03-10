'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@/components/buttons/Button';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { Input } from '@/components/form/Input/Input';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { FormProps } from './Form.props';

const schema = yup.object({
  name: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  surname: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  city: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  email: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  phone: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  subscribe: yup.boolean().default(false).oneOf([true], "Поле обов'язкове для заповнення"),
  description: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  select: yup
    .object({
      label: yup.string().required("Поле обов'язкове для заповнення"),
      value: yup.string().required("Поле обов'язкове для заповнення"),
    })
    .nonNullable()
    .required("Поле обов'язкове для заповнення"),
});

type FormData = yup.InferType<typeof schema>;

export const Form = ({ data, lang }: FormProps) => {
  const { name, surname, city, phone, email, select, description, checkbox, submitButton } = data;

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="![&>*]:col-span-1 flex w-full flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:w-[1200px] xl:grid-cols-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4"
      >
        <div className="">
          <Input title={name} name="name" type="text" placeholder={name} lang={lang} />

          <Input title={surname} name="surname" type="text" placeholder={surname} lang={lang} />

          <Input title={city} name="city" type="text" placeholder={city} lang={lang} />

          <Input title={email} name="email" type="email" placeholder={email} lang={lang} />

          <Input title={phone} name="phone" type="number" placeholder={phone} lang={lang} />
        </div>

        <span className="mx-auto hidden w-0 border-l border-grey-60 xl:flex"></span>

        <div className="">
          <SelectInput
            name="select"
            title={select.title}
            options={select.options}
            placeholder={select.subtitle}
            lang={lang}
          />

          <Textarea
            name="description"
            title={description.title}
            placeholder={description.subtitle}
            lang={lang}
          />

          <Checkbox name="subscribe" description={checkbox} lang={lang} />

          <Button disabled type="submit" aria-label={submitButton.areaLabel}>
            {submitButton.title}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
