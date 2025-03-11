"use client";

import { ChatBottomSheet } from "@/components/Chat/ChatBottomSheet/ChatBottomSheet";
import { ChatScreen } from "@/components/Chat/ChatScreen/ChatScreen";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";

import { useState } from "react";

const mock = {
  nickname: "test",
};

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
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 2,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 3,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 4,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 5,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 6,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 7,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 8,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
  {
    chatTextId: 9,
    role: "sender",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "사랑해",
    notRead: 1,
  },
  {
    chatTextId: 10,
    role: "receiver",
    chatType: "text",
    nickName: "틴유토끼",
    profileImg: "/sechon.png",
    time: "10:00",
    context: "주희야",
    notRead: 1,
  },
];

export default function Chat() {
  const [chatList, setChatList] = useState(mockChatList);

  // 실제 핸들러 함수

  // const handleSendChat = (chat: string) => {
  //   setChatList(chat);
  // }

  const handleSendChatTest = (chat: string) => {
    setChatList([
      ...chatList,
      {
        chatTextId: 10,
        role: "receiver",
        chatType: "text",
        nickName: "틴유토끼",
        profileImg: "/sechon.png",
        time: "10:00",
        context: "주희야",
        notRead: 1,
      },
    ]);
  };

  return (
    <div className={styles.chatPageWrapper}>
      <Header
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo />
      <ChatScreen chatList={chatList} />
      <ChatBottomSheet handleSendChat={handleSendChatTest} />
    </div>
  );
}
