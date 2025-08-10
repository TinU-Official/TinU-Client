import { IcTextLogoSmall } from "@/assets/icons";
import { ImgThirdBanner } from "@/assets/imgs";
import { forwardRef } from "react";
import * as styles from "./thirdBanner.css";

export const ThirdBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="thirdBanner" className={styles.thirdBannerWrapper}>
      <div className={styles.thirdBannerContent}>
        <div className={styles.thirdBannerTitleSection}>
          <div className={styles.thirdBannerTextWithLogoWrapper}>
            <IcTextLogoSmall />
            <p className={styles.thirdBannerText}>와 함께하는 안전한 거래</p>
          </div>
          <p className={styles.thirdBannerText}>시작해 볼까요?</p>
        </div>
        <ImgThirdBanner />
      </div>
    </div>
  );
});
