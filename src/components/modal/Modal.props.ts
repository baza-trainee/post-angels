import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  modalClose: () => void;
  scroll?: boolean;
  modal: {
    button: {
      label: string;
    };
  };
}