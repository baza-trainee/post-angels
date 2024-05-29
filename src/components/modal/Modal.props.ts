import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  modalClose: () => void;
  scroll?: boolean;
  className?: string;
  iconClassName?: string;
  modal: {
    button: {
      label: string;
    };
  };
}