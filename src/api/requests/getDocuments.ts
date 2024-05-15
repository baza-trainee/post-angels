import { gql } from 'graphql-request';

export const getDocuments = gql`
  query ($locale: I18NLocaleCode) {
    documents(locale: $locale) {
      data {
        id
        attributes {
          title
          name

          src {
            data {
              attributes {
                name
                ext
                size
                url
              }
            }
          }
        }
      }
    }
  }
`;
