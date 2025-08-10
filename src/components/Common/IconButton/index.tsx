import type { ButtonHTMLAttributes, ReactElement } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement<SVGElement>;
  label: string;
}

export function IconButton({ icon, label, ...props }: IconButtonProps) {
  return (
    <button type="button" aria-label={label} title={label} {...props}>
      {icon}
    </button>
  );
}
