import { gql } from 'graphql-request';

export const getVeteranFormData = gql`
  mutation CreateVeteran(
    $locale: I18NLocaleCode
    $name: String!
    $lastName: String!
    $city: String!
    $email: String!
    $phone: String!
    $document_id: String!
    $asks: String!
  ) {
    createVeteran(
      locale: $locale
      data: {
        name: $name
        lastName: $lastName
        city: $city
        email: $email
        phone: $phone
        document_id: $document_id
        asks: $asks
      }
    ) {
      data {
        id
      }
    }
  }
`;
