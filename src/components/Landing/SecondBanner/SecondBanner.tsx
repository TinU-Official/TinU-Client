import { forwardRef } from "react";
import * as styles from "./secondBanner.css";
import ImgSecondBanner from "@/assets/imgs/img_second_banner.svg";

export const SecondBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="secondBanner" className={styles.secondBannerWrapper}>
      <div className={styles.secondBannerContent}>
        <div className={styles.secondBannerTitleSection}>
          <p className={styles.secondBannerText}>
            인증받은 학생과의 거래로 <br />
            안심하고 거래할 수 있어요
          </p>
        </div>
        <ImgSecondBanner />
      </div>
    </div>
  );
});
