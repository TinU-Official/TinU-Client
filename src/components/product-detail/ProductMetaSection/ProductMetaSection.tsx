"use client";

import * as styles from "./productMetaSection.css";
import { useState } from "react";
import { IconButton } from "@/components/Common/IconButton";
import { IcEmptyHeart, IcFilledHeart, IcVertical } from "@/assets/icons";

function ProductMetaSection() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickLikeButton = () => {
    setIsLiked((prev) => !prev);
  };

  // TODO: 추후 토글(드롭다운) 구현 예정
  const handleClickVerticalButton = () => {};

  return (
    <div className={styles.productMetaWrapper}>
      <section className={styles.sellerProfileSection}>
        <img src="/sechon.png" alt="판매자 프로필이미지" className={styles.sellerImg} />
        <p className={styles.sellerName}>이세숑</p>
      </section>
      <section className={styles.toggleSection}>
        <p className={styles.likesCount}>1</p>
        <IconButton
          icon={isLiked ? <IcFilledHeart /> : <IcEmptyHeart />}
          label="좋아요 클릭"
          onClick={handleClickLikeButton}
        />
        <IconButton icon={<IcVertical />} label="토글버튼" onClick={handleClickVerticalButton} />
      </section>
    </div>
  );
}

export default ProductMetaSection;
