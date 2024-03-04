'use client';

import * as yup from 'yup';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Button } from '@/components/buttons/Button/Button';
import { Input } from '@/components/form/Input/Input';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { fetchPartnerFormData } from '../../../api/fetchPartnerFormData';
import { partnersForm } from '@/utils/schema/partnersForm';
import { PartnersFormProps } from './PartnersForm.props';

type FormData = yup.InferType<typeof partnersForm>;

export const PartnersForm: React.FC<PartnersFormProps> = ({
  inputFields,
  waysSupport,
  ourOffer,
  descriptionTermsAgreement,
  coreMsg,
  buttonText,
  schema,
  notice,
  lang,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const methods = useForm<FormData>({
    resolver: yupResolver(partnersForm({ translation: schema })),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      const response = await fetchPartnerFormData(lang, notice, {
        name: data.name,
        lastName: data.surname,
        city: data.city,
        email: data.email,
        phone: data.phone,
        partnerOrgTitle: data.companyName,
        EDRPOU: data.EDRPOU,
        supportMethods: data.waysSupport.value,
        ourOffer: data.ourOffers,
      });
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col gap-10 lg:gap-[50px] xl:pt-[50px]"
      >
        <div className="relative flex flex-col flex-nowrap content-between gap-x-[172px] gap-y-8  border-t-[1px] border-t-grey-60 pt-10  lg:h-[613px] lg:flex-wrap lg:gap-x-0 2xl:h-[608px]">
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
        <Button className="w-full lg:w-[464px] xl:w-[280px]" type="submit" disabled={submitting}>
          {buttonText}
        </Button>
      </form>
    </FormProvider>
  );
};
