import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { ChatBottomSheet } from "@/components/Chat/ChatBottomSheet/ChatBottomSheet";
import { ChatScreen } from "@/components/Chat/ChatScreen/ChatScreen";

const mock = {
  nickname: "love juhee",
};

export default function Chat() {
  return (
    <div className={styles.chatPageWrapper}>
      <Header
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo />
      <ChatScreen />
      <ChatBottomSheet />
    </div>
  );
}
