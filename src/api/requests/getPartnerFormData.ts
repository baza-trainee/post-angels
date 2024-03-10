import { gql } from 'graphql-request';

export const getPartnerFormData = gql`
  mutation CreatePartner(
    $locale: I18NLocaleCode
    $name: String!
    $lastName: String!
    $city: String!
    $email: String!
    $phone: String!
    $partnerOrgTitle: String!
    $EDRPOU: String!
    $ourOffer: String
    $supportMethods: ENUM_PARTNER_SUPPORTMETHODS
  ) {
    createPartner(
      locale: $locale
      data: {
        name: $name
        lastName: $lastName
        city: $city
        email: $email
        phone: $phone
        partnerOrgTitle: $partnerOrgTitle
        EDRPOU: $EDRPOU
        ourOffer: $ourOffer
        supportMethods: $supportMethods
      }
    ) {
      data {
        id
      }
    }
  }
`;
