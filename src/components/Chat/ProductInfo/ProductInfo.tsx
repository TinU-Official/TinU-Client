import Image from "next/image";
import * as styles from "./productInfo.css";
import ImgMock from "@/assets/imgs/img_mock.png";

import { memo } from "react";
import SalesBadge from "@/components/Common/Badge/SalesBadge";

interface ProductInfoProps {
  isSoldOut?: boolean;
}

export const ProductInfo = memo(function ProductInfo({ isSoldOut }: ProductInfoProps) {
  return (
    <div className={styles.ProductInfoWrapper}>
      <Image src={ImgMock} alt="상품 이미지" width={50} height={50} />
      <div className={styles.ProductDetailContainer}>
        <div className={styles.ProductTitleAndStatus}>
          <p className={styles.ProductTitle}>라탄 자전거 바구니</p>
          {<SalesBadge isSoldOut={isSoldOut} />}
        </div>
        <p className={styles.ProductPrice}>6,000원</p>
      </div>
    </div>
  );
});
