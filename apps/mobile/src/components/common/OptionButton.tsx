import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

interface OptionButtonProps extends TouchableOpacityProps {
  children: string;
  isSelected?: boolean;
}

const OptionButton = memo(function OptionButton({ children, isSelected = false, style, ...props }: OptionButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={[styles.base, isSelected ? styles.selected : styles.unselected, style]}
    >
      <Text style={[styles.text, isSelected ? styles.textSelected : styles.textUnselected]}>{children}</Text>
    </TouchableOpacity>
  );
});

export default OptionButton;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    height: 50,
    borderRadius: 8.5,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#e8f9f8",
    borderWidth: 1,
    borderColor: "#14c3bc",
  },
  unselected: {
    backgroundColor: "#f6f6f6",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  textSelected: {
    color: "#14c3bc",
  },
  textUnselected: {
    color: "#212121",
  },
});
