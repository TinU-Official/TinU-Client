import { memo, type ButtonHTMLAttributes, type ReactNode } from "react";
import * as styles from "./option-button.css";

interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected?: boolean;
}

export const OptionButton = memo(function OptionButton({ children, isSelected = false, ...props }: OptionButtonProps) {
  return (
    <button type="button" {...props} className={styles.optionButtonStyle({ isSelected })}>
      {children}
    </button>
  );
});
