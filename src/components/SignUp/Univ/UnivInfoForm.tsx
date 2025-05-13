"use client";

import React, { useState } from "react";
import * as styles from "./UnivInfoForm.css";
import TextField from "@/components/Common/TextField/TextField";
import { SubmitButton } from "../Terms/SubmitButton/SubmitButton";
import IcSwap from "@/assets/icons/ic_swap.svg";
import Select from "@/components/Common/Select/Select";

function UnivInfoForm() {
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");

  const handleMajorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };
  const handleResetMajor = () => setMajor("");
  const handleGradeSelect = (value: string) => {
    setGrade(value);
  };

  return (
    <div className={styles.univInfoFormWrapper}>
      <div className={styles.univInfoFieldWrapper}>
        <TextField placeholder="경기대학교" disabled={true} />
        <TextField
          placeholder="학과"
          value={major}
          onChange={handleMajorChange}
          rightAddOn={
            major && (
              <button type="button" onClick={handleResetMajor} className={styles.swapButton}>
                <IcSwap />
              </button>
            )
          }
        />
        <Select placeholder="학년" onSelect={handleGradeSelect}>
          <Select.Trigger />
          <Select.Main>
            <Select.Option value="1학년">1학년</Select.Option>
            <Select.Option value="2학년">2학년</Select.Option>
            <Select.Option value="3학년">3학년</Select.Option>
            <Select.Option value="4학년">4학년</Select.Option>
            <Select.Option value="휴학생">휴학생</Select.Option>
          </Select.Main>
        </Select>
      </div>

      <SubmitButton disabled={!(major && grade)} />
    </div>
  );
}

export default UnivInfoForm;
