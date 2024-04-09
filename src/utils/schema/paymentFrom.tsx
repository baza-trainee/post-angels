import * as yup from 'yup';
import {SchemaTypes} from '../../components/Payment/Payments.props'

export const paymentsForm = (translation: SchemaTypes) => {

  const schema = yup.object().shape({
    otherAmount: yup.number()
      .positive()
      .integer()
      .required(),
    });

  return schema;
  }