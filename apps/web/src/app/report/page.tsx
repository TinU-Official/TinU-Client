import { IcHamburger } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import ReportReasonForm from "@/components/report/ReportReasonForm";
import * as styles from "./report.css";

export default function ReportPage() {
  return (
    <>
      <Header
        isSticky
        left={<BackButton />}
        center={<span className={styles.headerText}>신고하기</span>}
        right={<IcHamburger />}
      />
      <div className={styles.reportTextWrapper}>
        <h1 className={styles.titleWrapper}>
          해당 사용자로 인해 <br />
          어떤 문제가 발생했나요?
        </h1>
        <h2 className={styles.descriptionWrapper}>회원님의 신고는 익명으로 처리됩니다.</h2>
      </div>

      <ReportReasonForm />
    </>
  );
}
