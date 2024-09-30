import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal ({ title, children, onClose }) {
  const modal = useRef();

  useEffect(() => {
    if (modal.current) {
      modal.current.focus();
    }
  }, [modal]);

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal" ref={modal}>
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')
  );
}
