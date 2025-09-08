"use client";

import React, { useState } from "react";
import Select from "../Common/Select/Select";
import * as styles from "./deleteAccountReasonForm.css";
import Button from "../Common/Button/Button";

function DeleteAccountReasonForm() {
  const [reason, setReason] = useState("");
  const [guitarReason, setGuitarReason] = useState("");

  const handleReasonSelect = (value: string) => {
    setReason(value);
    setGuitarReason("");
  };

  const isGuitar = reason === "기타 사유 (직접 입력)";
  const isValid = isGuitar ? !!guitarReason.trim() : !!reason;

  return (
    <>
      <form className={styles.reportSelectWrapper}>
        <Select placeholder="해당하는 내용을 선택하세요" onSelect={handleReasonSelect}>
          <Select.Trigger />
          <Select.Main>
            <Select.Option value="사고 싶은 물품이 없어요">사고 싶은 물품이 없어요</Select.Option>
            <Select.Option value="물품이 안 팔려요">물품이 안 팔려요</Select.Option>
            <Select.Option value="비매너 사용자를 만났어요">비매너 사용자를 만났어요</Select.Option>
            <Select.Option value="새 계정을 만들고 싶어요">새 계정을 만들고 싶어요</Select.Option>
            <Select.Option value="기타 사유 (직접 입력)">기타 사유 (직접 입력)</Select.Option>
          </Select.Main>
        </Select>

        {isGuitar && (
          <textarea
            placeholder="자세한 내용을 입력해주세요"
            value={guitarReason}
            onChange={(e) => setGuitarReason(e.target.value)}
            className={styles.guitarReasonTextarea}
          />
        )}
      </form>

      <div className={styles.fixedButtonWrapper}>
        <Button disabled={!isValid}>탈퇴하기</Button>
      </div>
    </>
  );
}

export default DeleteAccountReasonForm;
