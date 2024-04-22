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

  const schema = yup.object({
    name: yup.string().required(name.errorRequired).min(4, name.errorMin),
    surname: yup.string().required(surname.errorRequired).min(4, surname.errorRequired),
    city: yup.string().required(city.errorRequired).min(4, city.errorMin),
    email: yup.string().email(email.errorType).required(email.errorRequired).min(4, email.errorMin),
    phone: yup
      .string()
      .required(phone.errorRequired)
      .min(10, phone.errorMin)
      .matches(/^\+(?!0+$)\d+$/, phone.errorType),
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
