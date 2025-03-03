import { LoginButtonSection } from "@/components/Login/LoginButtonSection";
import * as styles from "./login.css";

export default function page() {
  return (
    <div className={styles.loginPageWrapper}>
      <LoginButtonSection />
    </div>
  );
}
