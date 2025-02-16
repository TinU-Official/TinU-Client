import { REGISTER_TEXT } from "@/constants";
import * as styles from "./terms.css";
import { MemoizedStepIcon } from "@/components/SignUp/Terms/StepIcon/StepIcon";
import { TermsForm } from "@/components/SignUp/Terms/TermsForm/TermsForm";

export default function page() {
  return (
    <div className={styles.step1Container}>
      <div className={styles.step1Wrapper}>
        <MemoizedStepIcon step={1} />
        <div className={styles.titleWrapper} dangerouslySetInnerHTML={{ __html: REGISTER_TEXT.STEP1 }} />
        <TermsForm />
      </div>
    </div>
  );
}
