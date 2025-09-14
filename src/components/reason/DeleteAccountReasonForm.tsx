"use client";

import React, { useState } from "react";
import Select from "../Common/Select/Select";
import * as styles from "./deleteAccountReasonForm.css";
import Button from "../Common/Button/Button";

const 탈퇴사유 = {
  noProduct: "사고 싶은 물품이 없어요",
  notSell: "물품이 안 팔려요",
  noMannerUser: "비매너 사용자를 만났어요",
  newAccount: "새 계정을 만들고 싶어요",
  elseReason: "기타 사유 (직접 입력)",
} as const;

function DeleteAccountReasonForm() {
  const [reason, setReason] = useState<(typeof 탈퇴사유)[keyof typeof 탈퇴사유] | null>(null);
  const [guitarReason, setGuitarReason] = useState("");

  const handleReasonSelect = (value: string) => {
    setReason(value as (typeof 탈퇴사유)[keyof typeof 탈퇴사유]);
    setGuitarReason("");
  };

  const isGuitar = reason === 탈퇴사유.elseReason;
  const isValid = isGuitar ? !!guitarReason.trim() : !!reason;

  return (
    <>
      <form className={styles.reportSelectWrapper}>
        <Select placeholder="해당하는 내용을 선택하세요" onSelect={handleReasonSelect}>
          <Select.Trigger />
          <Select.Main>
            {Object.entries(탈퇴사유).map(([key, label]) => (
              <Select.Option key={key} value={label}>
                {label}
              </Select.Option>
            ))}
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
