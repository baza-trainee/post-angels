'use client';

import { Input } from '@/components/form/Input/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { Locale } from '@/i18n.config';

const values = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const schema = yup.object({
  name: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  no: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  subscribe: yup.boolean().default(false).oneOf([true], "Поле обов'язкове для заповнення"),
  discr: yup
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

export const Form = ({ lang }: { lang: Locale }) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-1/2 flex-col gap-4">
        <Input
          title="Ваше ім’я"
          name="name"
          type="text"
          placeholder="Ваше ім’я"
          lang={lang}
        />

        <Input
          title="Ваше прізвище"
          name="no"
          type="text"
          placeholder="Ваше прізвище"
          lang={lang}
        />

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
          name="select"
          title="Яка вам потрібна допомога?"
          options={values}
          placeholder="Оберіть відповідне"
          lang={lang}
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
