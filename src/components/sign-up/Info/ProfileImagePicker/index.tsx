import { IcPlusMint, IcProfile } from "@/assets/icons";
import Image from "next/image";
import * as styles from "./ImageInputForm.css";
import { useState, ChangeEvent, useEffect } from "react";

interface ProfileImagePickerProps {
  imageFile: File | null;
  onChangeImage: (file: File | null) => void;
}

export function ProfileImagePicker({ imageFile, onChangeImage }: ProfileImagePickerProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChangeImage(file);
  };

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [imageFile]);

  return (
    <div className={styles.imageInputFormWrapper}>
      <div className={styles.previewWrapper}>
        <label htmlFor="profile-image-input" className={styles.profileImageLabel}>
          <input
            id="profile-image-input"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            className={styles.profileImageInput}
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
