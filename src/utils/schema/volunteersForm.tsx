import * as yup from 'yup';
import { SchemaTypes } from '@/components/Participant/VolunteersForm/VolunteersForm.props';

export const volunteersForm = (translation: SchemaTypes) => {
  const {
    name,
    surname,
    city,
    email,
    phone,
    telegram,
    waysVolunteering,
    volunteerCertificate,
    carAvailability,
    reasonVolunteering,
    descriptionTermsAgreement,
    descriptionPrivacyPolice,
  } = translation;

  const schema = yup.object({
    name: yup
      .string()
      .required(name.errorRequired)
      .min(2, name.errorLength)
      .max(30, name.errorLength)
      .matches(/^[^ёы\d.,!”№;%?*]*$/, name.errorType),
    surname: yup
      .string()
      .required(surname.errorRequired)
      .min(2, surname.errorLength)
      .max(30, surname.errorLength)
      .matches(/^[^ёы\d.,!”№;%?*]*$/, surname.errorType),
    city: yup
      .string()
      .required(city.errorRequired)
      .min(2, city.errorLength)
      .max(30, city.errorLength)
      .matches(/^[^ёы\d.,!”№;%?*]*$/, city.errorType),
    email: yup
      .string()
      .email(email.errorType)
      .required(email.errorRequired)
      .min(2, email.errorLength)
      .max(256, email.errorLength),
    phone: yup
      .string()
      .required(phone.errorRequired)
      .min(10, phone.errorLength)
      .max(13, phone.errorLength)
      .matches(/^\+(?!0+$)\d+$/, phone.errorType),
    telegram: yup
      .string()
      .matches(/^[a-zA-Z0-9._@]*$/, telegram.errorType)
      .min(5, telegram.errorLength)
      .max(32, telegram.errorLength)
      ,
    waysVolunteering: yup
      .object({
        label: yup.string().required(waysVolunteering.errorRequired),
        value: yup.string().required(waysVolunteering.errorRequired),
      })
      .nonNullable()
      .required(waysVolunteering.errorRequired),
    volunteerCertificate: yup.string().required(volunteerCertificate.errorRequired),
    carAvailability: yup.string().required(carAvailability.errorRequired),
    reasonVolunteering: yup
      .string()
      .max(1000, reasonVolunteering.errorLength)
      .matches(/^[^ёы]*$/, reasonVolunteering.errorType),
    descriptionTermsAgreement: yup
      .boolean()
      .default(false)
      .oneOf([true], descriptionTermsAgreement.errorRequired),
    descriptionPrivacyPolice: yup
      .boolean()
      .default(false)
      .oneOf([true], descriptionPrivacyPolice.errorRequired),
  });

  return schema;
};
