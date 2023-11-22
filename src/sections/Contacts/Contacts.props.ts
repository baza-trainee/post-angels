export interface ContactsProps {
  data: {
    contactsSection: {
      title: string;
      title1: string;
      href: string;
      alt: string;
      img?: { alt: string } | undefined;
    }[];
  };
}
