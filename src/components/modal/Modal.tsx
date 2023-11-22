'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './Modal.props';

// const Modal = ({ onClose }: ModalProps) => {
const Modal = ({ onClose, children }: ModalProps) => {
  const ref = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('overflow-y-hidden');
    ref.current = document.querySelector('#modal');
    setMounted(true);

    return () => {
      document.documentElement.classList.remove('overflow-y-hidden');
    };
  }, []);

  return mounted
    ? createPortal(
        <div>
          <div className="fixed inset-0 bg-black/25" onClick={onClose}></div>
          <div className="fixed left-1/2 top-1/2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 bg-white px-24 py-20">
            {children}
            <button className="absolute right-12 top-12" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <line x1="0.646447" y1="20.6464" x2="20.6464" y2="0.646447" stroke="black" />
                <line x1="1.35355" y1="0.646447" x2="21.3536" y2="20.6464" stroke="black" />
              </svg>
            </button>
          </div>
        </div>,
        ref.current as Element
      )
    : null;
};

export default Modal;
