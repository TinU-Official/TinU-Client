import styled from "@emotion/styled";
import { type ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...buttonElementProps }: ButtonProps) {
  return <TinUButton {...buttonElementProps}>{children}</TinUButton>;
}

const TinUButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 5.5rem;

  ${({ theme }) => theme.fonts.title2};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray_3 : theme.colors.light_4)};

  border-radius: 1.2rem;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.light_6 : theme.colors.main_mint)};

  cursor: pointer;
`;

export default Button;
