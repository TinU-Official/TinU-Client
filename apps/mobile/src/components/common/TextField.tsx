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
  const [hasText, setHasText] = useState(
    inputProps.value !== "" && inputProps.value !== undefined,
  );

  const isActivated = isFocused || hasText;

  const handleFocus = (e: Parameters<NonNullable<TextInputProps["onFocus"]>>[0]) => {
    setIsFocused(true);
    inputProps.onFocus?.(e);
  };

  const handleBlur = (e: Parameters<NonNullable<TextInputProps["onBlur"]>>[0]) => {
    setIsFocused(false);
    inputProps.onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    setHasText(text.length > 0);
    inputProps.onChangeText?.(text);
  };

  const wrapperStyle = [
    styles.textFieldWrapper,
    hasText && !isFocused && !isError && !disabled && styles.textFieldWrapperFilled,
    isFocused && !isError && !disabled && styles.textFieldWrapperActive,
    isError && styles.textFieldWrapperError,
    disabled && styles.textFieldWrapperDisabled,
  ];

  return (
    <View>
      <View style={wrapperStyle}>
        <TextInput
          {...inputProps}
          style={[styles.textFieldInput, disabled && styles.textFieldInputDisabled]}
          placeholder={isFocused ? "" : placeholder}
          placeholderTextColor="#9b9b9b"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          editable={!disabled}
        />
        {isActivated && rightAddOn}
      </View>
      {helperText && (
        <Text style={[styles.helperText, isError ? styles.helperTextError : styles.helperTextNormal]}>
          {helperText}
        </Text>
      )}
    </View>
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
  textFieldWrapperFilled: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c8c8c8",
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
    lineHeight: 12,
  },
  helperTextError: {
    color: "#f65e5e",
  },
  helperTextNormal: {
    color: "#14c3bc",
  },
});
