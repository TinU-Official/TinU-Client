import { Header } from "@/components/Common/Header/Header";
import { PropsWithChildren } from "react";
import { BackButton } from "@/components/Common/BackButton/BackButton";

import * as styles from "./layout.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layoutWrapper}>
      <Header left={<BackButton />} />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
