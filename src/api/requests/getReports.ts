import { gql } from 'graphql-request';

export const getReport = gql`
  query ($locale: I18NLocaleCode) {
    reports(locale: $locale) {
      data {
        id
        attributes {
          title
          name
          date
          src {
            data {
              attributes {
                name
                ext
                size
                width
                height
                url
              }
            }
          }
        }
      }
    }
  }
`;
