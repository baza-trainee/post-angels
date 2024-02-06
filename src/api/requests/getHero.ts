import { gql } from 'graphql-request';

export const getHero = gql`
  query ($locale: I18NLocaleCode) {
    heroSection(locale: $locale) {
      data {
        attributes {
          title
          subtitle
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
