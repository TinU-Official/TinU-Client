import { IcChevronRight, IcHamburger } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import Link from "next/link";
import * as styles from "./settings.css";
import { Divider } from "@/components/Common/Divider/Divider";

export default function SettingsPage() {
  // TODO: Link 컴포넌트의 href 경로 정해지면 수정하기

  const ACCOUNT_SETTINGS = [
    { label: "프로필 수정", href: "/", prefetch: true },
    { label: "차단 사용자 관리", href: "/", prefetch: false },
  ];

  const ETC_SETTINGS = [
    { label: "문의하기", href: "https://naver.me/G3PngGcj", prefetch: false },
    { label: "약관 및 정책", href: "/", prefetch: false },
    { label: "팀 소개", href: "/", prefetch: false },
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
        <h3 className={styles.settingText}>사용자 설정</h3>
        {ACCOUNT_SETTINGS.map(({ label, href }) => (
          <Link key={label} className={styles.infoRow} href={href}>
            <span className={styles.infoText}>{label}</span>
            <IcChevronRight />
          </Link>
        ))}
      </section>

      <Divider />

      <section className={styles.settingSection}>
        <h3 className={styles.settingText}>기타</h3>
        {ETC_SETTINGS.map(({ label, href }) => (
          <Link key={label} className={styles.infoRow} href={href}>
            <span className={styles.infoText}>{label}</span>
            <IcChevronRight />
          </Link>
        ))}
      </section>

      <Divider />

      <section className={styles.settingSection}>
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
