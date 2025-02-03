import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";
import { IcCheckMintWhite, IcCheckWhiteGrey } from "../../assets";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function CheckBox({ text, onClick, disabled, checked }: CheckBoxProps): JSX.Element {
  return (
    <CheckBoxWrapper isChecked={checked} disabled={disabled} onClick={onClick}>
      <CheckBoxContent>
        {checked ? <IcCheckMintWhite /> : <IcCheckWhiteGrey />}
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
  ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.black_2};
`;

export default CheckBox;
