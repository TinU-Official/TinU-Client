import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface TextAreaProps extends TextInputProps {
  placeholder?: string;
  isError?: boolean;
  helperText?: string;
  disabled?: boolean;
  height?: number;
}

function TextArea({
  placeholder,
  isError = false,
  helperText,
  disabled = false,
  height = 120,
  ...inputProps
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(
    inputProps.value !== "" && inputProps.value !== undefined,
  );

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
    styles.textAreaWrapper,
    { height },
    hasText && !isFocused && !isError && !disabled && styles.textAreaWrapperFilled,
    isFocused && !isError && !disabled && styles.textAreaWrapperActive,
    isError && styles.textAreaWrapperError,
    disabled && styles.textAreaWrapperDisabled,
  ];

  return (
    <>
      <View style={wrapperStyle}>
        <TextInput
          {...inputProps}
          style={[styles.textAreaInput, disabled && styles.textAreaInputDisabled]}
          placeholder={isFocused ? "" : placeholder}
          placeholderTextColor="#9b9b9b"
          multiline
          textAlignVertical="top"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          editable={!disabled}
        />
      </View>
      {helperText && (
        <Text style={[styles.helperText, isError ? styles.helperTextError : styles.helperTextNormal]}>
          {helperText}
        </Text>
      )}
    </>
  );
}

export default TextArea;

const styles = StyleSheet.create({
  textAreaWrapper: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#f6f6f6",
  },
  textAreaWrapperFilled: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c8c8c8",
  },
  textAreaWrapperActive: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#14c3bc",
  },
  textAreaWrapperError: {
    borderWidth: 2,
    borderColor: "#f65e5e",
  },
  textAreaWrapperDisabled: {
    backgroundColor: "#dedede",
    borderWidth: 1,
    borderColor: "#c8c8c8",
  },
  textAreaInput: {
    flex: 1,
    padding: 0,
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  textAreaInputDisabled: {
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
