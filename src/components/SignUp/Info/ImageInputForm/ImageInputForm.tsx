"use client";

import { IcPlusMint, IcProfile } from "@/assets/icons";
import Image from "next/image";
import { IconButton } from "@/components/Common/IconButton";
import * as styles from "./ImageInputForm.css";
import { useState, ChangeEvent } from "react";

function ImageInputForm() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClickImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleClickImage = () => {
    document.getElementById("profile-image-input")?.click();
  };

  return (
    <div className={styles.ImageInputFormWrapper}>
      <input
        id="profile-image-input"
        type="file"
        accept="image/*"
        onChange={handleClickImageUpload}
        style={{ display: "none" }}
      />

      <div className={styles.previewWrapper} onClick={handleClickImage}>
        {previewUrl ? (
          <Image src={previewUrl} alt="미리보기" width={11} height={11} className={styles.previewImage} />
        ) : (
          <IcProfile className={styles.profileIcon} />
        )}

        <IconButton icon={<IcPlusMint />} label="프로필 사진 등록" className={styles.addButton} />
      </div>
    </div>
  );
}

export default ImageInputForm;
