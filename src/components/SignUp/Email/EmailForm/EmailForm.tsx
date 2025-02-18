"use client"

import * as styles from "./emailForm.css";
import React, { useState } from "react";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "@/components/SignUp/Email/SubmitButton/SubmitButton";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const isValidEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@kyonggi\.ac\.kr$/.test(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/[^a-zA-Z0-9@._%+-]/.test(inputValue)) return;
    setEmail(inputValue);
    setIsTyping(true);
  };

  const isError = email !== "" && !isValidEmail(email);
  const isSubmitDisabled = !isValidEmail(email);

  return (
    <div className={styles.nextWrapper}>
      <div className={styles.emailFieldWrapper}>
        <TextField
          placeholder="이메일 주소"
          isError={isError}
          onChange={handleEmailChange}
          value={email}
          helperText={isError ? "학교 계정이 아닌 것 같아요 :(" : ""}
        />
      </div>
      <SubmitButton disabled={isSubmitDisabled} />
    </div>
  );
}

export default EmailForm;
