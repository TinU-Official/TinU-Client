import { BackButton } from "@/components/Common/BackButton/BackButton";
import * as styles from "./product-detail.css";
import { Header } from "@/components/Common/Header/Header";
import Button from "@/components/Common/Button/Button";
import ProductSeller from "@/components/product-detail/ProductSeller";
import { IcHamburger } from "@/assets/icons";
import { HashTag } from "@/components/Common/HashTag/HashTag";
import { IconButton } from "@/components/Common/IconButton";

export default function Page() {
  return (
    <div className={styles.detailPageWrapper}>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerTitle}>상세정보</span>}
        right={<IconButton icon={<IcHamburger />} label="메뉴 열기" />}
      />

      <img src="/sechon.png" alt="상품 대표사진" className={styles.productMainImg} />

      <ProductSeller />

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
        <section className={styles.hashtagWrapper}>
          <HashTag text="태그 입력(최대 30개)" />
          <HashTag text="뜨개장갑" isActive />
          <HashTag text="락피쉬" isActive />
          <HashTag text="장갑" isActive />
        </section>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button>채팅하기</Button>
      </div>
    </div>
  );
}
