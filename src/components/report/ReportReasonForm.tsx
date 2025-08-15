"use client";

import React, { useState } from "react";
import Select from "../Common/Select/Select";
import * as styles from "./reportReasonForm.css";
import Button from "../Common/Button/Button";

function ReportReasonForm() {
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
            <Select.Option value="상품 정보가 실제와 달라요">상품 정보가 실제와 달라요</Select.Option>
            <Select.Option value="거래 약속을 지키지 않았어요">거래 약속을 지키지 않았어요</Select.Option>
            <Select.Option value="욕설이나 비하 발언을 했어요">욕설이나 비하 발언을 했어요</Select.Option>
            <Select.Option value="사기가 의심돼요">사기가 의심돼요</Select.Option>
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
        <Button disabled={!isValid}>제출하기</Button>
      </div>
    </>
  );
}

export default ReportReasonForm;
