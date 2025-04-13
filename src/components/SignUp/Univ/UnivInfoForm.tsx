"use client";

import React, { useState } from "react";
import * as styles from "./UnivInfoForm.css";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "../Terms/SubmitButton/SubmitButton";
import IcSwap from "@/assets/icons/ic_swap.svg";

function UnivInfoForm() {
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");

  const handleResetMajor = () => setMajor("");
  const handleResetGrade = () => setGrade("");

  return (
    <div className={styles.univInfoFormWrapper}>
      <div className={styles.univInfoFieldWrapper}>
        <TextField placeholder="경기대학교" disabled={true} />
        <TextField
          placeholder="학과"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          rightAddOn={
            major && (
              <button type="button" onClick={handleResetMajor} className={styles.swapButton}>
                <IcSwap />
              </button>
            )
          }
        />
        <TextField
          placeholder="학년"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          rightAddOn={
            grade && (
              <button type="button" onClick={handleResetGrade} className={styles.swapButton}>
                <IcSwap />
              </button>
            )
          }
        />
      </div>

      <SubmitButton disabled={false} />
    </div>
  );
}

export default UnivInfoForm;
