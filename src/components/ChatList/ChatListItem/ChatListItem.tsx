import * as styles from "./chatListItem.css";
import Image from "next/image";

interface ChatListItemProps {
  productImage: string;
  nickname: string;
  previewMessage: string;
  receiveTime: string;
  notReadCount: number;
}

export const ChatListItem = ({
  productImage,
  nickname,
  previewMessage,
  receiveTime,
  notReadCount,
}: ChatListItemProps) => {
  return (
    <div className={styles.chatListItemWrapper}>
      <Image src={productImage} className={styles.productImage} alt="상품 이미지" width={50} height={50} />
      <div className={styles.chatContentContainer}>
        <span className={styles.nickName}>{nickname}</span>
        <p className={styles.previewMessage({ isNotRead: notReadCount >= 1 })}>{previewMessage}</p>
      </div>
      <div className={styles.chatMetaContainer({ isNotRead: notReadCount >= 1 })}>
        <span className={styles.receiveTime}>{receiveTime}</span>
        {notReadCount >= 1 && (
          <div className={styles.notReadCountBox}>
            <span className={styles.notReadCount}>{notReadCount}</span>
          </div>
        )}
      </div>
    </div>
  );
};
