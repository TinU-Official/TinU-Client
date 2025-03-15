"use client";

import * as styles from "./ImageInputForm.css";
import IcProfile from "@/assets/icons/ic_profile.svg";

function ImageInputForm() {
  return (
    <div className={styles.ImageInputFormWrapper}>
      <button type="button" className={styles.ImageInputButton}>
        <IcProfile />
      </button>
    </div>
  );
}

export default ImageInputForm;
