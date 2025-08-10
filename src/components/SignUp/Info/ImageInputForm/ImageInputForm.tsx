"use client";

import IcProfile from "@/assets/icons/ic_profile.svg";
import { IconButton } from "@/components/Common/IconButton";
import * as styles from "./ImageInputForm.css";

function ImageInputForm() {
  return (
    <div className={styles.ImageInputFormWrapper}>
      <IconButton icon={<IcProfile />} label="프로필 사진 변경" />
    </div>
  );
}

export default ImageInputForm;
