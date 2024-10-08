import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

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
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        ref={modal}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
