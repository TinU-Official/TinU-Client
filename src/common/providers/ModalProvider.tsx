import { Z_INDEX } from "@/constants/zIndex";
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

  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: Z_INDEX.BACKDROP,
  };

  return (
    <ModalContext.Provider value={{ setModals }}>
      {children}
      {modals.length > 0 && (
        <div style={backdropStyle}>
          {modals.map(({ id, element }) => (
            <Fragment key={id} >
              {element}
            </Fragment>
          ))}
        </div>
      )}
      
    </ModalContext.Provider>
  );
}
