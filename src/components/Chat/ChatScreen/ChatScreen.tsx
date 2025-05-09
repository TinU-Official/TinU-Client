import { useScrollToBottom } from "@/hooks/Chat/useScrollToBottom";
import { DailyChatGroup } from "../DailyChatGroup/DailyChatGroup";
import * as styles from "./chatScreen.css";

import { memo } from "react";

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

interface ChatScreenProps {
  chatList: ChatText[];
  closeBottomSheet: VoidFunction;
}

export const ChatScreen = memo(function ChatScreen({ chatList, closeBottomSheet }: ChatScreenProps) {
  const { scrollRef } = useScrollToBottom({
    dependencies: [chatList],
  });

  return (
    <div className={styles.chatScreenWrapper} ref={scrollRef} onClick={closeBottomSheet}>
      <DailyChatGroup chatList={chatList} />
    </div>
  );
});
