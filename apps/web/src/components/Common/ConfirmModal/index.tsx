import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import * as styles from "./confirmModal.css";

interface ConfirmModalProps {
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  confirmText: string;
  cancelText: string;
}

export function ConfirmModal({ onConfirm, onClose, title, confirmText, cancelText }: ConfirmModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div
      ref={dialogRef}
      className={styles.modalWrapper}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      tabIndex={-1}
    >
      <h2 className={styles.title} id="confirm-modal-title">
        {title}
      </h2>
      <div className={styles.buttonWrapper}>
        <Button onClick={onClose} className={styles.button} outlined>
          {cancelText}
        </Button>
        <Button onClick={onConfirm} className={styles.button}>
          {confirmText}
        </Button>
      </div>
    </div>
  );
}
