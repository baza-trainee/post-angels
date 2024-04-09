import { gql } from 'graphql-request';

export const getVeterans = gql`
  query ($locale: I18NLocaleCode) {
    veteransTechnologySection(locale: $locale) {
      data {
        attributes {
          title
          description
          image {
            alt
            id
            src {
              data {
                attributes {
                  url
                }
              }
            }
          }
          technology {
            name
            text
            image {
              alt
              id
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
    veteransHelpSection(locale: $locale) {
      data {
        attributes {
          title
          description
          image {
            alt
            id
            src {
              data {
                attributes {
                  url
                }
              }
            }
          }
          helps {
            name
            text
          }
        }
      }
    }
  }
`;
