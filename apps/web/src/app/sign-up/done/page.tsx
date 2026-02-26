import { IcSignUpDone } from "@/assets/icons";
import Button from "@/components/Common/Button/Button";
import Confetti from "@/components/SignUp/Done/Confetti";
import * as styles from "./done.css";

export default function SignUpDonePage() {
  return (
    <div className={styles.donePageWrapper}>
      <h1 className={styles.titleWrapper}>가입이 완료되었어요</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.celebrationWrapper}>
          <div className={styles.confettiBackground}>
            <Confetti />
          </div>
          <IcSignUpDone className={styles.image} />
        </div>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button>틴유 시작하기</Button>
      </div>
    </div>
  );
}
