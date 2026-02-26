import { IcHeart } from "@/assets/icons";
import ImgMock2 from "@/assets/imgs/img_mock_2.png";
import Image from "next/image";
import * as styles from "./productItem.css";

export function ProductItem() {
  return (
    <article className={styles.productItemWrapper}>
      <div className={styles.productImageWrapper}>
        <Image src={ImgMock2} alt="상품 대표 이미지" className={styles.productImage} fill />
      </div>
      <div className={styles.productMeta}>
        <div className={styles.productMetaRow}>
          <data value="97000" className={styles.productPrice}>
            97,000<span>원</span>
          </data>
          <div className={styles.productHeartContainer}>
            <span className={styles.productHeartCount}>20</span>
            <IcHeart />
          </div>
        </div>
        <div className={styles.productMetaRow}>
          <h3 className={styles.productTitle}>3인소파</h3>
          <span>5시간 전</span>
        </div>
      </div>
    </article>
  );
}
