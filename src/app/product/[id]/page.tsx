import { BackButton } from "@/components/Common/BackButton/BackButton";
import * as styles from "./product-detail.css";
import { Header } from "@/components/Common/Header/Header";
import Button from "@/components/Common/Button/Button";
import ProductMetaSection from "@/components/product-detail/ProductMetaSection/ProductMetaSection";
import Image from "next/image";
import { IcHamburger } from "@/assets/icons";
import { IconButton } from "@/components/Common/IconButton";
import ProductInfoSection from "@/components/product-detail/ProductInfoSection/ProductInfoSection";

export default function Page() {
  return (
    <div className={styles.detailPageWrapper}>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerTitle}>상세정보</span>}
        right={<IconButton icon={<IcHamburger />} label="메뉴 열기" />}
      />
      <div className={styles.imgWrapper}>
        <Image src="/sechon.png" alt="상품 대표사진" className={styles.productMainImg} fill />
      </div>

      <ProductMetaSection />
      <ProductInfoSection />

      <div className={styles.fixedButtonWrapper}>
        <Button>채팅하기</Button>
      </div>
    </div>
  );
}
