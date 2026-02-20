"use client";

import React, { useState } from "react";
import Select from "../Common/Select/Select";
import * as styles from "./reportReasonForm.css";
import Button from "../Common/Button/Button";

const 신고사유 = {
  mismatchInfo: "상품 정보가 실제와 달라요",
  noShow: "거래 약속을 지키지 않았어요",
  abusiveUser: "욕설이나 비하 발언을 했어요",
  suspicious: "사기가 의심돼요",
  elseReason: "기타 사유 (직접 입력)",
} as const;

function ReportReasonForm() {
  const [reason, setReason] = useState<(typeof 신고사유)[keyof typeof 신고사유] | null>(null);
  const [guitarReason, setGuitarReason] = useState("");

  const handleReasonSelect = (value: string) => {
    setReason(value as (typeof 신고사유)[keyof typeof 신고사유]);
    setGuitarReason("");
  };

  const isGuitar = reason === 신고사유.elseReason;
  const isValid = isGuitar ? !!guitarReason.trim() : !!reason;

  return (
    <>
      <form className={styles.reportSelectWrapper}>
        <Select placeholder="해당하는 내용을 선택하세요" onSelect={handleReasonSelect}>
          <Select.Trigger />
          <Select.Main>
            {Object.entries(신고사유).map(([key, label]) => (
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
        <Button disabled={!isValid}>제출하기</Button>
      </div>
    </>
  );
}

export default ReportReasonForm;
