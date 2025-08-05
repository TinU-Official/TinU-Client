import { memo } from "react";
import Button from "@/components/Common/Button/Button";
import * as styles from "./submitButton.css";

interface SubmitButtonProps {
  disabled: boolean;
  label?: string;
}

export const SubmitButton = memo(function SubmitButton({ disabled, label = "다음" }: SubmitButtonProps) {
  return (
    <Button className={styles.submitButton} type="submit" disabled={disabled}>
      <span>{label}</span>
    </Button>
  );
});
