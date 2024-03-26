import * as yup from 'yup';
import { SchemaTypes } from '@/components/Participant/PartnersForm/PartnersForm.props';

export const partnersForm = (translation: SchemaTypes) => {
  const {
    name,
    surname,
    city,
    email,
    phone,
    companyName,
    EDRPOU,
    waysSupport,
    ourOffer,
    descriptionTermsAgreement,
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
    companyName: yup
      .string()
      .required(companyName.errorRequired)
      .min(2, companyName.errorLength)
      .max(30, companyName.errorLength)
      .matches(/^[^ёы\d.,!”№;%?*]*$/, companyName.errorType),
    EDRPOU: yup
      .string()
      .required(EDRPOU.errorRequired)
      .min(8, EDRPOU.errorLength)
      .max(30, EDRPOU.errorLength),
    waysSupport: yup
      .object({
        label: yup.string().required(waysSupport.errorRequired),
        value: yup.string().required(waysSupport.errorRequired),
      })
      .nonNullable()
      .required(waysSupport.errorRequired),
    ourOffer: yup.string().matches(/^[^ёы]*$/, ourOffer.errorType),
    descriptionTermsAgreement: yup
      .boolean()
      .default(false)
      .oneOf([true], descriptionTermsAgreement.errorRequired),
  });

  return schema;
};
