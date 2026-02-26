import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import DeleteAccountReasonForm from "@/components/reason/DeleteAccountReasonForm";
import * as styles from "./reason.css";

export default function DeleteAccountReasonPage() {
  return (
    <>
      <Header isSticky left={<BackButton />} />
      <div className={styles.reportTextWrapper}>
        <h1 className={styles.titleWrapper}>
          떠나시는 이유를
          <br />
          알려주실 수 있나요?
        </h1>
        <h2 className={styles.descriptionWrapper}>탈퇴 후 7일 동안 다시 가입할 수 없어요.</h2>
      </div>

      <DeleteAccountReasonForm />
    </>
  );
}
