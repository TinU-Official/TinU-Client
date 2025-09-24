"use client";

import { IcChevronDown, IcChevronUp } from "@/assets/icons";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import * as styles from "./Select.css";

interface SelectContextType {
  selected: string;
  isOpen: boolean;
  setSelected: (value: string) => void;
  toggle: () => void;
  close: () => void;
  placeholder?: string;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectRootProps {
  children: ReactNode;
  onSelect?: (value: string) => void;
  placeholder?: string;
}

function SelectRoot({ children, onSelect, placeholder }: SelectRootProps) {
  const [selected, setSelectedState] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setSelected = (value: string) => {
    setSelectedState(value);
    onSelect?.(value);
    setIsOpen(false);
  };

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <SelectContext.Provider value={{ selected, isOpen, setSelected, toggle, close, placeholder }}>
      <div className={styles.selectWrapper}>{children}</div>
    </SelectContext.Provider>
  );
}

function Trigger() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Trigger must be used within Select");

  const { selected, isOpen, toggle, placeholder } = context;

  return (
    <div className={styles.selectBox({ isOpen })} onClick={toggle}>
      <span className={styles.placeholderText({ isSelected: !!selected })}>{selected || placeholder}</span>
      {isOpen ? <IcChevronUp /> : <IcChevronDown />}
    </div>
  );
}

function Main({ children }: { children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Main must be used within Select");

  const { isOpen, close } = context;

  const ref = useRef<HTMLUListElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return <ul className={styles.selectList}>{children}</ul>;
}

function Option({ value, children }: { value: string; children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Option must be used within Select");

  const { setSelected } = context;

  return (
    <li className={styles.selectItem} onClick={() => setSelected(value)}>
      {children}
    </li>
  );
}

const Select = Object.assign(SelectRoot, {
  Trigger,
  Main,
  Option,
});

export default Select;
