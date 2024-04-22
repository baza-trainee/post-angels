import { gql } from 'graphql-request';

export const getAboutInNumbers = gql`
  query ($locale: I18NLocaleCode) {
    aboutUsSection(locale: $locale) {
      data {
        attributes {
          about {
            name
            measure
            title
            quantity
          }
        }
      }
    }
  }
`;
