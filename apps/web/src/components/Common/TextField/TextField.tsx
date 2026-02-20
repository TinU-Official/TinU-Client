"use client";

import { ReactNode, FocusEvent, useState } from "react";
import * as styles from "./textField.css";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  isError?: boolean;
  helperText?: string;
  rightAddOn?: ReactNode;
  disabled?: boolean;
}

function TextField({
  placeholder,
  rightAddOn,
  isError = false,
  helperText,
  disabled = false,
  ...inputProps
}: TextFieldProps) {
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
  const isTextFieldActivated = isFocused || hasValue;

  const placeholderState = isTextFieldActivated ? (isError ? "error" : "active") : "inactive";

  return (
    <>
      <div className={styles.textFieldWrapper({ isTextFieldActivated, isError, disabled })}>
        <div className={styles.inputWrapper}>
          <span className={styles.animatedPlaceholder({ placeholderState })}>{placeholder}</span>
          <input
            {...inputProps}
            className={styles.textFieldInput({ isTextFieldActivated, disabled })}
            placeholder=""
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
          />
        </div>
        {rightAddOn && rightAddOn}
      </div>
      {helperText && <p className={styles.helperText({ isError })}>{helperText}</p>}
    </>
  );
}

export default TextField;
