import { Z_INDEX } from "@/constants/zIndex";
import { createContext, ReactNode, useState } from "react";

type ModalItem = {
  id: string;
  render: (isTop: boolean) => ReactNode;
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
    backgroundColor: "rgba(90, 90, 90, 0.38)",
    zIndex: Z_INDEX.BACKDROP,
  };

  return (
    <ModalContext.Provider value={{ setModals }}>
      {children}
      {modals.length > 0 && (
        <div style={backdropStyle}>
          {modals.map(({ id, render }, idx) => {
            const isTop = idx === modals.length - 1;
            return (
            <div key={id}>
                {render(isTop)}
              </div>
            );
          })}
        </div>
      )}
      
    </ModalContext.Provider>
  );
}
