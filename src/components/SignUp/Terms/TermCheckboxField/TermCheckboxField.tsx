import IcCheckGrey from "@/assets/icons/ic_check-grey.svg";
import IcCheckMint from "@/assets/icons/ic_check-mint.svg";
import IcTermDetail from "@/assets/icons/ic_term-detail.svg";
import * as styles from "./termCheckboxField.css";
import Link from "next/link";
import { memo, useCallback } from "react";

interface TermCheckboxProps {
  id: number;
  text: string;
  isChecked: boolean;
  isRequired: boolean;
  detailLink: string;
  onChangeChecked: (id: number, checked: boolean) => void;
}

export const TermCheckboxField = memo(function TermCheckbox({
  id,
  text,
  isChecked,
  isRequired,
  detailLink,
  onChangeChecked,
}: TermCheckboxProps) {
  const handleChange = useCallback(() => {
    onChangeChecked(id, isChecked);
  }, [id, isChecked, onChangeChecked]);

  return (
    <div className={styles.termCheckboxFieldWrapper}>
      <div className={styles.termCheckboxSection}>
        <input
          className={styles.hiddenInput}
          type="checkbox"
          id={`${id}`}
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor={`${id}`}>{isChecked ? <IcCheckMint /> : <IcCheckGrey />}</label>
        <p>
          <span className={styles.termsType({ isRequired })}>{isRequired ? "[필수] " : "[선택] "}</span>
          <span className={styles.termText}>{text}</span>
        </p>
      </div>
      <Link href={detailLink}>
        <IcTermDetail />
      </Link>
    </div>
  );
});
