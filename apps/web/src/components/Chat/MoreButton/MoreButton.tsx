"use client";

import { IcMoreVertical } from "@/assets/icons";
import { IconButton } from "@/components/Common/IconButton";

const handleClickMoreButton = () => {};

// TODO: 컴포넌트 분리 여부 검토

export function MoreButton() {
  return <IconButton icon={<IcMoreVertical />} label="더보기" onClick={handleClickMoreButton} />;
}
