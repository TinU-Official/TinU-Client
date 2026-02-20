"use client";

import { IcLogoGoogle, IcLogoKakao, IcLogoNaver } from "@/assets/icons";
import * as styles from "./loginButtonSection.css";

export function LoginButtonSection() {
  return (
    <div className={styles.loginButtonSectionWrapper}>
      <button type="button" className={styles.kakaoLoginButton}>
        <IcLogoKakao />
        <span className={styles.kakaoLoginButtonText}>카카오 로그인</span>
      </button>
      <button type="button" className={styles.naverLoginButton}>
        <IcLogoNaver />
        <span className={styles.naverLoginButtonText}>네이버 로그인</span>
      </button>
      <button type="button" className={styles.googleLoginButton}>
        <IcLogoGoogle />
        <span className={styles.googleLoginButtonText}>구글 로그인</span>
      </button>
    </div>
  );
}
