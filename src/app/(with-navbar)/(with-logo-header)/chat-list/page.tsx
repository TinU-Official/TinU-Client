"use client";

import { FilterButton } from "@/components/ChatList/FilterButton/FilterButton";
import * as styles from "./chatList.css";

import { useState } from "react";
import { FilterOption } from "@/types/chatListTypes";
import { ChatListItem } from "@/components/ChatList/ChatListItem/ChatListItem";

const FILTER_OPTIONS: FilterOption[] = ["전체", "판매", "구매"];

const mock = [
  {
    id: 1,
    productImage: "",
    nickname: "테스트",
    previewMessage: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 1,
  },
  {
    id: 2,
    productImage: "",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 3,
    productImage: "",
    nickname: "테스트",
    previewMessage: "안녕하세요안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 4,
    productImage: "",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
  {
    id: 5,
    productImage: "",
    nickname: "테스트",
    previewMessage: "안녕하세요",
    receiveTime: "3시간 전",
    notReadCount: 0,
  },
];

export default function page() {
  const [filterOption, setFilterOption] = useState("전체");

  const handleClickFilterButton = (option: FilterOption) => {
    setFilterOption(option);
  };
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
      <div>
        {mock.map(({ id, productImage, nickname, previewMessage, receiveTime, notReadCount }) => (
          <ChatListItem
            key={id}
            productImage={productImage}
            nickname={nickname}
            previewMessage={previewMessage}
            receiveTime={receiveTime}
            notReadCount={notReadCount}
          />
        ))}
      </div>
    </div>
  );
}
