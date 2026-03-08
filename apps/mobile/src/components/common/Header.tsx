import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 60;

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export function Header({ left, center, right }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.inner}>
        <View style={styles.left}>{left}</View>
        <View style={styles.center}>{center}</View>
        <View style={styles.right}>{right}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
  },
  inner: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    position: "absolute",
    left: 8,
    height: HEADER_HEIGHT,
    justifyContent: "center",
    zIndex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    position: "absolute",
    right: 8,
    height: HEADER_HEIGHT,
    justifyContent: "center",
    zIndex: 1,
  },
});
