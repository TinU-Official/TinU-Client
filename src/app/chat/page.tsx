"use client";

import { ChatBottomSheet } from "@/components/Chat/ChatBottomSheet/ChatBottomSheet";
import { ChatScreen } from "@/components/Chat/ChatScreen/ChatScreen";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";

import { useCallback, useState } from "react";

const mock = {
  nickname: "test",
};

export interface ChatText {
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
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 2,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 3,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 4,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 5,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "인녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 6,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 7,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 8,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
  {
    chatTextId: 9,
    role: "sender",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "안녕하숑",
    notRead: 1,
  },
  {
    chatTextId: 10,
    role: "receiver",
    chatType: "text",
    nickName: "세숑",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "세숑이숑",
    notRead: 1,
  },
];

export default function ChatPage() {
  const [chatList, setChatList] = useState(mockChatList);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const handleSendChat = (chat: ChatText) => {
    setChatList((prev) => [...prev, chat]);
  };

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const closeBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);

  return (
    <div className={styles.chatPageWrapper}>
      <Header
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo status="soldOut" />
      <ChatScreen chatList={chatList} closeBottomSheet={closeBottomSheet} />
      <ChatBottomSheet
        handleSendChat={handleSendChat}
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={closeBottomSheet}
        toggleBottomSheet={toggleBottomSheet}
      />
    </div>
  );
}
