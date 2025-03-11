import Image from "next/image";
import * as styles from "./senderChatBubble.css";

interface SenderChatBubbleProps {
  chatText: string;
}

export function SenderChatBubble({ chatText }: SenderChatBubbleProps) {
  return (
    <div className={styles.senderChatBubbleContainer}>
      <span className={styles.timeText}>오전 10:00</span>
      <div className={styles.senderChatBubbleWrapper}>
        <span className={styles.senderChatBubbleText}>{chatText}</span>
      </div>
    </div>
  );
}
