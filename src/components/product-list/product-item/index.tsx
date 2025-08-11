import { IcHeart } from "@/assets/icons";
import ImgMock2 from "@/assets/imgs/img_mock_2.png";
import Image from "next/image";
import * as styles from "./productItem.css";

export function ProductItem() {
  return (
    <div className={styles.productItemWrapper}>
      <div className={styles.productImageWrapper}>
        <Image src={ImgMock2} alt="상품 대표 이미지" className={styles.productImage} fill />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productInfoA}>
          <span className={styles.productPrice}>97000원</span>
          <div className={styles.productHeartContainer}>
            <span className={styles.productHeartCount}>20</span>
            <IcHeart />
          </div>
        </div>
        <div className={styles.productInfoA}>
          <span className={styles.productTitle}>3인소파</span>
          <span className={styles.postedTime}>5시간 전</span>
        </div>
      </div>
    </div>
  );
}
