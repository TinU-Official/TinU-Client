import Button from "@/components/Common/Button/Button";
import * as styles from "./SignUpDoneForm.css";
import ImgSignUpDone from "@/assets/icons/ic_signup_done.svg";
import Confetti from "@/assets/animations/Confetti";

function SignUpDoneForm() {
  return (
    <div className={styles.SignUpDoneFormWrapper}>
      <div className={styles.celebrationWrapper}>
        <div className={styles.confettiBackground}>
          <Confetti />
        </div>
        <ImgSignUpDone className={styles.image} />
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button>틴유 시작하기</Button>
      </div>
    </div>
  );
}

export default SignUpDoneForm;
