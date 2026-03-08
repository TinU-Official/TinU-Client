import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingView, useKeyboardHandler } from "react-native-keyboard-controller";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IcChevronLeft, IcMoreVertical } from "../assets/icons";
import { Header } from "../components/common/Header";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Chat">;

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
  {
    chatTextId: 11,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 12,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 13,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 14,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 15,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 16,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 17,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 18,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 19,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 20,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "",
    time: "오전 10:00",
    context: "세숑이숑",
    notRead: 1,
  },
];

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

export default function ChatScreen({ route }: Props) {
  const { userName } = route.params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [chatList, setChatList] = useState<ChatText[]>(mockChatList);
  const [inputValue, setInputValue] = useState("");
  const flatListRef = useRef<FlatList>(null);
  const scrollOffsetRef = useRef(0);
  const lastKeyboardHeight = useSharedValue(0);

  const scrollFlatListBy = (delta: number) => {
    flatListRef.current?.scrollToOffset({
      offset: Math.max(0, scrollOffsetRef.current + delta),
      animated: false,
    });
  };

  useKeyboardHandler(
    {
      onMove: (e) => {
        "worklet";
        const delta = e.height - lastKeyboardHeight.value;
        lastKeyboardHeight.value = e.height;
        if (Math.abs(delta) > 0.5) {
          runOnJS(scrollFlatListBy)(delta);
        }
      },
      onEnd: (e) => {
        "worklet";
        const delta = e.height - lastKeyboardHeight.value;
        lastKeyboardHeight.value = e.height;
        if (Math.abs(delta) > 0.5) {
          runOnJS(scrollFlatListBy)(delta);
        }
      },
    },
    [],
  );

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
      <Header
        left={
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
            <IcChevronLeft />
          </TouchableOpacity>
        }
        center={<Text style={styles.headerTitle}>{userName}</Text>}
        right={
          <TouchableOpacity style={styles.headerButton}>
            <IcMoreVertical />
          </TouchableOpacity>
        }
      />

      <ProductInfo />

      <View style={styles.chatListArea}>
        <FlatList
          ref={flatListRef}
          data={chatList}
          keyExtractor={(item) => String(item.chatTextId)}
          contentContainerStyle={styles.chatListContent}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          onScroll={(e) => {
            scrollOffsetRef.current = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
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
      </View>

      <View style={[styles.inputBar, { paddingBottom: insets.bottom }]}>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="메세지 보내기"
            placeholderTextColor="#c8c8c8"
          />
          <TouchableOpacity onPress={handleSend}>
            <Text style={[styles.sendIcon, inputValue.length > 0 && styles.sendIconActive]}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  chatListArea: {
    flex: 1,
  },
  chatListContent: {
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  dateText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    color: "#9b9b9b",
    marginBottom: 16,
  },
  senderRow: {
    alignItems: "flex-end",
    marginVertical: 9,
  },
  receiverRow: {
    alignItems: "flex-start",
    marginVertical: 9,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 13,
    paddingTop: 16,
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
    fontWeight: "400",
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
    fontWeight: "400",
    color: "#000000",
  },
  timeText: {
    fontSize: 11,
    fontWeight: "500",
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
    lineHeight: 20,
    color: "#212121",
  },
  badge: {
    width: 40,
    height: 20,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 1,
    backgroundColor: "#14c3bc",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 11,
    color: "#ffffff",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#9b9b9b",
  },
});
