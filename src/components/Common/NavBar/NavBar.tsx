"use client";

import { usePathname } from "next/navigation";
import * as styles from "./navBar.css";
import Link from "next/link";

import IcChatGrey from "@/assets/icons/ic_chat_grey.svg";
import IcChatMint from "@/assets/icons/ic_chat_mint.svg";
import IcHomeGrey from "@/assets/icons/ic_home_grey.svg";
import IcHomeMint from "@/assets/icons/ic_home_mint.svg";
import IcUserGrey from "@/assets/icons/ic_user_grey.svg";

const navItems = [
  { href: "/home", label: "홈", icon: <IcHomeGrey />, activeIcon: <IcHomeMint /> },
  { href: "/chat-list", label: "채팅", icon: <IcChatGrey />, activeIcon: <IcChatMint /> },
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
