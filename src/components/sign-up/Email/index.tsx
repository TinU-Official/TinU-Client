import * as styles from "./email.css";
import React, { useState } from "react";
import TextField from "@/components/Common/TextField/TextField";
import Button from "@/components/Common/Button/Button";
import { MemoizedStepIcon } from "../StepIcon/StepIcon";

interface EmailProps {
  onNext: (email: string) => void;
}

export function Email({ onNext }: EmailProps) {
  const [email, setEmail] = useState("");

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@kyonggi\.ac\.kr$/.test(email);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/[^a-zA-Z0-9@._%+-]/.test(inputValue)) return;
    setEmail(inputValue);
  };

  const isError = email !== "" && !isValidEmail;

  const handleClickNextButton = () => {
    onNext(email);
  };

  return (
    <>
      <MemoizedStepIcon step={2} />
      <h1 className={styles.title}>
        학교 계정 인증을 위한 <br />
        이메일을 입력하세요
      </h1>
      <p className={styles.description}>최초 1회 이메일 인증이 필요해요.</p>
      <div className={styles.emailFormWrapper}>
        <div className={styles.emailFieldWrapper}>
          <TextField
            placeholder="이메일 주소"
            isError={isError}
            onChange={handleChangeEmail}
            value={email}
            helperText={isError ? "학교 계정이 아닌 것 같아요 :(" : ""}
          />
        </div>
        <div className={styles.fixedButtonWrapper}>
          <Button onClick={handleClickNextButton} disabled={!isValidEmail}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
