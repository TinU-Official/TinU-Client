"use client";

import Button from "@/components/Common/Button/Button";
import * as styles from "./SignUpDoneForm.css";
import ImgSignUpDone from "@/assets/icons/ic_signup_done.svg";
import LottieConfetti from "@/assets/animations/confetti.json";
import Lottie from "lottie-react";

function SignUpDoneForm() {
  return (
    <div className={styles.SignUpDoneFormWrapper}>
      <div className={styles.celebrationWrapper}>
        <Lottie className={styles.confetti} animationData={LottieConfetti} loop autoPlay />
        <ImgSignUpDone className={styles.image} />
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button>틴유 시작하기</Button>
      </div>
    </div>
  );
}

export default SignUpDoneForm;
