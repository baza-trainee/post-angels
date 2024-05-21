import { gql } from 'graphql-request';

export const getModalDonateData = gql`
  mutation support($name: String!, $currency: String!, $sum: Long!, $date: DateTime!) {
    createSupportData(data: { name: $name, currency: $currency, sum: $sum, date: $date }) {
      data {
        id
      }
    }
  }
`;
