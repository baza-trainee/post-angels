import { gql } from 'graphql-request';

export const getVolunteerFormData = gql`
  mutation CreateVolunteer(
    $locale: I18NLocaleCode
    $name: String!
    $email: String!
    $phone: String!
    $lastName: String!
    $city: String!
    $telegram: String!
    $message: String!
    $activity: ENUM_VOLONTER_ACTIVITY
    $volunteerCertificate: Boolean!
    $carAvailability: Boolean!
  ) {
    createVolonter(
      locale: $locale
      data: {
        name: $name
        email: $email
        phone: $phone
        lastName: $lastName
        city: $city
        telegram: $telegram
        message: $message
        activity: $activity
        volunteerCertificate: $volunteerCertificate
        carAvailability: $carAvailability
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
          telegram
          activity
          volunteerCertificate
          carAvailability
          message
        }
      }
    }
  }
`;
