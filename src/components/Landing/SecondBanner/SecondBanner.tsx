import { forwardRef } from "react";
import * as styles from "./secondBanner.css";

export const SecondBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="secondBanner" className={styles.secondBannerWrapper}>
      FirstBanner
    </div>
  );
});
