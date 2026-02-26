"use client";

import { FilterButton } from "@/components/ChatList/FilterButton/FilterButton";
import * as styles from "./chatList.css";

import { ImgChatEmpty } from "@/assets/imgs";
import { ChatListItem } from "@/components/ChatList/ChatListItem/ChatListItem";
import { FilterOption } from "@/types/chatListTypes";
import { useState } from "react";

const FILTER_OPTIONS: FilterOption[] = ["전체", "판매", "구매"];

const mock = [
  {
    id: 1,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 1,
  },
  {
    id: 2,
    type: "buy",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 3,
    type: "buy",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 4,
    type: "buy",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 5,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 6,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 7,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 8,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 9,
    type: "sell",
    productImage: "/img_dummy.png",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
];

export default function ChatListPage() {
  const [filterOption, setFilterOption] = useState("전체");

  const handleClickFilterButton = (option: FilterOption) => {
    setFilterOption(option);
  };

  const filteredChats = mock.filter((chat) => {
    if (filterOption === "판매") {
      return chat.type === "sell";
    } else if (filterOption === "구매") {
      return chat.type === "buy";
    } else {
      return true;
    }
  });

  return (
    <div className={styles.chatListPageWrapper}>
      <div className={styles.chatButtonList}>
        {FILTER_OPTIONS.map((option) => (
          <FilterButton
            key={option}
            option={option}
            isSelected={filterOption === option}
            handleClickFilterButton={handleClickFilterButton}
          />
        ))}
      </div>
      <div className={styles.chatListContainer({ isEmpty: mock.length === 0 })}>
        {filteredChats.length === 0 ? (
          <div className={styles.emptyNoticeSection}>
            <ImgChatEmpty />
            <span className={styles.emptyText}>
              아직 채팅이 없어요. <br />
              맘에 드는 상품을 찾아보세요!
            </span>
          </div>
        ) : (
          filteredChats.map(({ id, productImage, nickname, previewMessage, receiveTime, notReadCount }) => (
            <ChatListItem
              key={id}
              productImage={productImage}
              nickname={nickname}
              previewMessage={previewMessage}
              receiveTime={receiveTime}
              notReadCount={notReadCount}
            />
          ))
        )}
      </div>
    </div>
  );
}
