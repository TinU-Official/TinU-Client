import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useRef, useState } from "react";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import {
  Animated,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Chat">;

// ─── 타입 ────────────────────────────────────────────────
interface ChatText {
  chatTextId: number;
  role: "sender" | "receiver";
  chatType: string;
  nickName: string;
  profileImg: string;
  time: string;
  context: string;
  notRead: number;
}

// ─── 목 데이터 (웹과 동일) ────────────────────────────────
const mockChatList: ChatText[] = [
  {
    chatTextId: 1,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 2,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 3,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 4,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 5,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "인녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 6,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 7,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 8,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 9,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 10,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
];

// ─── 서브 컴포넌트 ────────────────────────────────────────
function SenderChatBubble({ chatText, time }: { chatText: string; time: string }) {
  return (
    <View style={bubble.senderContainer}>
      <Text style={bubble.timeText}>{time}</Text>
      <View style={bubble.senderBubble}>
        <Text style={bubble.senderText}>{chatText}</Text>
      </View>
    </View>
  );
}

function ReceiverChatBubble({ chatText, time }: { chatText: string; time: string }) {
  return (
    <View style={bubble.receiverContainer}>
      <View style={bubble.profileImagePlaceholder} />
      <View style={bubble.receiverRight}>
        <View style={bubble.receiverBubble}>
          <Text style={bubble.receiverText}>{chatText}</Text>
        </View>
        <Text style={bubble.timeText}>{time}</Text>
      </View>
    </View>
  );
}

function ProductInfo() {
  return (
    <View style={product.wrapper}>
      <View style={product.imagePlaceholder} />
      <View style={product.detail}>
        <View style={product.titleRow}>
          <Text style={product.title}>라탄 자전거 바구니</Text>
          <View style={product.badge}>
            <Text style={product.badgeText}>판매중</Text>
          </View>
        </View>
        <Text style={product.price}>6,000원</Text>
      </View>
    </View>
  );
}

// ─── 메인 스크린 ──────────────────────────────────────────
const BOTTOM_SHEET_CLOSED = 68;
const BOTTOM_SHEET_OPEN = 210;

export default function ChatScreen({ route }: Props) {
  const { userName } = route.params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [chatList, setChatList] = useState<ChatText[]>(mockChatList);
  const [inputValue, setInputValue] = useState("");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const bottomSheetHeight = useRef(new Animated.Value(BOTTOM_SHEET_CLOSED)).current;

  const closeBottomSheet = useCallback(() => {
    Animated.timing(bottomSheetHeight, {
      toValue: BOTTOM_SHEET_CLOSED,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsBottomSheetOpen(false);
  }, [bottomSheetHeight]);

  const toggleBottomSheet = useCallback(() => {
    const toValue = isBottomSheetOpen ? BOTTOM_SHEET_CLOSED : BOTTOM_SHEET_OPEN;
    Animated.timing(bottomSheetHeight, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsBottomSheetOpen((prev) => !prev);
  }, [isBottomSheetOpen, bottomSheetHeight]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newChat: ChatText = {
      chatTextId: chatList.length + 1,
      role: "sender",
      chatType: "text",
      nickName: "나",
      profileImg: "",
      time: "오전 10:00",
      context: inputValue.trim(),
      notRead: 0,
    };
    setChatList((prev) => [...prev, newChat]);
    setInputValue("");
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 50);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      {/* 헤더 */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{userName}</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* 상품 정보 */}
      <ProductInfo />

      {/* 채팅 목록 */}
      <Pressable style={styles.chatListArea} onPress={closeBottomSheet}>
        <FlatList
          ref={flatListRef}
          data={chatList}
          keyExtractor={(item) => String(item.chatTextId)}
          contentContainerStyle={styles.chatListContent}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          ListHeaderComponent={<Text style={styles.dateText}>2024년 10월 1일 (월)</Text>}
          renderItem={({ item }) =>
            item.role === "sender" ? (
              <View style={styles.senderRow}>
                <SenderChatBubble chatText={item.context} time={item.time} />
              </View>
            ) : (
              <View style={styles.receiverRow}>
                <ReceiverChatBubble chatText={item.context} time={item.time} />
              </View>
            )
          }
        />
      </Pressable>

      {/* 인풋바 + 바텀시트 */}
      <Animated.View style={[styles.bottomSheet, { height: bottomSheetHeight, paddingBottom: insets.bottom }]}>
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.plusButton} onPress={toggleBottomSheet}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={inputValue}
              onChangeText={setInputValue}
              onFocus={closeBottomSheet}
              placeholder="메세지 보내기"
              placeholderTextColor="#c8c8c8"
            />
            <TouchableOpacity onPress={handleSend}>
              <Text style={[styles.sendIcon, inputValue.length > 0 && styles.sendIconActive]}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 확장 영역 */}
        {isBottomSheetOpen && (
          <View style={styles.expandedArea}>
            <TouchableOpacity style={styles.cameraButton}>
              <View style={styles.cameraIconBox}>
                <Text style={styles.cameraEmoji}>📷</Text>
              </View>
              <Text style={styles.cameraLabel}>이미지 전송</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

// ─── 스타일 ───────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 4,
    backgroundColor: "#ffffff",
  },
  headerButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 36,
    color: "#212121",
    lineHeight: 44,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#212121",
  },
  moreIcon: {
    fontSize: 22,
    color: "#212121",
  },
  chatListArea: {
    flex: 1,
  },
  chatListContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dateText: {
    textAlign: "center",
    fontSize: 11,
    color: "#c8c8c8",
    marginBottom: 12,
  },
  senderRow: {
    alignItems: "flex-end",
    marginVertical: 3,
  },
  receiverRow: {
    alignItems: "flex-start",
    marginVertical: 3,
  },
  bottomSheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 13,
    paddingTop: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  plusButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
  plusIcon: {
    fontSize: 20,
    color: "#6f6f6f",
    lineHeight: 24,
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 14,
    gap: 14,
    borderRadius: 12,
    backgroundColor: "#f6f6f6",
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: "#212121",
    padding: 0,
  },
  sendIcon: {
    fontSize: 18,
    color: "#c8c8c8",
  },
  sendIconActive: {
    color: "#14c3bc",
  },
  expandedArea: {
    paddingHorizontal: 42,
    marginTop: 23,
  },
  cameraButton: {
    alignItems: "center",
    gap: 8,
  },
  cameraIconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraEmoji: {
    fontSize: 24,
  },
  cameraLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#424242",
  },
});

const bubble = StyleSheet.create({
  senderContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
  },
  senderBubble: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    maxWidth: 240,
    borderRadius: 16,
    backgroundColor: "#14c3bc",
  },
  senderText: {
    fontSize: 16,
    color: "#ffffff",
  },
  receiverContainer: {
    flexDirection: "row",
    gap: 6,
  },
  profileImagePlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#dedede",
  },
  receiverRight: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
  },
  receiverBubble: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    maxWidth: 240,
    borderRadius: 16,
    backgroundColor: "#ffffff",
  },
  receiverText: {
    fontSize: 16,
    color: "#000000",
  },
  timeText: {
    fontSize: 11,
    color: "#c8c8c8",
  },
});

const product = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    height: 70,
    paddingLeft: 20,
    backgroundColor: "#ffffff",
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: "#dedede",
  },
  detail: {
    gap: 5,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: "#e8f9f8",
  },
  badgeText: {
    fontSize: 11,
    color: "#14c3bc",
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: "#9b9b9b",
  },
});
