'use client';

import { FC, useState } from 'react';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix';
import { FormProvider, useForm } from 'react-hook-form';

import { fetchVeteranFormData } from '@/api/fetchVeteranFormData';
import { Button } from '@/components/buttons/Button';
import { Checkbox } from '@/components/form/Checkbox/Checkbox';
import { Input } from '@/components/form/Input/Input';
import { SelectInput } from '@/components/form/SelectInput';
import { Textarea } from '@/components/form/Textarea/Textarea';
import { veteransForm } from '@/utils/schema/veteransForm';
import { ErrorObject, FormProps } from './Form.props';

type FormData = yup.InferType<ReturnType<typeof veteransForm>>;

export const Form: FC<FormProps> = ({
  inputFields,
  identificationDocument,
  descriptionTermsAgreement,
  buttonText,
  schema,
  problem,
  notice,
  lang,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const methods = useForm<FormData>({
    resolver: yupResolver(veteransForm(schema)),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitting(true);
      console.log(data);
      const response = await fetchVeteranFormData(lang, {
        name: data.name,
        lastName: data.surname,
        city: data.city,
        email: data.email,
        phone: data.phone,
        identificationDocument: data.identificationDocument.value,
        problem: data.problem,
      });
      reset();

      Notify.success(notice.success);
    } catch (error: ErrorObject | any) {
      if (error.response.status === 400) {
        console.error('Bad request:', error.response);
      } else {
        console.error('Error occurred:', error.message);
      }
      Notify.failure(notice.fail);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-y-4 lg:flex-row lg:justify-between [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 [&>div]:lg:w-[436px] [&>div]:xl:w-[480px] [&>div]:2xl:w-[520px] [&>div]:3xl:w-[720px]"
      >
        <div>
          {inputFields.map(({ title, placeholder, name, type }) => (
            <Input key={name} title={title} name={name} type={type} placeholder={placeholder} />
          ))}
        </div>

        <span className="mx-auto hidden w-0 border-l border-grey-60 xl:flex"></span>

        <div>
          <SelectInput
            name={identificationDocument.name}
            title={identificationDocument.title}
            options={identificationDocument.options}
            placeholder={identificationDocument.placeholder}
          />

          <Textarea name={problem.name} title={problem.title} placeholder={problem.placeholder} />

          <Checkbox
            name={descriptionTermsAgreement.name}
            description={descriptionTermsAgreement.description}
          />
          <Button type="submit" disabled={submitting}>
            {buttonText}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
