import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  outlined?: boolean;
}

function Button({ children, outlined, disabled, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      {...props}
      style={[styles.base, outlined && styles.outlined, disabled && styles.disabled, style]}
    >
      <Text style={[styles.text, outlined && styles.textOutlined, disabled && styles.textDisabled]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default memo(Button);

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14c3bc",
  },
  outlined: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dedede",
  },
  disabled: {
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
    color: "#ffffff",
  },
  textOutlined: {
    color: "#9b9b9b",
  },
  textDisabled: {
    color: "#9b9b9b",
  },
});
