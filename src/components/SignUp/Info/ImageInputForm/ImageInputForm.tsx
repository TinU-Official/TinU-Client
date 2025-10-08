"use client";

import { IcPlusMint, IcProfile } from "@/assets/icons";
import Image from "next/image";
import * as styles from "./ImageInputForm.css";
import { useState, ChangeEvent, useEffect } from "react";

function ImageInputForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 메모리 릭 방지
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={styles.ImageInputFormWrapper}>
      <div className={styles.previewWrapper}>
        <label htmlFor="profile-image-input" className={styles.plus}>
          <input
            id="profile-image-input"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            style={{ display: "none" }}
          />

          {previewUrl ? (
            <Image src={previewUrl} alt="프로필 미리보기" fill className={styles.previewImage} />
          ) : (
            <IcProfile className={styles.profileIcon} />
          )}
        </label>

        <div className={styles.addButton}>
          <IcPlusMint />
        </div>
      </div>
    </div>
  );
}

export default ImageInputForm;
