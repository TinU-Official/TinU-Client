import { View } from "react-native";

interface DividerProps {
  height?: number;
}

export function Divider({ height = 1 }: DividerProps) {
  return <View style={{ width: "100%", height, backgroundColor: "#f2f2f2" }} />;
}
