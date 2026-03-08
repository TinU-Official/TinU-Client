import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, WebToNativeMessage } from "./types";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

// 새 메시지 타입 추가 시 핸들러 함수만 여기에 추가
const handlers: {
  [M in WebToNativeMessage as M["type"]]: (
    navigation: Navigation,
    message: M
  ) => void;
} = {
  NAVIGATE_TO_CHAT: (navigation, message) => {
    navigation.navigate("Chat", message.payload);
  },
};

export const handleWebMessage = (
  navigation: Navigation,
  message: WebToNativeMessage
) => {
  const handler = handlers[message.type] as (
    nav: Navigation,
    msg: WebToNativeMessage
  ) => void;
  handler?.(navigation, message);
};
