import { IcSwap } from "@/assets/icons";
import Button from "@/components/Common/Button/Button";
import { IconButton } from "@/components/Common/IconButton";
import Select from "@/components/Common/Select/Select";
import TextField from "@/components/Common/TextField/TextField";
import React, { useState } from "react";
import * as styles from "./univ.css";
import { MemoizedStepIcon } from "../StepIcon/StepIcon";

interface UnivProps {
  onNext: (major: string, grade: string) => void;
}

export function Univ({ onNext }: UnivProps) {
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");

  const handleChangeMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };
  const handleResetMajor = () => setMajor("");

  const handleSelectGrade = (value: string) => {
    setGrade(value);
  };

  const handleClickNextButton = () => {
    onNext(major, grade);
  };

  return (
    <>
      <MemoizedStepIcon step={4} />
      <h1 className={styles.title}>추가적인 정보를 입력하세요</h1>
      <p>className={styles.description}추가 정보를 통해 신뢰도를 높여보세요!</p>
      <div className={styles.univInfoFormWrapper}>
        <div className={styles.univInfoFieldWrapper}>
          <TextField placeholder="경기대학교" disabled={true} />
          <TextField
            placeholder="학과"
            value={major}
            onChange={handleChangeMajor}
            rightAddOn={
              major && (
                <IconButton
                  icon={<IcSwap />}
                  label="학과 초기화"
                  onClick={handleResetMajor}
                  className={styles.swapButton}
                />
              )
            }
          />
          <Select placeholder="학년" onSelect={handleSelectGrade}>
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
        <div className={styles.fixedButtonWrapper}>
          <Button onClick={handleClickNextButton} disabled={!(major && grade)}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
