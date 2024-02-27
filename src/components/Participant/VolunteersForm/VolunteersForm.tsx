'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Radiobutton } from '@/components/form/Radiobutton/Radiobutton';
import { Input } from '@/components/form/Input/Input';
import * as yup from 'yup';
import { volunteersForm } from '@/utils/schema/volunteersForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { Locale } from '@/i18n.config';


import { Button } from '@/components/buttons/Button/Button';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { VolunteersFormProps } from './VolunteersForm.props';
import { fetchVolunteerFormData } from '../../../api/fetchVolunteerFormData';

type FormData = yup.InferType<typeof volunteersForm>;

export const VolunteersForm: React.FC<VolunteersFormProps> = ({
  inputFields,
  waysVolunteering,
  reasonVolunteering,
  volunteerCertificate,
  carAvailability,
  descriptionTermsAgreement,
  descriptionPrivacyPolice,
  buttonText,
  schema,
  lang
}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(volunteersForm({ translation: schema })),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
    fetchVolunteerFormData(lang, {name: "volunteer",
        lastName: "QQQQvolunteer",
        city: "volunteer",
        email: "volun@gmail.com",
        phone: "+33333333333",
        telegram: "volunteer",
        activity: "volunteerWork",
        volunteerCertificate: true,
        carAvailability: true,
        message: "volunteer"})
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container relative flex flex-col gap-10 lg:gap-[50px] xl:pt-[50px]"
      >
        <div className="relative flex flex-col flex-nowrap content-between gap-x-[172px] gap-y-8 border-t-[1px] border-t-grey-60 pt-10 lg:h-[874px] lg:flex-wrap lg:gap-x-0 xl:h-[727px]">
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
            name={waysVolunteering.name}
            title={waysVolunteering.title}
            options={waysVolunteering.options}
            placeholder={waysVolunteering.placeholder}
            className="w-full lg:w-[465px] xl:w-[480px] 2xl:w-[548px] 3xl:w-[748px]"
          />
          <div className="flex flex-col	gap-[7px]">
            <div className="flex flex-row	gap-[33px]">
              <Radiobutton
                className="items-start 2xl:items-center"
                options={volunteerCertificate.options}
                name={volunteerCertificate.name}
                title={volunteerCertificate.title}
              />
            </div>
          </div>

          <div className="flex flex-col	gap-[7px]">
            <div className="flex flex-row">
              <Radiobutton
                className="items-start 2xl:items-center"
                options={carAvailability.options}
                name={carAvailability.name}
                title={carAvailability.title}
              />
            </div>
          </div>
          <Textarea
            className="h-[258px] md:h-[284px] lg:h-[330px] xl:h-[326px] 2xl:h-[352px]"
            name={reasonVolunteering.name}
            title={reasonVolunteering.title}
            placeholder={reasonVolunteering.placeholder}
          />
        </div>
        <div className="w-max-[1200px] 2xl:w-max-[1840px] static flex flex-col gap-[31px] lg:absolute lg:bottom-[104px] lg:right-[25px] lg:w-[467px] xl:static xl:w-auto">
          <Checkbox
            className="items-start 2xl:items-center"
            name={descriptionTermsAgreement.name}
            description={descriptionTermsAgreement.description}
          />
          <Checkbox
            className="items-start 2xl:items-center"
            name={descriptionPrivacyPolice.name}
            description={descriptionPrivacyPolice.description}
          />
        </div>
        <Button
          className="w-full lg:w-[464px] lg:self-end xl:w-[280px] xl:self-start"
          type="submit"
        >
          {buttonText}
        </Button>
      </form>
    </FormProvider>
  );
};
