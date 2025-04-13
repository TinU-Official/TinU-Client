"use client";

import React, { useState } from "react";
import * as styles from "./UnivInfoForm.css";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "../Terms/SubmitButton/SubmitButton";
import IcSwap from "@/assets/icons/ic_swap.svg";

function UnivInfoForm() {
  const [univ, setUniv] = useState("");
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");

  const disabled = false;

  return (
    <>
      <div className={styles.univInfoFormWrapper}>
        <div className={styles.univInfoFieldWrapper}>
          <TextField
            placeholder="경기대학교"
            value={univ}
            disabled={disabled}
            onChange={(e) => setUniv(e.target.value)}
          />

          <TextField
            placeholder="학과"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            rightAddOn={
              // univ && !disabled ? (
              //   <button type="button" onClick={() => setUniv("")}>
              <IcSwap />
              // </button>
              // ) : null
            }
          />

          <TextField
            placeholder="학년"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            rightAddOn={
              // univ && !disabled ? (
              //   <button type="button" onClick={() => setUniv("")}>
              <IcSwap />
              // </button>
              // ) : null
            }
          />
        </div>

        <SubmitButton disabled={false} />
      </div>
    </>
  );
}

export default UnivInfoForm;
