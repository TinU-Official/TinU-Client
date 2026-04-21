import { IcSignUpDone } from "@/assets/icons";
import Button from "@/components/Common/Button/Button";
import * as styles from "./done.css";

import Lottie from "lottie-react";
import LottieConfetti from "@/assets/animations/confetti.json";
import { useRouter } from "next/navigation";

export default function Done() {
  const router = useRouter();

  const handleClickStartButton = () => {
    router.push("/");
  };

  return (
    <div className={styles.donePageWrapper}>
      <h1 className={styles.titleWrapper}>가입이 완료되었어요</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.celebrationWrapper}>
          <div className={styles.confettiBackground}>
            <Lottie animationData={LottieConfetti} loop autoPlay />
          </div>
          <IcSignUpDone className={styles.image} />
        </div>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button onClick={handleClickStartButton}>틴유 시작하기</Button>
      </div>
    </div>
  );
}
