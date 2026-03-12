import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { IcCamera, IcChevronLeft, IcMoreVertical, IcSwap, IcXGreyBig, IcXGreySmall } from "../assets/icons";
import Button from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { Header } from "../components/common/Header";
import OptionButton from "../components/common/OptionButton";
import Select from "../components/common/Select";
import TextArea from "../components/common/TextArea";
import TextField from "../components/common/TextField";
import { TopSheet } from "../components/common/TopSheet";

interface TagProps {
  text: string;
  onRemove: () => void;
}

function Tag({ text, onRemove }: TagProps) {
  return (
    <View style={tagStyles.tagWrapper}>
      <Text style={tagStyles.tagText}>{`# ${text}`}</Text>
      <TouchableOpacity>
        <IcXGreySmall onPress={onRemove} />
      </TouchableOpacity>
    </View>
  );
}

export function CreatePostScreen() {
  const navigation = useNavigation();
  const [images, setImages] = useState<string[]>([]);
  const [tagSheetVisible, setTagSheetVisible] = useState(false);
  const [tags, setTags] = useState<string[]>(["테스트"]);
  const [tagInputText, setTagInputText] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [tradeMethod, setTradeMethod] = useState<"direct" | "delivery">("direct");
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "transfer">("cash");

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

  const handleChangeTagInput = (text: string) => {
    setTagInputText(text);
  };

  const clearTagInput = () => {
    setTagInputText("");
  };

  const handleAddTag = () => {
    const next = tagInputText.trim();

    if (!next) {
      return;
    }

    setTags((prev) => {
      if (prev.includes(next)) {
        return prev;
      }
      return [...prev, next];
    });

    setTagInputText("");
  };

  const handleChangeProductName = (text: string) => setProductName(text);

  const handleGoBack = () => navigation.goBack();

  const handleRemoveImage = (uri: string) => () => {
    setImages((prev) => prev.filter((img) => img !== uri));
  };

  const handleChangePrice = (text: string) => {
    setPrice(text.replace(/,/g, ""));
  };

  const handleOpenTagSheet = () => setTagSheetVisible(true);
  const handleCloseTagSheet = () => setTagSheetVisible(false);

  const handleRemoveTag = (tagText: string) => () => {
    setTags((prev) => prev.filter((t) => t !== tagText));
  };

  const handleSelectTradeMethod = (method: "direct" | "delivery") => () => setTradeMethod(method);
  const handleSelectPaymentMethod = (method: "cash" | "transfer") => () => setPaymentMethod(method);

  const formattedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const isSubmitDisabled = !productName.trim() || !price || images.length === 0;

  return (
    <View style={styles.screen}>
      <Header
        left={
          <TouchableOpacity onPress={handleGoBack} style={styles.headerButton}>
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
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.pageContent}>
          <View>
            <Text style={styles.sectionText}>사진을 등록해 주세요</Text>
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
                  <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveImage(uri)}>
                    <IcSwap />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <Divider />
          <View style={styles.infoSectionContainer}>
            <Text style={styles.sectionText}>상품 정보를 입력해 주세요</Text>
            <TextField placeholder="상품명" value={productName} onChangeText={handleChangeProductName} />
            <TextField
              placeholder="가격"
              rightAddOn={<Text>원</Text>}
              keyboardType="number-pad"
              value={formattedPrice}
              onChangeText={handleChangePrice}
            />
            <Select placeholder="해당하는 내용을 선택하세요">
              <Select.Trigger />
              <Select.Main>
                <Select.Option value={"카테고리1"}>{"카테고리 1"}</Select.Option>
                <Select.Option value={"카테고리2"}>{"카테고리 2"}</Select.Option>
                <Select.Option value={"카테고리3"}>{"카테고리 3"}</Select.Option>
              </Select.Main>
            </Select>
            <TextArea height={190} placeholder="내용을 입력하세요" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tagListContainer}
            >
              <TouchableOpacity style={styles.openAddTagTopSheetButton} onPress={handleOpenTagSheet}>
                <Text style={styles.openAddTagTopSheetButtonText}># 태그 입력(최대 5개)</Text>
              </TouchableOpacity>
              {tags.map((tagText) => (
                <Tag key={tagText} text={tagText} onRemove={handleRemoveTag(tagText)} />
              ))}
            </ScrollView>
          </View>
          <Divider />
          <View style={styles.optionSelectSection}>
            <Text style={styles.sectionText}>거래방식</Text>
            <View style={styles.optionButtonWrapper}>
              <OptionButton isSelected={tradeMethod === "direct"} onPress={handleSelectTradeMethod("direct")}>
                직접 거래
              </OptionButton>
              <OptionButton isSelected={tradeMethod === "delivery"} onPress={handleSelectTradeMethod("delivery")}>
                택배 거래
              </OptionButton>
            </View>
          </View>
          <View style={styles.optionSelectSection}>
            <Text style={styles.sectionText}>결제수단</Text>
            <View style={styles.optionButtonWrapper}>
              <OptionButton isSelected={paymentMethod === "cash"} onPress={handleSelectPaymentMethod("cash")}>
                현금
              </OptionButton>
              <OptionButton isSelected={paymentMethod === "transfer"} onPress={handleSelectPaymentMethod("transfer")}>
                계좌이체
              </OptionButton>
            </View>
          </View>
        </View>
        <TopSheet visible={tagSheetVisible} onClose={handleCloseTagSheet}>
          <Header
            center={<Text style={styles.headerTitle}>태그 편집</Text>}
            right={
              <TouchableOpacity style={styles.headerButton} onPress={handleCloseTagSheet}>
                <Text style={styles.confirmText}>확인</Text>
              </TouchableOpacity>
            }
          />
          <View style={styles.tagInputRow}>
            <TextInput
              placeholderTextColor="9b9b9b"
              placeholder="태그 입력(최대 5개)"
              value={tagInputText}
              onChangeText={handleChangeTagInput}
              style={styles.tagInput}
            />
            <TouchableOpacity>
              <IcXGreyBig onPress={clearTagInput} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddTag} disabled={!tagInputText.trim()}>
              <Text style={[styles.addTagButtonText, { color: tagInputText ? "#14c3bc" : "#9b9b9b" }]}>+추가</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagContainer}>
            {tags.map((tagText) => (
              <Tag key={tagText} text={tagText} onRemove={handleRemoveTag(tagText)} />
            ))}
          </View>
        </TopSheet>
      </KeyboardAwareScrollView>
      <View style={styles.bottomBar}>
        <Button disabled={isSubmitDisabled}>등록하기</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: "white",
    paddingHorizontal: 23,
    justifyContent: "center",
    shadowColor: "#686868",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 4.2,
    elevation: 8,
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
  confirmText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212121",
  },
  pageContent: {
    padding: 20,
  },
  imageSectionContainer: {
    flexDirection: "row",
    marginTop: 21,
    marginBottom: 22,
    gap: 9,
  },
  sectionText: {
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
  infoSectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
  },
  tagListContainer: {
    flexDirection: "row",
    gap: 6,
  },
  openAddTagTopSheetButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 999,
  },
  openAddTagTopSheetButtonText: {
    color: "#5d5d5d",
    fontSize: 13,
    fontWeight: "500",
  },
  tagInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 20,
    height: 60,
  },
  tagInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  addTagButtonText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  optionSelectSection: {
    marginTop: 20,
  },
  optionButtonWrapper: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
});

const tagStyles = StyleSheet.create({
  tagWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "#12b1ab",
    backgroundColor: "#e8f9f8",
  },
  tagText: {
    fontSize: 13,
    fontWeight: 500,
    color: "#12b1ab",
  },
});
