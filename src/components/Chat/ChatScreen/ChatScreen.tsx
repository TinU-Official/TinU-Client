import { ReceiverChatBubble } from "../ReceiverChatBubble/ReceiverChatBubble";
import * as styles from "./chatScreen.css";

export function ChatScreen() {
  return (
    <div className={styles.chatScreenWrapper}>
      <ReceiverChatBubble />
    </div>
  );
}
