'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Input } from '@/components/form/Input/Input';
import * as yup from 'yup';
import { volunteersForm } from '@/utils/schema/volunteersForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Button } from '@/components/buttons/Button/Button';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { SelectInput } from '@/components/form/SelectInput/SelectInput';
import { VolunteersFormProps } from './VolunteersForm.props';

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
}) => {
  // const [option, setOption] = useState({
  //   volunteerCertificate: false,
  //   carAvailability: false,
  // });

  // const [volunteerCertificateOption, setVolunteerCertificateOption] = useState(false);
  // const [carAvailabilityOption, setCarAvailabilityOption] = useState(false);

  // const handleCheckbox = (selectOption, fieldName) => {
  //   console.log('Checkbox clicked:', volunteerCertificateOption, selectOption);

  //   if (fieldName === 'volunteerCertificate') {
  //     setVolunteerCertificateOption(selectOption);
  //     setCarAvailabilityOption(false); // Забезпечте взаємовиключення між volunteerCertificate та carAvailability
  //   } else if (fieldName === 'carAvailability') {
  //     setCarAvailabilityOption(selectOption);
  //     setVolunteerCertificateOption(false); // Забезпечте взаємовиключення між carAvailability та volunteerCertificate
  //   }
  // };

  // const [volunteerCertificateOption, setVolunteerCertificateOption] = useState(false);

  // const handleCheckbox = (fieldName) => {
  //   console.log('Checkbox clicked:', fieldName);

  //   if (fieldName === 'volunteerCertificate') {
  //     setVolunteerCertificateOption(!volunteerCertificateOption);
  //   }
  // };

  const [volunteerCertificateOption, setVolunteerCertificateOption] = useState(false);
  const [carAvailabilityOption, setCarAvailabilityOption] = useState(false);

  const handleCheckbox = (selectOption, fieldName) => {
    // console.log('Checkbox clicked:', option, fieldName);

    if (fieldName === 'volunteerCertificate') {
      setVolunteerCertificateOption(selectOption);
      setCarAvailabilityOption(false); // Забезпечте взаємовиключення між volunteerCertificate та carAvailability
    } else if (fieldName === 'carAvailability') {
      setCarAvailabilityOption(selectOption);
      setVolunteerCertificateOption(false); // Забезпечте взаємовиключення між carAvailability та volunteerCertificate
    }
  };

  const methods = useForm<FormData>({
    resolver: yupResolver(volunteersForm({ translation: schema })),
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
            <p>Наявність волонтерського посвідчення</p>
            <div className="flex flex-row	gap-[33px]">
              <Checkbox
                className="items-start 2xl:items-center"
                name={volunteerCertificate.yes.name}
                description={volunteerCertificate.yes.description}
                checked={volunteerCertificateOption}
                onChange={() => handleCheckbox(true, 'volunteerCertificate')}
              />
              <Checkbox
                className="items-start 2xl:items-center"
                name={volunteerCertificate.no.name}
                description={volunteerCertificate.no.description}
                checked={!volunteerCertificateOption}
                onChange={() => handleCheckbox(false, 'volunteerCertificate')}
              />
            </div>
          </div>

          <div className="flex flex-col	gap-[7px]">
            <p>У Вас є власне авто?</p>
            <div className="flex flex-row	gap-[33px]">
              <Checkbox
                className="items-start 2xl:items-center"
                name={carAvailability.yes.name}
                description={carAvailability.yes.description}
                checked={carAvailabilityOption}
                onChange={() => handleCheckbox(true, 'carAvailability')}
              />
              <Checkbox
                className="items-start 2xl:items-center"
                name={carAvailability.no.name}
                description={carAvailability.no.description}
                checked={!carAvailabilityOption}
                onChange={() => handleCheckbox(false, 'carAvailability')}
              />
            </div>
          </div>
          <Textarea
            className="h-[258px] md:h-[284px] lg:h-[330px] xl:h-[331px] 2xl:h-[357px]"
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
