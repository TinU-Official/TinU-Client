import { ReactNode, useCallback, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal은 ModalProvider 안에서 호출해야 합니다.");

  const { setModals } = context;

  const open = useCallback(
    (render: (close: () => void) => ReactNode) => {
      const id = crypto.randomUUID();

      const close = () => {
        setModals((prev) => {
          const next = prev.filter((m) => m.id !== id);

          if (next.length === 0) {
            document.body.style.overflow = "unset";
          }

          return next;
        });
      };

      setModals((prev) => [
        ...prev,
        {
          id,
          render: () => render(close),
        },
      ]);

      document.body.style.overflow = "hidden";
    },
    [setModals],
  );

  return { open };
}
