import SignUpDoneForm from "@/components/SignUp/Done/SignUpDoneForm";
import * as styles from "./done.css";

export default function Page() {
  return (
    <div className={styles.donePageWrapper}>
      <h1 className={styles.titleWrapper}>가입이 완료되었어요</h1>
      <SignUpDoneForm />
    </div>
  );
}
