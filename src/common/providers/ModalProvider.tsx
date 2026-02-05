import { createContext, Fragment, ReactNode, useEffect, useState } from "react";

type ModalItem = {
  id: string;
  element: ReactNode;
};

type ModalContextType = {
  modals: ModalItem[];
  setModals: React.Dispatch<React.SetStateAction<ModalItem[]>>;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalItem[]>([]);

  // 모달이 떠있으면 스크롤 막는 로직
  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modals.length]);

  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      {children}
      {modals.map(({ id, element }) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </ModalContext.Provider>
  );
}
