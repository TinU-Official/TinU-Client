"use client";

import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { ChatBottomSheet } from "@/components/Chat/ChatBottomSheet/ChatBottomSheet";
import { ChatScreen } from "@/components/Chat/ChatScreen/ChatScreen";
import { useKeyboardHeight } from "@/hooks/Chat/useKeyboardHeight";

const mock = {
  nickname: "test",
};

export default function Chat() {
  const keyboardHeight = useKeyboardHeight();

  return (
    <div
      className={styles.chatPageWrapper}
      style={{
        height: keyboardHeight > 0 ? `calc(100dvh - ${keyboardHeight}px)` : "100dvh",
      }}
    >
      <Header
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo />
      <ChatScreen />
      <ChatBottomSheet />
    </div>
  );
}
