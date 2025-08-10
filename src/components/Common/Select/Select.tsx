"use client";

import { IcChevronDown, IcChevronUp } from "@/assets/icons";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import * as styles from "./Select.css";

interface SelectContextType {
  selected: string;
  isOpen: boolean;
  setSelected: (value: string) => void;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  placeholder?: string;
}

const SelectContext = createContext<SelectContextType | null>(null);

// 1. Select.Root
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

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <SelectContext.Provider value={{ selected, isOpen, setSelected, toggleDropdown, closeDropdown, placeholder }}>
      <div className={styles.dropdownWrapper}>{children}</div>
    </SelectContext.Provider>
  );
}

// 2. Select.Trigger
function Trigger() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Trigger must be used within Select");

  const { selected, isOpen, toggleDropdown, placeholder } = context;

  return (
    <div className={styles.selectBox({ isOpen })} onClick={toggleDropdown}>
      <span className={styles.placeholderText({ isSelected: !!selected })}>{selected || placeholder}</span>
      {isOpen ? <IcChevronUp /> : <IcChevronDown />}
    </div>
  );
}

// 3. Select.Main (Option 목록 컨테이너)
function Main({ children }: { children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Main must be used within Select");

  const { isOpen, closeDropdown } = context;

  const ref = useRef<HTMLUListElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!isOpen) return null;

  return <ul className={styles.dropdownList}>{children}</ul>;
}

// 4. Select.Option
function Option({ value, children }: { value: string; children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Option must be used within Select");

  const { setSelected } = context;

  return (
    <li className={styles.dropdownItem} onClick={() => setSelected(value)}>
      {children}
    </li>
  );
}

// 합성 컴포넌트 내보내기
const Select = Object.assign(SelectRoot, {
  Trigger,
  Main,
  Option,
});

export default Select;
