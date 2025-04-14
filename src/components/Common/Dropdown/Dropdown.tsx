"use client";

import { useState } from "react";
import * as styles from "./Dropdown.css";
import IcChevronDown from "@/assets/icons/ic_chevron_down.svg";
import IcChevronUp from "@/assets/icons/ic_chevron_up.svg";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  onSelect?: (value: string) => void;
}

function Dropdown({ placeholder, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleSelectOption = (option: string) => {
    setIsSelected(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.selectBox({ isOpen })} onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles.placeholderText({ isSelected: !!isSelected })}>{isSelected || placeholder}</span>
        {isOpen ? <IcChevronUp /> : <IcChevronDown />}
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li key={option} className={styles.dropdownItem} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
