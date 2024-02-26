import { gql } from 'graphql-request';

export const getVolotnerFormData = gql`
  mutation {
    createVolonter(data: { type: "volonteer", status: "new" }) {
      data {
        id
        attributes {
          name
          lastName
          city
          email
          phone
          activity
          DriversLicense
          car
        }
      }
    }
  }
`;
