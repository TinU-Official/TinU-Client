import { forwardRef } from "react";
import * as styles from "./thirdBanner.css";

export const ThirdBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="thirdBanner" className={styles.thirdBannerWrapper}>
      FirstBanner
    </div>
  );
});
