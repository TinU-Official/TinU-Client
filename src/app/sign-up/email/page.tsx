import * as styles from "./email.css";

import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";
import EmailForm from "@/components/SignUp/Email/EmailForm/EmailForm";

export default function page() {
  return (
    <div className={styles.termsPageWrapper}>
      <MemoizedStepIcon step={2} />
      <h1 className={styles.titleWrapper}>
        간편 회원가입을 위해 <br />
        약관 동의가 필요해요
      </h1>
      <h3 className={styles.descriptionWrapper}>최초 1회 이메일 인증이 필요해요.</h3>
      <EmailForm />
    </div>
  );
}
