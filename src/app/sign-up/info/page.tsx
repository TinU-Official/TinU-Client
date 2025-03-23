import UserProfileForm from "@/components/SignUp/Info/UserProfileForm/UserProfileForm";
import * as styles from "./info.css";

import { MemoizedStepIcon } from "@/components/SignUp/StepIcon/StepIcon";

export default function page() {
  return (
    <>
      <div className={styles.infoPageWrapper}>
        <MemoizedStepIcon step={3} />
        <h1 className={styles.titleWrapper}>나만의 프로필을 설정하세요</h1>
        <h2 className={styles.descriptionWrapper}>마이페이지에서 언제든 수정 가능해요</h2>
        <UserProfileForm />
      </div>
    </>
  );
}
