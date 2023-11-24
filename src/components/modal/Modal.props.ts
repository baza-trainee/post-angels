import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  modalClose: () => void;
  modal: {
    button: {
      label: string;
    };
  };
}
