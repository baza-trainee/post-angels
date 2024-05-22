import { SchemaTypes } from '@/components/veterans/Form/Form.props';
import * as yup from 'yup';

export const veteransForm = (translation: SchemaTypes) => {
  const {
    name,
    surname,
    city,
    email,
    phone,
    identificationDocument,
    problem,
    descriptionTermsAgreement,
  } = translation;
  const phoneRegex = /^\+38 (?!000)\d{3} (?!000)\d{3} (?!00)\d{2} (?!00)\d{2}$/;
  const nameRegex = /^[a-zA-Zа-щА-ЩіІїЇєЄґҐьЬюЮяЯ'’\- ]+$/;

  const schema = yup.object({
    name: yup
      .string()
      .required(name.errorRequired)
      .min(4, name.errorMin)
      .matches(nameRegex, name.errorType),
    surname: yup
      .string()
      .required(surname.errorRequired)
      .min(4, surname.errorRequired)
      .matches(nameRegex, name.errorType),
    city: yup.string().required(city.errorRequired).min(4, city.errorMin),
    email: yup
      .string()
      .email(email.errorType)
      .required(email.errorRequired)
      .min(4, email.errorMin)
      .matches(/^[^@ \t\r\n]+@(?!.*\.(ru|by)\b)[^@ \t\r\n]+\.[^@ \t\r\n]+$/, email.errorType),
    phone: yup
      .string()
      .required(phone.errorRequired)
      .matches(phoneRegex, phone.errorType)
      .trim()
      .min(17, phone.errorMin),
    problem: yup.string().required(problem.errorRequired).min(10, problem.errorMin),
    identificationDocument: yup
      .object({
        label: yup.string().required(identificationDocument.errorRequired),
        value: yup.string().required(identificationDocument.errorRequired),
      })
      .nonNullable()
      .required(identificationDocument.errorRequired),
    descriptionTermsAgreement: yup
      .boolean()
      .default(false)
      .oneOf([true], descriptionTermsAgreement.errorRequired),
  });

  return schema;
};
