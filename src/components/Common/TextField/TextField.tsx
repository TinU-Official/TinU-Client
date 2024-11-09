import styled from "@emotion/styled";
import { FocusEvent, ReactNode, useState } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  isError: boolean;
  errorMessage?: string;
  rightAddOn?: ReactNode;
}

function TextField({ placeholder, rightAddOn, isError = false, errorMessage, ...inputProps }: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (inputProps.onFocus) {
      inputProps.onFocus(e);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (inputProps.onBlur) {
      inputProps.onBlur(e);
    }
  };

  const hasValue = inputProps.value !== "" && inputProps.value !== undefined;

  console.log(inputProps.value);

  return (
    <>
      <TextFieldWrapper showPlaceholder={isFocused || hasValue} isError={isError}>
        <InputWrapper>
          <AnimatedPlaceholder isFocused={isFocused} hasValue={hasValue}>
            {placeholder}
          </AnimatedPlaceholder>
          <TextFieldInput
            {...inputProps}
            placeholder=""
            onFocus={handleFocus}
            onBlur={handleBlur}
            isFocused={isFocused}
            hasValue={hasValue}
          />
        </InputWrapper>
        {rightAddOn ?? rightAddOn}
      </TextFieldWrapper>
      {isError && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}

export default TextField;

const TextFieldWrapper = styled.div<{ showPlaceholder: boolean; isError: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 33.5rem;
  height: 6rem;
  padding: 0 1.7rem 0 2rem;

  box-shadow: inset 0 0 0 2px
    ${({ showPlaceholder, isError, theme }) => {
      if (isError) {
        return theme.colors.red;
      }
      if (showPlaceholder) {
        return theme.colors.main_mint;
      }
      return "none";
    }};
  border-radius: 12px;

  background-color: ${({ showPlaceholder, theme }) => (showPlaceholder ? theme.colors.light_4 : "#F4F4F6")};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const AnimatedPlaceholder = styled.span<{ isFocused: boolean; hasValue: boolean }>`
  position: absolute;
  left: 0;

  color: ${({ theme, isFocused, hasValue }) => (isFocused || hasValue ? theme.colors.gray_4 : theme.colors.gray_2)};

  transform: translateY(${({ isFocused, hasValue }) => (isFocused || hasValue ? "-1rem" : "0")});
  transform-origin: left;
  transition: all 0.2s ease;
  ${({ isFocused, hasValue, theme }) => (isFocused || hasValue ? theme.fonts.description2_5 : theme.fonts.body1)};
  pointer-events: none;
`;

const TextFieldInput = styled.input<{ isFocused: boolean; hasValue: boolean }>`
  width: 100%;
  padding: 0;

  border: none;
  outline: none;
  background: transparent;

  ${({ theme }) => theme.fonts.body1};

  transform: translateY(${({ isFocused, hasValue }) => (isFocused || hasValue ? "1rem" : "0")});
`;

const ErrorText = styled.p`
  margin-top: 1.8rem;
  padding-left: 0.7rem;

  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.description1};
`;
