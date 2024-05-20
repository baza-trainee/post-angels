import { gql } from 'graphql-request';

export const getModalDonateData = gql`
  mutation support-data(
    $name: String!,
    $currency: String!,
    $sum: Number!,
    $date: String!
  ) {
    support-data(
      data: {
        name: $name,
        currency: $currency,
        sum: $sum,
        date: $date
      }
    ) {
      data {
        id
      }
    }
  }
`;
