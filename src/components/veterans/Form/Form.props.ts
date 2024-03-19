export interface FormProps {
  data: {
    name: string;
    surname: string;
    city: string;
    email: string;
    phone: string;
    select: {
      title: string;
      subtitle: string;
      options: {}[];
    };
    description: {
      title: string;
      subtitle: string;
    };
    checkbox: string;
    submitButton: {
      title: string;
      areaLabel: string;
    };
  };
}
