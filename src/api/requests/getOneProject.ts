import { gql } from 'graphql-request';

export const getOneProject = gql`
  query ($locale: I18NLocaleCode, $slug: String!) {
    projects(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          all
          collected
          status
          conclusion
          info
          startDate
          finishedDate
          organizer {
            name
            image {
              id
              src {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
              alt
            }
          }
          socials {
            name
            link
          }
          document {
            name
            title
            href {
              data {
                attributes {
                  url
                  ext
                }
              }
            }
          }
          image {
            id
            alt
            src {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
    supportsData(locale: $locale, filters: { project: { slug: { eq: $slug } } }) {
      data {
        id
        attributes {
          name
          sum
          date
        }
      }
    }
  }
`;
