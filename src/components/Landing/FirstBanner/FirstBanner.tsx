import { forwardRef } from "react";
import * as styles from "./firstBanner.css";
import IcTextLogo from "@/assets/icons/ic_text_logo.svg";
import ImgFirstBanner from "@/assets/imgs/img_first_banner.svg";

export const FirstBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="firstBanner" className={styles.firstBannerWrapper}>
      <div className={styles.firstBannerContent}>
        <div className={styles.firstBannerTitleSection}>
          <h1 className={styles.firstBannerTitle}>당신의 생활을 보다 스마트하게</h1>
          <IcTextLogo />
        </div>
        <ImgFirstBanner />
      </div>
    </div>
  );
});
