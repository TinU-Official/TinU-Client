import { NICKNAME_MESSAGES } from "@/constants/message";
import { MemoizedStepIcon } from "../StepIcon/StepIcon";
import * as styles from "./info.css";

import { useState } from "react";
import TextField from "@/components/Common/TextField/TextField";
import Button from "@/components/Common/Button/Button";
import { ProfileImagePicker } from "./ProfileImagePicker";

interface InfoProps {
  onNext: (nickname: string, profileImage: File | null) => void;
}

export function Info({ onNext }: InfoProps) {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const isValidNickname = nickname.length >= 2 && nickname.length <= 15;
  const isDuplicateNickname = false;
  const isAvailableNickname = isValidNickname && !isDuplicateNickname && nickname !== "";

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/[^가-힣a-zA-Z0-9]/.test(inputValue)) return;
    setNickname(inputValue);
  };

  const onChangeImage = (imageFile: File | null) => {
    setProfileImage(imageFile);
  };

  const handleClickNextButton = () => {
    onNext(nickname, profileImage);
  };

  const isError = nickname !== "" && (!isValidNickname || isDuplicateNickname);
  const helperText =
    nickname === ""
      ? NICKNAME_MESSAGES.EMPTY
      : !isValidNickname
        ? NICKNAME_MESSAGES.INVALID_LENGTH
        : isDuplicateNickname
          ? NICKNAME_MESSAGES.DUPLICATE
          : NICKNAME_MESSAGES.AVAILABLE;

  return (
    <>
      <MemoizedStepIcon step={3} />
      <h1 className={styles.title}>나만의 프로필을 설정하세요</h1>
      <p className={styles.description}>마이페이지에서 언제든 수정 가능해요</p>
      <div className={styles.userProfileFormWrapper}>
        <div>
          <ProfileImagePicker imageFile={profileImage} onChangeImage={onChangeImage} />
          <div className={styles.nicknameFieldWrapper}>
            <TextField
              placeholder="닉네임을 입력하세요"
              isError={isError}
              onChange={handleChangeNickname}
              value={nickname}
              helperText={helperText}
            />
          </div>
        </div>
        <div className={styles.fixedButtonWrapper}>
          <Button onClick={handleClickNextButton} disabled={!isAvailableNickname}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
