import { ReactNode } from 'react';

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}
