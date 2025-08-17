"use client";

import {
  IcChatActive,
  IcChatInactive,
  IcHomeInactive,
  IcHomeActive,
  IcMypageActive,
  IcMypageInactive,
} from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "./navBar.css";

const navItems = [
  { href: "/home", label: "홈", icon: <IcHomeInactive />, activeIcon: <IcHomeActive /> },
  { href: "/chat-list", label: "채팅", icon: <IcChatInactive />, activeIcon: <IcChatActive /> },
  { href: "/mypage", label: "마이", icon: <IcMypageInactive />, activeIcon: <IcMypageActive /> },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navBarWrapper}>
      {navItems.map(({ href, label, icon, activeIcon }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href} className={styles.navItemWrapper}>
            {isActive ? activeIcon : icon}
            <span className={styles.navItemLabel({ isActive })}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
