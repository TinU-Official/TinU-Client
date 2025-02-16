import * as styles from "./terms.css";

import { TermsForm } from "@/components/SignUp/Terms/TermsForm/TermsForm";
import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";

export default function page() {
  return (
    <div className={styles.step1Container}>
      <div className={styles.step1Wrapper}>
        <MemoizedStepIcon step={1} />
        <h1 className={styles.titleWrapper}>
          간편 회원가입을 위해 <br />
          약관 동의가 필요해요
        </h1>
        <TermsForm />
      </div>
    </div>
  );
}
