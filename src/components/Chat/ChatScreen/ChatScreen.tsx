import { DailyChatGroup } from "../DailyChatGroup/DailyChatGroup";
import * as styles from "./chatScreen.css";

export function ChatScreen() {
  return (
    <div className={styles.chatScreenWrapper}>
      <DailyChatGroup />
    </div>
  );
}
