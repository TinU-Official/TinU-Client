"use client";

import React, { useState } from "react";

import * as styles from "./UserProfileForm.css";
import ImageInputForm from "../ImageInputForm/ImageInputForm";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "@/components/Common/SubmitButton/SubmitButton";
import { NICKNAME_MESSAGES } from "@/constants/message";

function UserProfileForm() {
  const [nickname, setNickname] = useState("");

  const isValidNickname = nickname.length >= 2 && nickname.length <= 15;
  const isDuplicateNickname = false; //
  const isAvailableNickname = isValidNickname && !isDuplicateNickname && nickname !== "";

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/[^가-힣a-zA-Z0-9]/.test(inputValue)) return;
    setNickname(inputValue);
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
    <div className={styles.userProfileFormWrapper}>
      <div>
        <ImageInputForm />
        <div className={styles.nicknameFieldWrapper}>
          <TextField
            placeholder="닉네임을 입력하세요"
            isError={isError}
            onChange={handleNicknameChange}
            value={nickname}
            helperText={helperText}
          />
        </div>
      </div>
      <SubmitButton disabled={!isAvailableNickname} />
    </div>
  );
}

export default UserProfileForm;
