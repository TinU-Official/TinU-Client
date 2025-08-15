import { IcChevronRight, IcHamburger } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import * as styles from "./settings.css";
import { Header } from "@/components/Common/Header/Header";
import React from "react";

export default function page() {
  return (
    <>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerText}>설정</span>}
        right={<IcHamburger />}
      />
      <section className={styles.settingSection}>
        <span className={styles.settingText}>계정</span>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>내 정보 수정</span>
          <IcChevronRight />
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>탈퇴하기</span>
          <IcChevronRight />
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.settingSection}>
        <span className={styles.settingText}>설정</span>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>앱 버전</span>
          <span className={styles.versionText}>1.0.52</span>
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.settingSection}>
        <span className={styles.settingText}>정보</span>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>약관 및 정책</span>
          <IcChevronRight />
        </div>
      </section>
    </>
  );
}
