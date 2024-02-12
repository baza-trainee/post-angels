import { gql } from 'graphql-request';

export const getProjects = gql`
  query ($locale: I18NLocaleCode, $statuses: [String!]) {
    projects(locale: $locale, filters: { status: { in: $statuses } }) {
      data {
        id
        attributes {
          title
          all
          collected
          status
          startDate
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
  }
`;
