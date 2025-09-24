import UnivInfoForm from "@/components/SignUp/Univ/UnivInfoForm";
import * as styles from "./univ.css";

import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";

export default function SignUpUnivPage() {
  return (
    <>
      <div className={styles.univPageWrapper}>
        <MemoizedStepIcon step={4} />
        <h1 className={styles.titleWrapper}>추가적인 정보를 입력하세요</h1>
        <h2 className={styles.descriptionWrapper}>추가 정보를 통해 신뢰도를 높여보세요!</h2>
        <UnivInfoForm />
      </div>
    </>
  );
}
