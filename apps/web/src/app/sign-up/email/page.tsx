import * as styles from "./email.css";

import EmailForm from "@/components/SignUp/Email/EmailForm/EmailForm";
import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";

export default function SignUpEmailPage() {
  return (
    <div className={styles.emailPageWrapper}>
      <MemoizedStepIcon step={2} />
      <h1 className={styles.titleWrapper}>
        학교 계정 인증을 위한 <br />
        이메일을 입력하세요
      </h1>
      <h2 className={styles.descriptionWrapper}>최초 1회 이메일 인증이 필요해요.</h2>
      <EmailForm />
    </div>
  );
}
