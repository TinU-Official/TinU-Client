import styled from "@emotion/styled";
import { InputHTMLAttributes, ReactNode, useState } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function CheckBox({ children, text, onClick, disabled }: CheckBoxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <CheckBoxWrapper isChecked={isChecked} disabled={disabled} onClick={handleClick}>
      <CheckBoxContent>
        {children}
        {text && <CheckBoxText>{text}</CheckBoxText>}
      </CheckBoxContent>
    </CheckBoxWrapper>
  );
}

const CheckBoxWrapper = styled.div<{ disabled?: boolean; isChecked?: boolean }>`
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.light_6};
  border-radius: 1.2rem;
`;

const CheckBoxContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CheckBoxText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black_2};
`;

export default CheckBox;
