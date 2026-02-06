import React, { useCallback, useContext, useId, useState } from "react";
import { ModalContext } from "../providers/ModalProvider";

interface ModalComponentProps {
  onClose: () => void;
}

export function useModal<P extends ModalComponentProps>(
  Component: React.ComponentType<P>
) {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal은 ModalProvider 안에서 호출해야 합니다.");

  const { setModals } = context;

  const modalContainerStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    setModals((prev) => {
      const next = prev.filter((m) => m.id !== id);
  
      if (next.length === 0) {
        document.body.style.overflow = "unset";
      }
  
      return next;
    });
  }, [id, setModals]);

  const open = useCallback(
    (props?: Omit<P, "onClose">) => {
      setIsOpen(true);
      setModals((prev) => {
        const exists = prev.some((m) => m.id === id);
        const element = (
          <div style={modalContainerStyle}>
            <Component {...(props as P)} onClose={close} />
          </div>
        );

        if (exists) {
          return prev.map((m) => (m.id === id ? { id, element } : m));
        }
        return [...prev, { id, element }];
      });
      document.body.style.overflow = "hidden";
    },
    [id, setModals, close, Component]
  );

  return { isOpen, open, close };
}