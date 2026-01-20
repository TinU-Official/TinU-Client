import { IcChevronRight, IcHamburger } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import Link from "next/link";
import * as styles from "./settings.css";

export default function SettingsPage() {
  // TODO: Link 컴포넌트의 href 경로 정해지면 수정하기

  const ACCOUNT_SETTINGS = [
    { label: "프로필 수정", href: "/" },
    { label: "계정 / 정보 관리", href: "/" },
    { label: "차단 사용자 관리", href: "/" },
  ];

  const ETC_SETTINGS = [
    { label: "문의하기", href: "https://naver.me/G3PngGcj", external: true },
    { label: "약관 및 정책", href: "/" },
    { label: "팀 소개", href: "/" },
  ];

  return (
    <>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerText}>설정</span>}
        right={<IcHamburger />}
      />
      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>회원정보 설정</h3>
        {ACCOUNT_SETTINGS.map(({ label, href }) => (
          <Link key={label} className={styles.infoRow} href={href}>
            <span className={styles.infoText}>{label}</span>
            <IcChevronRight />
          </Link>
        ))}
      </section>

      <hr className={styles.divider} />

      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>기타</h3>
        {ETC_SETTINGS.map(({ label, href }) => (
          <Link key={label} className={styles.infoRow} href={href}>
            <span className={styles.infoText}>{label}</span>
            <IcChevronRight />
          </Link>
        ))}
      </section>

      <hr className={styles.divider} />

      <section className={styles.settingSection}>
        <div className={styles.infoRow}>
          <span className={styles.infoText}>서비스 버전</span>
          <span className={styles.versionText}>1.0.52</span>
        </div>
        <button className={styles.infoRow}>
          <span className={styles.infoText}>로그아웃</span>
        </button>
        <button className={styles.infoRow}>
          <span className={styles.infoText}>탈퇴하기</span>
        </button>
      </section>
    </>
  );
}
