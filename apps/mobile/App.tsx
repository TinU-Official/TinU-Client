import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const webUrl = process.env.EXPO_PUBLIC_WEB_URL!;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: webUrl }} style={styles.webview} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
});
