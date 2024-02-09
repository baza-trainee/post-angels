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
  buttonText,
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col gap-10 border-t-[1px]  border-t-grey-60 pt-10 lg:gap-[50px] xl:pt-[50px]"
      >
        <div className="relative flex flex-col flex-nowrap content-between gap-x-[172px] gap-y-4  lg:h-[504px] lg:flex-wrap lg:gap-x-0">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[1px] -translate-x-1/2 transform bg-grey-60 xl:block"></div>
          {inputFields.map(({ title, placeholder, name, type }) => (
            <Input
              title={title}
              name={name}
              type={type}
              placeholder={placeholder}
              className="w-full lg:w-[465px] xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]"
            />
          ))}
          <SelectInput
            name={waysSupport.name}
            title={waysSupport.title}
            options={waysSupport.options}
            placeholder={waysSupport.placeholder}
          />
          <Textarea
            className="h-[158px]"
            name={ourOffer.name}
            title={ourOffer.title}
            placeholder={ourOffer.placeholder}
          />
        </div>
        <div className="w-max-[1200px] 2xl:w-max-[1840px] flex flex-col gap-[31px] ">
          <Checkbox
            className="items-start 2xl:items-center"
            name={descriptionTermsAgreement.name}
            description={descriptionTermsAgreement.description}
          />
          <Paragraph className="pl-[45px] 2xl:pl-0">{coreMsg}</Paragraph>
        </div>
        <Button className="w-full lg:w-[464px] xl:w-[280px]" type="submit">
          {buttonText}
        </Button>
      </form>
    </FormProvider>
  );
};
