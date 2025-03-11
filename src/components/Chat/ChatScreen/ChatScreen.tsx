import { useScrollToBottom } from "@/hooks/Chat/useScrollToBottom";
import { DailyChatGroup } from "../DailyChatGroup/DailyChatGroup";
import * as styles from "./chatScreen.css";

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
}

export function ChatScreen({ chatList }: ChatScreenProps) {
  const { scrollRef } = useScrollToBottom({
    dependencies: [chatList],
  });

  return (
    <div className={styles.chatScreenWrapper} ref={scrollRef}>
      <DailyChatGroup chatList={chatList} />
    </div>
  );
}
