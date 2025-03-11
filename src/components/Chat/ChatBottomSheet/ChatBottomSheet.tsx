import * as styles from "./chatBottomSheet.css";
import { useState, useRef, type ChangeEvent } from "react";
import IcPlus from "@/assets/icons/ic_plus.svg";
import IcAirplaneMint from "@/assets/icons/ic_airplane_mint.svg";
import IcAirplaneGrey from "@/assets/icons/ic_airplane_grey.svg";
import { motion } from "framer-motion";
import { useKeyboardFocus } from "@/hooks/Chat/useKeyboardFocus";

interface ChatText {
  chatTextId: number;
  role: "sender" | "receiver";
  chatType: string;
  nickName: string;
  profileImg: string;
  time: string;
  context: string;
  notRead: number;
}

interface ChatBottomSheetProps {
  handleSendChat: (chat: string) => void;
}

export function ChatBottomSheet({ handleSendChat }: ChatBottomSheetProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chattingInputValue, setChattingInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { handleInputFocus } = useKeyboardFocus({
    inputRef,
  });

  const handleChangeChattingInput = (e: ChangeEvent<HTMLInputElement>) => {
    setChattingInputValue(e.target.value);
  };

  const handleClickPlusButton = (e: any) => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleFocus = () => {
    handleInputFocus();
    setIsOpen(false);
  };

  const handleClickSendButton = () => {
    if (chattingInputValue.length !== 0) {
      handleSendChat("");
    }
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
            onFocus={handleFocus}
            placeholder="메세지 보내기"
          />
          <button type="button" onClick={handleClickSendButton}>
            {chattingInputValue.length === 0 ? <IcAirplaneGrey /> : <IcAirplaneMint />}
          </button>
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
