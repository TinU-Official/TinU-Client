import { ReceiverChatBubble } from "../ReceiverChatBubble/ReceiverChatBubble";
import { SenderChatBubble } from "../SenderChatBubble/SenderChatBubble";
import * as styles from "./dailyChatGroup.css";

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

interface DailyChatGroupProps {
  chatList: ChatText[];
}

export function DailyChatGroup({ chatList }: DailyChatGroupProps) {
  return (
    <div className={styles.dailyChatGroupWrapper}>
      <span className={styles.dateText}>2024년 10월 1일 (월)</span>
      <div className={styles.chatListWrapper}>
        {chatList.map((chat) => (
          <div key={chat.chatTextId} className={styles.chatBubbleWrapper({ role: chat.role })}>
            {chat?.role === "receiver" ? (
              <ReceiverChatBubble chatText={chat.context} profileImg={chat.profileImg} />
            ) : chat?.role === "sender" ? (
              <SenderChatBubble chatText={chat.context} />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
