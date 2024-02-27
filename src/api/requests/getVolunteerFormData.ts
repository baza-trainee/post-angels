import { gql } from 'graphql-request';

export const getVolunteerFormData = gql`
  mutation CreateVolunteer($locale: I18NLocaleCode, $data) {
    createVolonter(
      locale: $locale,
      type: "volunteer", 
      status: "new", 
      data: $data) {
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
