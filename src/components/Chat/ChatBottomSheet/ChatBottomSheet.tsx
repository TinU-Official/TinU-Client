import * as styles from "./chatBottomSheet.css";
import { useState, useRef, type ChangeEvent } from "react";
import IcPlus from "@/assets/icons/ic_plus.svg";
import IcAirplaneMint from "@/assets/icons/ic_airplane_mint.svg";
import IcAirplaneGrey from "@/assets/icons/ic_airplane_grey.svg";
import IcCamera from "@/assets/icons/ic_camera.svg";
import { motion } from "framer-motion";
import { ChatText } from "@/app/chat/page";

interface ChatBottomSheetProps {
  isBottomSheetOpen: boolean;
  handleSendChat: (chat: ChatText) => void;
  closeBottomSheet: VoidFunction;
  toggleBottomSheet: VoidFunction;
}

export function ChatBottomSheet({
  isBottomSheetOpen,
  handleSendChat,
  closeBottomSheet,
  toggleBottomSheet,
}: ChatBottomSheetProps) {
  const [chattingInputValue, setChattingInputValue] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeChattingInput = (e: ChangeEvent<HTMLInputElement>) => {
    setChattingInputValue(e.target.value);
  };

  const handleClickPlusButton = () => {
    toggleBottomSheet();
  };

  const handleFocus = () => {
    closeBottomSheet();
  };

  // 전송 버튼 이벤트 핸들러
  const handleClickSendButton = () => {};

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // TODO
    // 바이너리 file 버킷으로 전송하는 로직 구현하기
  };

  const handleClickImageUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className={styles.chatBottomSheetWrapper}
      animate={{
        height: isBottomSheetOpen ? "27.8rem" : "6.8rem",
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
      {isBottomSheetOpen && (
        <div className={styles.buttonListWrapper}>
          <button type="button" className={styles.selectImageButton} onClick={handleClickImageUpload}>
            <div className={styles.cameraIconWrapper}>
              <IcCamera />
            </div>
            <span className={styles.selectImageButtonText}>이미지 전송</span>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleSelectImage}
            className={styles.hiddenInput}
          />
        </div>
      )}
    </motion.div>
  );
}
