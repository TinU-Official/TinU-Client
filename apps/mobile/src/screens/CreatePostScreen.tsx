import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { IcChevronLeft, IcMoreVertical } from "../assets/icons";
import { Header } from "../components/common/Header";

export function CreatePostScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        left={
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
            <IcChevronLeft />
          </TouchableOpacity>
        }
        center={<Text style={styles.headerTitle}>판매하기</Text>}
        right={
          <TouchableOpacity style={styles.headerButton}>
            <IcMoreVertical />
          </TouchableOpacity>
        }
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  headerButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212121",
  },
});
