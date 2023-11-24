'use client';
import { useEffect, MouseEvent } from 'react';

import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import { ModalProps } from './Modal.props';
import { IconButton } from '@/components/buttons/IconButton';
import { ICONS } from '@/components/icons';

const Modal = ({ modalClose, children, modal }: ModalProps) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      modalClose();
    }
  };
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown as unknown as EventListener);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
    };
  }, [modalClose]);

  return (
    <ClientOnlyPortal selector="#modal">
      <div className="bg-backdrop fixed inset-0" onClick={handleBackdropClick}>
        <div className="fixed left-1/2 top-1/2 h-auto -translate-x-1/2 -translate-y-1/2 bg-white px-24 py-20">
          <IconButton
            className="absolute right-12 top-12 h-5 w-5"
            onClick={modalClose}
            label={modal.button.label}
          >
            <ICONS.MODAL_CLOSE />
          </IconButton>
          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
