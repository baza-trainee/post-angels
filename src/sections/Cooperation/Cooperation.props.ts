export interface CooperationProps {
  data: {
    cooperationSection: {
      title: string;
      title1: string;
      text: string;
      buttons: {
        partnerBtn: {
          text: string;
          link: string;
        };
        volunteerBtn: {
          text: string;
          link: string;
        };
      };
    };
  };
}
