import { Header } from "@/components/Common/Header/Header";
import * as styles from "./chat.css";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";

const mock = {
  nickname: "jungwoo3490",
};

export default function Chat() {
  return (
    <>
      <Header
        isSticky
        left={<BackButton link="chat-list" />}
        center={<span className={styles.nickname}>{mock.nickname}</span>}
        right={<MoreButton />}
      />
      <ProductInfo />
    </>
  );
}
