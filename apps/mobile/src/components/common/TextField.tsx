import { ReactNode, useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface TextFieldProps extends TextInputProps {
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

  const hasValue = inputProps.value !== "" && inputProps.value !== undefined;
  const isActivated = isFocused || hasValue;

  const handleFocus = (e: Parameters<NonNullable<TextInputProps["onFocus"]>>[0]) => {
    setIsFocused(true);
    inputProps.onFocus?.(e);
  };

  const handleBlur = (e: Parameters<NonNullable<TextInputProps["onBlur"]>>[0]) => {
    setIsFocused(false);
    inputProps.onBlur?.(e);
  };

  const wrapperStyle = [
    styles.textFieldWrapper,
    isActivated && !isError && !disabled && styles.textFieldWrapperActive,
    isError && styles.textFieldWrapperError,
    disabled && styles.textFieldWrapperDisabled,
  ];

  return (
    <>
      <View style={wrapperStyle}>
        <TextInput
          {...inputProps}
          style={[styles.textFieldInput, disabled && styles.textFieldInputDisabled]}
          placeholder={isFocused ? "" : placeholder}
          placeholderTextColor="#9b9b9b"
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
        />
        {isFocused && rightAddOn}
      </View>
      {helperText && (
        <Text style={[styles.helperText, isError ? styles.helperTextError : styles.helperTextNormal]}>
          {helperText}
        </Text>
      )}
    </>
  );
}

export default TextField;

const styles = StyleSheet.create({
  textFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 17,
    borderRadius: 12,
    backgroundColor: "#f6f6f6",
  },
  textFieldWrapperActive: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#14c3bc",
  },
  textFieldWrapperError: {
    borderWidth: 2,
    borderColor: "#f65e5e",
  },
  textFieldWrapperDisabled: {
    backgroundColor: "#dedede",
    borderWidth: 1,
    borderColor: "#c8c8c8",
  },
  textFieldInput: {
    flex: 1,
    padding: 0,
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  textFieldInputDisabled: {
    color: "#9b9b9b",
  },
  helperText: {
    marginTop: 8,
    paddingLeft: 7,
    fontSize: 10,
    fontWeight: "500",
  },
  helperTextError: {
    color: "#f65e5e",
  },
  helperTextNormal: {
    color: "#14c3bc",
  },
});
