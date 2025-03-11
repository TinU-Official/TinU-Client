import * as styles from "./receiverChatBubble.css";

interface ReceiverChatBubbleProps {
  chatText: string;
}

export function ReceiverChatBubble({ chatText }: ReceiverChatBubbleProps) {
  return (
    <div className={styles.receiverChatBubbleWrapper}>
      <span className={styles.receiverChatBubbleText}>{chatText}</span>
    </div>
  );
}
