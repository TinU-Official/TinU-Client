import { ReactNode, useEffect } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 60;

interface TopSheetProps {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function TopSheet({ visible, onClose, children }: TopSheetProps) {
  const insets = useSafeAreaInsets();
  const totalHeight = insets.top + HEADER_HEIGHT;
  const translateY = useSharedValue(-totalHeight);

  useEffect(() => {
    translateY.value = withTiming(visible ? 0 : -totalHeight, { duration: 300 });
  }, [visible, totalHeight, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <Animated.View style={[styles.sheet, animatedStyle]}>{children}</Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  sheet: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
