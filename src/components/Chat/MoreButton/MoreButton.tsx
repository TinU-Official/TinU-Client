"use client";

import IcMoreVertical from "@/assets/icons/ic_more_vertical.svg";

const handleClickMoreButton = () => {};

// TODO: 컴포넌트 분리 여부 검토

export function MoreButton() {
  return (
    <button type="button" onClick={handleClickMoreButton}>
      <IcMoreVertical />
    </button>
  );
}
