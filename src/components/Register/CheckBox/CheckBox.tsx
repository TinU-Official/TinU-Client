"use client"

import { InputHTMLAttributes, ReactNode } from "react";
import IcCheckComplete from "@/assets/icons/ic_check-complete.svg";
import IcCheckWhiteGrey from "@/assets/icons/ic_check-whitegrey.svg";
import * as styles from './checkBox.css';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  checked: boolean;
}

export function CheckBox({ onClick, checked }: CheckBoxProps) {
  return (
    <div className={styles.checkboxWrapper} onClick={onClick}>
      <div className={styles.checkboxContent}>
        {checked ? <IcCheckComplete /> : <IcCheckWhiteGrey />}
        <span className={styles.checkboxText}>네, 동의합니다.</span>
      </div>
    </div>
  );
}

export default CheckBox;