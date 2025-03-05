import Image from "next/image";
import * as styles from "./productInfo.css";
import ImgMock from "@/assets/imgs/img_mock.png";

export function ProductInfo() {
  return (
    <div className={styles.ProductInfoWrapper}>
      <Image src={ImgMock} alt="상품 이미지" width={50} height={50} />
      <div className={styles.ProductDetailContainer}>
        <div className={styles.ProductTitleAndStatus}>
          <p className={styles.ProductTitle}>라탄 자전거 바구니</p>
          <div className={styles.ProductStatus}>거래중</div>
        </div>
        <p className={styles.ProductPrice}>6,000원</p>
      </div>
    </div>
  );
}
