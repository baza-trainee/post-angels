export interface PartnersSliderProps {
  id: string;
  attributes: { partnerOrgLogo: PartnerImageProps; partnerOrgTitle: string; web_link: string };
}

export interface PartnerImageProps {
  alt: string;
  src: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}
export interface PartnersDataProps {
  title: string;
  title1: string;
  button: {
    text: string;
    href: string;
  };
}

export interface PartnerDataType {
  partners: {
    data: PartnerDataProps[];
  };
}

export interface PartnerDataProps {
  id: string;
  attributes: { partnerOrgLogo: PartnerImageProps; partnerOrgTitle: string; web_link: string };
}
