"use client";

import IcMoreVertical from "@/assets/icons/ic_more_vertical.svg";

const handleClickMoreButton = () => {};

export function MoreButton() {
  return (
    <button type="button" onClick={handleClickMoreButton}>
      <IcMoreVertical />
    </button>
  );
}
