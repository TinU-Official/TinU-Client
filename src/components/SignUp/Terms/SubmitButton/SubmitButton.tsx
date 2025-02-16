import { memo } from "react";
import Button from "@/components/Common/Button/Button";
import * as styles from "./submitButton.css";

interface SubmitButtonProps {
  disabled: boolean;
}

export const SubmitButton = memo(function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <Button className={styles.submitButton} type="submit" disabled={disabled}>
      <span>다음</span>
    </Button>
  );
});
