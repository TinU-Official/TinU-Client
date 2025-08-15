// import * as styles from "./header.css";

// interface HeaderProps {
//   left?: React.ReactNode;
//   center?: React.ReactNode;
//   right?: React.ReactNode;
//   isSticky?: boolean;
// }

// export function Header({ left, center, right, isSticky = false }: HeaderProps) {
//   return (
//     <header className={styles.headerWrapper({ isSticky })} aria-label="페이지 헤더">
//       <div className={styles.leftElement}>{left}</div>
//       <h2 className={styles.centerElement}>{center}</h2>
//       <div className={styles.rightElement}>{right}</div>
//     </header>
//   );
// }

import { forwardRef } from "react";
import * as styles from "./header.css";

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  isSticky?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(({ left, center, right, isSticky = false }, ref) => {
  return (
    <header ref={ref} className={styles.headerWrapper({ isSticky })} aria-label="페이지 헤더">
      <div className={styles.leftElement}>{left}</div>
      <h2 className={styles.centerElement}>{center}</h2>
      <div className={styles.rightElement}>{right}</div>
    </header>
  );
});

Header.displayName = "Header";
