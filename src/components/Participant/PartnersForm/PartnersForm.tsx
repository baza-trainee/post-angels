'use client';

import { Input } from '@/components/form/Input/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Button } from '@/components/buttons/Button/Button';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { Locale } from '@/i18n.config';
import { PartnersFormProps } from './PartnersForm.props';

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
    .email()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  phone: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(13, 'Мінімальна довжина 4 символа'),
  companyName: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  EDRPOU: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(8, 'Мінімальна довжина 4 символа'),
  subscribe: yup.boolean().default(false).oneOf([true], "Поле обов'язкове для заповнення"),
  waysSupport: yup
    .object({
      label: yup.string().required("Поле обов'язкове для заповнення"),
      value: yup.string().required("Поле обов'язкове для заповнення"),
    })
    .nonNullable()
    .required("Поле обов'язкове для заповнення"),
  ourOffer: yup.string().min(4, 'Мінімальна довжина 4 символа'),
  descriptionTermsAgreement: yup
    .boolean()
    .default(false)
    .oneOf([true], "Поле обов'язкове для заповнення"),
});

type FormData = yup.InferType<typeof schema>;

export const PartnersForm: React.FC<PartnersFormProps> = ({
  inputFields,
  waysSupport,
  ourOffer,
  descriptionTermsAgreement,
  coreMsg,
  buttonText
}) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className='container'>
        <div className='flex flex-col flex-wrap gap-x-[344px] h-[504px] border-t-[1px] border-t-grey-60 border-t-solid pt-[50px] '>
        {inputFields.map(({ title, placeholder, name, type }) => (
          <Input title={title} name={name} type={type} placeholder={placeholder}/>
        ))}
        <SelectInput
          name={waysSupport.name}
          title={waysSupport.title}
          options={waysSupport.options}
          placeholder={waysSupport.placeholder}
          />
          <Textarea name={ourOffer.name} title={ourOffer.title} placeholder={ourOffer.placeholder} />
          </div>
        <Checkbox
          name={descriptionTermsAgreement.name}
          description={descriptionTermsAgreement.description}
        />
        <Paragraph>{coreMsg}</Paragraph>
        <Button type="submit">{buttonText}</Button>
      </form>
    </FormProvider>
  );
};
