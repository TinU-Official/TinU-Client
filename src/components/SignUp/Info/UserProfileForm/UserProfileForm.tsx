"use client";

import React, { useState } from "react";

import * as styles from "./UserProfileForm.css";
import ImageInputForm from "../ImageInputForm/ImageInputForm";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "../../Email/SubmitButton/SubmitButton";

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
      ? ""
      : !isValidNickname
        ? "닉네임은 2~15자여야 해요!"
        : isDuplicateNickname
          ? "이미 사용중인 닉네임이에요 :("
          : "사용 가능한 닉네임이에요";

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
