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
    $supportMethods: ENUM_PARTNER_SUPPORTMETHODS
    $ourOffers: String!
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
        supportMethods: $supportMethods
      }
    ) {
      data {
        id
        attributes {
          name
          lastName
          city
          email
          phone
          partnerOrgTitle
          EDRPOU
          supportMethods
        }
      }
    }
  }
`;
