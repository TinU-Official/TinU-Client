import * as styles from "./productInfoSection.css";
import { HashTag } from "@/components/Common/HashTag/HashTag";

function ProductInfoSection() {
  return (
    <div className={styles.productInfoWrapper}>
      <span className={styles.productCategory}>의류 {">"} 악세사리</span>
      <section className={styles.productDetailInfo}>
        <h1 className={styles.productTitle}>락피쉬 니트 장갑</h1>
        <div className={styles.productMetaWrapper}>
          <h2 className={styles.productPrice}>8000원</h2>
          <span className={styles.uploadTime}>5분 전</span>
        </div>
      </section>
      <p className={styles.productContentWrapper}>
        세 달 전에 구매한 제품입니다. 손이 많이 안 가서 판매하게 되었어요. 보풀도 없고, 새 상품이나 다름없어요 네고
        가능합니다~!
      </p>
      <section className={styles.hashTagWrapper}>
        <HashTag text="태그 입력(최대 30개)" />
        <HashTag text="뜨개장갑" isActive />
        <HashTag text="락피쉬" isActive />
        <HashTag text="장갑" isActive />
      </section>
    </div>
  );
}
export default ProductInfoSection;
