import { type ButtonHTMLAttributes, ReactNode, memo } from "react";

import clsx from "clsx";
import { buttonStyle, outlinedStyle } from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outlined?: boolean;
}

function Button({ children, className, outlined, ...buttonElementProps }: ButtonProps) {
  return (
    <button className={clsx(buttonStyle, outlined && outlinedStyle, className)} {...buttonElementProps}>
      {children}
    </button>
  );
}

export default memo(Button);
