import { createContext, Fragment, ReactNode, useState } from "react";

type ModalItem = {
  id: string;
  element: ReactNode;
};

type ModalContextType = {
  setModals: React.Dispatch<React.SetStateAction<ModalItem[]>>;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalItem[]>([]);

  return (
    <ModalContext.Provider value={{ setModals }}>
      {children}
      {modals.map(({ id, element }) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </ModalContext.Provider>
  );
}
