import { LoginButtonSection } from "@/components/Login/LoginButtonSection";
import * as styles from "./login.css";
import ImgLogoBig from "@/assets/imgs/img_logo_big.svg";

export default function page() {
  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.loginPageBanner}>
        <ImgLogoBig />
        <h1 className={styles.loginPageTitle}>
          대학생을 위한 <span className={styles.mintText}>중고거래</span>
          <br />
          <span className={styles.mintText}>틴유</span>에서 시작하세요!
        </h1>
      </div>
      <LoginButtonSection />
    </div>
  );
}
