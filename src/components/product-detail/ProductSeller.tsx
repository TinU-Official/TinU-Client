"use client";

import * as styles from "./productSeller.css";
import IcEmptyHeart from "@/assets/icons/ic_empty_heart.svg";
import IcFilledHeart from "@/assets/icons/ic_filled_heart.svg";
import IcVertical from "@/assets/icons/ic_vertical.svg";
import { useState } from "react";

function ProductSeller() {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={styles.productSellerWrapper}>
      <div className={styles.productSellerSection}>
        <div className={styles.sellerSection}>
          <img src="/sechon.png" alt="판매자 이미지" className={styles.sellerImg} />
          <div className={styles.sellerName}>이세숑</div>
        </div>
        <div className={styles.toggleSection}>
          <button onClick={handleToggle}>{isLiked ? <IcFilledHeart /> : <IcEmptyHeart />}</button>
          <IcVertical />
        </div>
      </div>
    </div>
  );
}

export default ProductSeller;
