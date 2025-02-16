import IcCheckGrey from "@/assets/icons/ic_check-grey.svg";
import IcCheckMint from "@/assets/icons/ic_check-mint.svg";
import IcTermDetail from "@/assets/icons/ic_term-detail.svg";
import * as styles from "./termCheckBox.css";
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

export const TermCheckbox = memo(function TermCheckbox({
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
    <div className={styles.optionalAgreeWrapper}>
      <div className={styles.agreeWrapper}>
        <input
          className={styles.hiddenInput}
          type="checkbox"
          id={`${id}`}
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor={`${id}`}>{isChecked ? <IcCheckMint /> : <IcCheckGrey />}</label>
        <div className={styles.agreeText({ isRequired })}>{text}</div>
      </div>
      <Link href={detailLink}>
        <IcTermDetail />
      </Link>
    </div>
  );
});
