"use client";

import { FilterButton } from "@/components/ChatList/FilterButton/FilterButton";
import * as styles from "./chatList.css";

import { useState } from "react";
import { FilterOption } from "@/types/chatListTypes";

const FILTER_OPTIONS: FilterOption[] = ["전체", "판매", "구매"];

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
    </div>
  );
}
