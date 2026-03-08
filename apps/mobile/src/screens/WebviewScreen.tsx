import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { handleWebMessage } from "../navigation/messageHandlers";
import { RootStackParamList, WebToNativeMessage } from "../navigation/types";

const webUrl = process.env.EXPO_PUBLIC_WEB_URL!;

export default function WebviewScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleMessage = (event: WebViewMessageEvent) => {
    try {
      const message: WebToNativeMessage = JSON.parse(event.nativeEvent.data);
      handleWebMessage(navigation, message);
    } catch {
      // 웹에서 온 메시지가 JSON이 아닐 경우 무시
    }
  };

  return (
    <WebView
      source={{ uri: webUrl }}
      onMessage={handleMessage}
      style={styles.webview}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
