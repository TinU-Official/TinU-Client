import Image from "next/image";
import * as styles from "./receiverChatBubble.css";

interface ReceiverChatBubbleProps {
  chatText: string;
  profileImg: string;
}

export function ReceiverChatBubble({ chatText, profileImg }: ReceiverChatBubbleProps) {
  return (
    <div className={styles.receiverChatBubbleContainer}>
      <Image src={profileImg} alt="프로필 사진" width={30} height={30} className={styles.receiverProfileImage} />
      <div className={styles.flexEndAlignBox}>
        <div className={styles.receiverChatBubbleWrapper}>
          <span className={styles.receiverChatBubbleText}>{chatText}</span>
        </div>
        <span className={styles.timeText}>오전 10:00</span>
      </div>
    </div>
  );
}
