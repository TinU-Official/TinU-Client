import * as styles from "./terms.css";

import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";
import { TermsForm } from "@/components/SignUp/Terms/TermsForm/TermsForm";

export default function SignUpTermsPage() {
  return (
    <div className={styles.termsPageWrapper}>
      <MemoizedStepIcon step={1} />
      <h1 className={styles.titleWrapper}>
        간편 회원가입을 위해 <br />
        약관 동의가 필요해요
      </h1>
      <TermsForm />
    </div>
  );
}
