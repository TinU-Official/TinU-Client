import { forwardRef } from "react";
import * as styles from "./firstBanner.css";

export const FirstBanner = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="firstBanner" className={styles.firstBannerWrapper}>
      FirstBanner
    </div>
  );
});
