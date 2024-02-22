import { gql } from 'graphql-request';

export const getTeam = gql`
  query ($locale: I18NLocaleCode) {
    teammates(locale: $locale) {
      data {
        id
        attributes {
          name
          lastName
          image {
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
