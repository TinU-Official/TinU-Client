"use client";

import { IcCheckCompleteSmall } from "@/assets/icons";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import Button from "@/components/Common/Button/Button";
import { Header } from "@/components/Common/Header/Header";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import * as styles from "./delete-account.css";

export default function DeleteAccountPage() {
  const router = useRouter();
  const handleClickDeleteAccount = useCallback(() => {
    router.push("/delete-account/reason");
  }, [router]);

  return (
    <>
      <Header isSticky left={<BackButton />} />
      <div className={styles.withdrawTextWrapper}>
        <h1 className={styles.title}>떠나시는 건가요?</h1>
        <h2 className={styles.description}>잠깐! 틴유를 탈퇴하기 전에 하단 정보를 확인해주세요.</h2>
      </div>

      <article className={styles.withdrawInfoWrapper}>
        <section className={styles.withdrawInfo}>
          <div className={styles.withdrawBox}>
            <IcCheckCompleteSmall />
            <span className={styles.withdrawInfoText}>
              아래 항목을 포함한 모든 정보가 영구적으로 삭제
              <br />
              되며 복구할 수 없습니다.
            </span>
          </div>

          <div className={styles.withdrawDescription}>
            <div className={styles.verticalLine} />
            <div className={styles.descriptionFlex}>
              <span className={styles.withdrawDescriptionText}>글, 프로필 등 모든 사용자 정보</span>
              <span className={styles.withdrawDescriptionText}>
                타인 게시물의 댓글은 삭제되지 않으니 미리 확인하세요.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.withdrawBox}>
          <IcCheckCompleteSmall />
          <span className={styles.withdrawInfoText}>탈퇴 후 7일 간 재가입이 불가능합니다.</span>
        </section>
      </article>

      <div className={styles.fixedButtonWrapper}>
        <Button className={styles.deleteButton} outlined onClick={handleClickDeleteAccount}>
          탈퇴하기
        </Button>
        <Button className={styles.continueButton}>계속 이용하기</Button>
      </div>
    </>
  );
}
