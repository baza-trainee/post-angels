import { gql } from 'graphql-request';

export const getContact = gql`
  query ($locale: I18NLocaleCode) {
    contactsSection(locale: $locale) {
      data {
        attributes {
          phone
          email
          address
          address_link
          socials {
            link
            name
          }
          image {
            id
            alt
            src {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
