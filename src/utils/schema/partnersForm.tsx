import * as yup from 'yup';

export const partnersForm = yup.object({
  name: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  surname: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  city: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  email: yup
    .string()
    .email('Значення повинно бути типу "example@mail.com"')
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  phone: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(10, 'Мінімальна довжина 10 символа')
    .matches(/^\+\d+$/, 'Значення повинно починатись із "+"'),
  companyName: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(4, 'Мінімальна довжина 4 символа'),
  EDRPOU: yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .min(8, 'Мінімальна довжина 8 символа'),
  subscribe: yup.boolean().default(false).oneOf([true], "Поле обов'язкове для заповнення"),
  waysSupport: yup
    .object({
      label: yup.string().required("Поле обов'язкове для заповнення"),
      value: yup.string().required("Поле обов'язкове для заповнення"),
    })
    .nonNullable()
    .required("Поле обов'язкове для заповнення"),
  ourOffer: yup.string().min(4, 'Мінімальна довжина 4 символа'),
  descriptionTermsAgreement: yup
    .boolean()
    .default(false)
    .oneOf([true], "Поле обов'язкове для заповнення"),
});
