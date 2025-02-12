import { type ButtonHTMLAttributes, ReactNode } from "react";
import {  buttonStyle } from "./button.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className, ...buttonElementProps }: ButtonProps) {

  return <button className={clsx(buttonStyle, className)}{...buttonElementProps}>{children}</button>;
}

export default Button;