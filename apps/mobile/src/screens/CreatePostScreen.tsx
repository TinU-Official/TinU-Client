import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { IcCamera, IcChevronLeft, IcMoreVertical, IcSwap } from "../assets/icons";
import { Header } from "../components/common/Header";

export function CreatePostScreen() {
  const navigation = useNavigation();
  const [images, setImages] = useState<string[]>([]);

  const handlePickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      selectionLimit: 10 - images.length,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, ...result.assets.map((a) => a.uri)]);
    }
  };

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
      <View style={styles.pageWrapper}>
        <View>
          <Text style={styles.imageSectionText}>사진을 등록해 주세요</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageSectionContainer}
          >
            <TouchableOpacity style={styles.cameraButton} onPress={handlePickImages}>
              <IcCamera />
              <Text style={styles.imageCount}>{images.length}/10</Text>
            </TouchableOpacity>
            {images.map((uri) => (
              <View key={uri} style={styles.previewWrapper}>
                <Image source={{ uri }} style={styles.previewImage} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setImages((prev) => prev.filter((img) => img !== uri))}
                >
                  <IcSwap />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  pageWrapper: {
    padding: 20,
  },
  imageSectionContainer: {
    flexDirection: "row",
    marginTop: 21,
    gap: 9,
  },
  imageSectionText: {
    marginLeft: 2,
    color: "#9b9b9b",
    fontSize: 13,
    fontWeight: "400",
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  imageCount: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9b9b9b",
  },
  previewWrapper: {
    position: "relative",
  },
  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: [{ translateX: "50%" }, { translateY: "-50%" }],
  },
});
