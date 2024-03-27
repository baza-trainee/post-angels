import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  modalClose: () => void;
  scroll?: boolean;
  className?: string;
  modal: {
    button: {
      label: string;
    };
  };
}