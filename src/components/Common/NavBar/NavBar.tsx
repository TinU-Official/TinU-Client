"use client";

import { IcChatBlack, IcChatGrey, IcHomeBlack, IcHomeGrey, IcUserBlack, IcUserGrey } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "./navBar.css";

const navItems = [
  { href: "/home", label: "홈", icon: <IcHomeGrey />, activeIcon: <IcHomeBlack /> },
  { href: "/chat-list", label: "채팅", icon: <IcChatGrey />, activeIcon: <IcChatBlack /> },
  { href: "/mypage", label: "마이", icon: <IcUserGrey />, activeIcon: <IcUserBlack /> },
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
