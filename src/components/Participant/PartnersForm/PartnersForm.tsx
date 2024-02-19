'use client';

import { Input } from '@/components/form/Input/Input';
import * as yup from 'yup';
import { partnersForm } from '@/utils/schema/partnersForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Button } from '@/components/buttons/Button/Button';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { PartnersFormProps } from './PartnersForm.props';



type FormData = yup.InferType<typeof partnersForm>;

export const PartnersForm: React.FC<PartnersFormProps> = ({
  inputFields,
  waysSupport,
  ourOffer,
  descriptionTermsAgreement,
  coreMsg,
  buttonText,
  schema

}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(partnersForm({ translation: schema })),
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
        className="container flex flex-col gap-10 lg:gap-[50px] xl:pt-[50px]"
      >
        <div className="relative flex flex-col flex-nowrap content-between gap-x-[172px] gap-y-8  pt-10 border-t-[1px] border-t-grey-60  lg:h-[613px] lg:flex-wrap lg:gap-x-0 2xl:h-[608px]">
          <div className="absolute bottom-0 left-1/2 top-[50px] hidden w-[1px] -translate-x-1/2 transform bg-grey-60 xl:block"></div>
          {inputFields.map(({ title, placeholder, name, type }) => (
            <Input
              key={name}
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
            className="h-[176px]"
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
