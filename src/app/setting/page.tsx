import { IcChevronRight, IcHamburger } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import Link from "next/link";
import * as styles from "./setting.css";

export default function SettingPage() {
  // TODO: Link 컴포넌트의 href 경로 정해지면 수정하기

  return (
    <>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerText}>설정</span>}
        right={<IcHamburger />}
      />
      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>계정</h3>
        <Link className={styles.infoRow} href={"/"}>
          <span className={styles.infoText}>내 정보 수정</span>
          <IcChevronRight />
        </Link>
        <Link className={styles.infoRow} href={"/"}>
          <span className={styles.infoText}>탈퇴하기</span>
          <IcChevronRight />
        </Link>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>설정</h3>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>앱 버전</span>
          <span className={styles.versionText}>1.0.52</span>
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>정보</h3>
        <Link className={styles.infoRow} href={"/"}>
          <span className={styles.infoText}>약관 및 정책</span>
          <IcChevronRight />
        </Link>
      </section>
    </>
  );
}
