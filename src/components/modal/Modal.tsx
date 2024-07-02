'use client';
import { MouseEvent, useEffect } from 'react';

import { IconButton } from '@/components/buttons/IconButton';
import { ICONS } from '@/components/icons';
import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import { ModalProps } from './Modal.props';

const Modal = ({
  modalClose,
  children,
  modal,
  className,
  iconClassName,
  overlayClassName,
  scroll = false,
}: ModalProps) => {
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
        className={`fixed inset-0 z-[99] flex items-center justify-center bg-backdrop px-4 ${overlayClassName}`}
        onClick={handleBackdropClick}
      >
        <div className={`modal-animation relative h-auto max-h-[1000px] bg-white  ${className}`}>
          <IconButton
            className={`absolute right-10 h-5 w-5 md:top-[35px] lg:top-10 ${iconClassName}`}
            onClick={modalClose}
            label={modal.button.label}
          >
            <ICONS.MODAL_CLOSE />
          </IconButton>
          <div className={` ${scroll ? 'scrollbar h-full overflow-y-scroll ' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
