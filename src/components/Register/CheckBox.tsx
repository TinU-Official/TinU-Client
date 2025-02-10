import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";
import { IcCheckComplete, IcCheckWhiteGrey } from "../../assets";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
}

function CheckBox({ onClick, checked }: CheckBoxProps): JSX.Element {
  return (
    <CheckBoxWrapper isChecked={checked} onClick={onClick}>
      <CheckBoxContent>
        {checked ? <IcCheckComplete /> : <IcCheckWhiteGrey />}
        <CheckBoxText>네, 동의합니다.</CheckBoxText>
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
