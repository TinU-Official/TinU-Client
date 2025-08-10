"use client";

import { IcChatGrey, IcChatMint, IcHomeGrey, IcHomeMint, IcUserGrey } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "./navBar.css";

const navItems = [
  { href: "/home", label: "홈", icon: <IcHomeGrey />, activeIcon: <IcHomeMint /> },
  { href: "/chat-list", label: "채팅", icon: <IcChatGrey />, activeIcon: <IcChatMint /> },
  // TODO: 마이페이지 activeIcon 문의
  { href: "/mypage", label: "마이페이지", icon: <IcUserGrey />, activeIcon: <IcUserGrey /> },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navBarWrapper}>
      {navItems.map(({ href, label, icon, activeIcon }) => (
        <Link key={href} href={href} className={styles.navItemWrapper}>
          {pathname === href && <div className={styles.activeBar} />}
          {pathname === href ? activeIcon : icon}
          <span className={styles.navItemLabel}>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
