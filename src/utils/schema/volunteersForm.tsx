import * as yup from 'yup';

export const volunteersForm = ({
  translation: {
    name,
    surname,
    city,
    email,
    phone,
    telegram,
    waysVolunteering,
    descriptionTermsAgreement,
    descriptionPrivacyPolice
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
      .matches(/^\+\d+$/, phone.errorType),
    telegram: yup.string().required(telegram.errorRequired).min(4, telegram.errorMin),
    subscribe: yup.boolean().default(false).oneOf([true], descriptionTermsAgreement.errorRequired),
    waysVolunteering: yup
      .object({
        label: yup.string().required(waysVolunteering.errorRequired),
        value: yup.string().required(waysVolunteering.errorRequired),
      })
      .nonNullable()
      .required(waysVolunteering.errorRequired),


    volunteerCertificateYes: yup
      .boolean()
      .default(false),

    volunteerCertificateNo: yup
      .boolean()
      .default(true),
    carAvailabilityYes: yup
      .boolean()
      .default(false),
    carAvailabilityNo: yup
      .boolean()
      .default(true),
    
    reasonVolunteering: yup.string(),
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