"use client";

import * as styles from "./productSeller.css";
import { useState } from "react";
import { IconButton } from "../Common/IconButton";
import { IcEmptyHeart, IcFilledHeart, IcVertical } from "@/assets/icons";

function ProductSeller() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickHeart = () => {
    setIsLiked((prev) => !prev);
  };

  // TODO: 추후 토글(드롭다운) 구현 예정
  const handleClickVerticalBtn = () => {};

  return (
    <div className={styles.productSellerWrapper}>
      <section className={styles.sellerProfileSection}>
        <img src="/sechon.png" alt="판매자 프로필이미지" className={styles.sellerImg} />
        <p className={styles.sellerName}>이세숑</p>
      </section>
      <section className={styles.toggleSection}>
        <p className={styles.likesCount}>1</p>
        <IconButton
          icon={isLiked ? <IcFilledHeart /> : <IcEmptyHeart />}
          label="좋아요 클릭"
          onClick={handleClickHeart}
        />
        <IconButton icon={<IcVertical />} label="토글버튼" onClick={handleClickVerticalBtn} />
      </section>
    </div>
  );
}

export default ProductSeller;
