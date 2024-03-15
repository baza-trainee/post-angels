'use client';
import { useEffect, MouseEvent } from 'react';

import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import { ModalProps } from './Modal.props';
import { IconButton } from '@/components/buttons/IconButton';
import { ICONS } from '@/components/icons';

const Modal = ({ modalClose, children, modal, className, scroll = false }: ModalProps) => {
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
      <div
        className="items-center justify-center fixed inset-0 flex bg-backdrop p-10"
        onClick={handleBackdropClick}
      >
        <div className={`modal-animation relative h-auto max-h-[1000px]  bg-white px-24 py-20 ${className} `}>
          <IconButton
            className="absolute right-12 top-12 h-5 w-5"
            onClick={modalClose}
            label={modal.button.label}
          >
            <ICONS.MODAL_CLOSE />
          </IconButton>
          <div className={` ${scroll ? 'scrollbar h-[600px] overflow-y-scroll' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;