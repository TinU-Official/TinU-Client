import { ImgSecondBanner } from "@/assets/imgs";
import { forwardRef } from "react";
import * as styles from "./secondBanner.css";

export const SecondBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="secondBanner" className={styles.secondBannerWrapper}>
      <div className={styles.secondBannerContent}>
        <div className={styles.secondBannerTitleSection}>
          <p className={styles.secondBannerText}>인증받은 학생과의 거래로</p>
          <p className={styles.secondBannerText}>안심하고 거래할 수 있어요</p>
        </div>
        <ImgSecondBanner />
      </div>
    </div>
  );
});

SecondBanner.displayName = "SecondBanner";
