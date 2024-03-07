import { gql } from 'graphql-request';

export const getPartners = gql`
  query ($locale: I18NLocaleCode) {
    partners(locale: $locale, filters: { status: { eq: "approve" } }, pagination: { limit: 100 }) {
      data {
        id
        attributes {
          partnerOrgLogo {
            alt
            src {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
          }
          partnerOrgTitle
          web_link
        }
      }
    }
  }
`;
