import { gql } from 'graphql-request';

export const getModalDonateData = gql`
  mutation support- data($name: String!, $currency: String!, $sum: Number!) {
    support- data(data: { name: $name, currency: $currency, sum: $sum }) {
      data {
        id
      }
    }
  }
`;
