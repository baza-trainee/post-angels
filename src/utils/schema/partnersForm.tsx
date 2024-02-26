import * as yup from 'yup';

export const partnersForm = ({
  translation: {
    name,
    surname,
    city,
    email,
    phone,
    companyName,
    EDRPOU,
    waysSupport,
    descriptionTermsAgreement,
  },
}) => {
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
    companyName: yup.string().required(companyName.errorRequired).min(4, companyName.errorMin),
    EDRPOU: yup.string().required(EDRPOU.errorRequired).min(8, EDRPOU.errorMin),
    waysSupport: yup
      .object({
        label: yup.string().required(waysSupport.errorRequired),
        value: yup.string().required(waysSupport.errorRequired),
      })
      .nonNullable()
      .required(waysSupport.errorRequired),
    ourOffer: yup.string(),
    descriptionTermsAgreement: yup
      .boolean()
      .default(false)
      .oneOf([true], descriptionTermsAgreement.errorRequired),
  });

  return schema;
};
