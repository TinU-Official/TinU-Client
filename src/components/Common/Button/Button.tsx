import { type ButtonHTMLAttributes, ReactNode, memo } from "react";

import clsx from "clsx";
import { buttonStyle } from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className, ...buttonElementProps }: ButtonProps) {
  return (
    <button className={clsx(buttonStyle, className)} {...buttonElementProps}>
      {children}
    </button>
  );
}

export default memo(Button);
