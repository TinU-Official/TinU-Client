"use client";

import * as styles from "./chatBottomSheet.css";
import { useState, type ChangeEvent } from "react";
import IcPlus from "@/assets/icons/ic_plus.svg";
import IcAirplaneMint from "@/assets/icons/ic_airplane_mint.svg";
import IcAirplaneGrey from "@/assets/icons/ic_airplane_grey.svg";
import { motion } from "framer-motion";

export function ChatBottomSheet() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chattingInputValue, setChattingInputValue] = useState<string>("");

  const handleChangeChattingInput = (e: ChangeEvent<HTMLInputElement>) => {
    setChattingInputValue(e.target.value);
  };

  const handleClickPlusButton = (e: any) => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <motion.div
      className={styles.chatBottomSheetWrapper}
      animate={{
        height: isOpen ? "27.8rem" : "6.8rem",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.chatBottomSheetClosedSection}>
        <button type="button" className={styles.openBottomSheetButton} onClick={handleClickPlusButton}>
          <IcPlus />
        </button>
        <div className={styles.chattingInputBox}>
          <input
            className={styles.chattingInput}
            onChange={handleChangeChattingInput}
            value={chattingInputValue}
            placeholder="메세지 보내기"
          />
          <button type="button">{chattingInputValue.length === 0 ? <IcAirplaneGrey /> : <IcAirplaneMint />}</button>
        </div>
      </div>
      {isOpen && (
        <div>
          <button type="button"></button>
          <button type="button"></button>
        </div>
      )}
    </motion.div>
  );
}
