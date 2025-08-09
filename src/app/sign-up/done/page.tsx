import * as styles from "./done.css";
import ImgSignUpDone from "@/assets/icons/ic_signup_done.svg";
import Confetti from "@/components/SignUp/Done/Confetti";
import Button from "@/components/Common/Button/Button";

export default function Page() {
  return (
    <div className={styles.donePageWrapper}>
      <h1 className={styles.titleWrapper}>가입이 완료되었어요</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.celebrationWrapper}>
          <div className={styles.confettiBackground}>
            <Confetti />
          </div>
          <ImgSignUpDone className={styles.image} />
        </div>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button>틴유 시작하기</Button>
      </div>
    </div>
  );
}
