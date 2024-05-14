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
  const phoneRegex = /^\+38 (?!000)\d{3} (?!000)\d{3} (?!00)\d{2} (?!00)\d{2}$/;
  const nameRegex = /^[a-zA-Zа-щА-ЩіІїЇєЄґҐ'’\- ]+$/;

  const schema = yup.object({
    name: yup
      .string()
      .required(name.errorRequired)
      .min(2, name.errorLength)
      .max(30, name.errorLength)
      .matches(nameRegex, name.errorType),
    surname: yup
      .string()
      .required(surname.errorRequired)
      .min(2, surname.errorLength)
      .max(30, surname.errorLength)
      .matches(nameRegex, surname.errorType),
    city: yup
      .string()
      .required(city.errorRequired)
      .min(2, city.errorLength)
      .max(30, city.errorLength)
      .matches(/^[-'a-zA-Zа-яҐґЄєІіЇї\s]*$/, city.errorType),
    email: yup
      .string()
      .email(email.errorType)
      .required(email.errorRequired)
      .min(2, email.errorLength)
      .max(256, email.errorLength)
      .matches(/^[^@ \t\r\n]+@(?!.*\.(ru|by)\b)[^@ \t\r\n]+\.[^@ \t\r\n]+$/, email.errorType),
    phone: yup
      .string()
      .required(phone.errorRequired)
      .matches(phoneRegex, phone.errorType)
      .trim()
      .min(17, phone.errorLength),

    companyName: yup
      .string()
      .required(companyName.errorRequired)
      .min(2, companyName.errorLength)
      .max(30, companyName.errorLength)
      .matches(/^[-'a-zA-Zа-яҐґЄєІіЇї\s]*$/, companyName.errorType),
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
