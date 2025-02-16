import React, { memo } from "react";
import IcCheckComplete from "@/assets/icons/ic_check-complete.svg";
import IcCheckWhiteGrey from "@/assets/icons/ic_check-whitegrey.svg";
import * as styles from "./allAgreeCheckboxField.css";

interface AllAgreeCheckboxProps {
  isAllChecked: boolean;
  onClick: () => void;
}

export const AllAgreeCheckboxField = memo(function AllAgreeCheckbox({ isAllChecked, onClick }: AllAgreeCheckboxProps) {
  return (
    <div className={styles.allAgreeCheckboxWrapper}>
      <input className={styles.hiddenInput} type="checkbox" id="all-check" />
      <label htmlFor="all-check" onClick={onClick}>
        {isAllChecked ? <IcCheckComplete /> : <IcCheckWhiteGrey />}
      </label>
      <span className={styles.allAgreeCheckboxText}>네, 모두 동의합니다</span>
    </div>
  );
});
