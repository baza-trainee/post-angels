import { gql } from 'graphql-request';

export const getProjectsSlugs = gql`
  query ($locale: I18NLocaleCode) {
    projects(locale: $locale) {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`;
