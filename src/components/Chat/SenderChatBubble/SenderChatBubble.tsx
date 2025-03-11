import * as styles from "./senderChatBubble.css";

interface SenderChatBubbleProps {
  chatText: string;
}

export function SenderChatBubble({ chatText }: SenderChatBubbleProps) {
  return (
    <div className={styles.senderChatBubbleWrapper}>
      <span className={styles.senderChatBubbleText}>{chatText}</span>
    </div>
  );
}
