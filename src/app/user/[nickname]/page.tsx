import { MoreButton } from "@/components/Chat/MoreButton/MoreButton";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./user.css";
import { NavBar } from "@/components/Common/NavBar/NavBar";
import Image from "next/image";
import { IcBubble, IcForSale, IcSoldout, IcVerticalLine } from "@/assets/icons";

export default function UserPage() {
  return (
    <>
      <div className={styles.userPageWrapper}>
        <Header
          isSticky
          left={<BackButton />}
          center={<span className={styles.profile}>프로필</span>}
          right={<MoreButton />}
        />
        <div className={styles.oneLineIntro}>
          <span className={styles.oneLineIntroText}>사소한 물건도 소중하게 다루는 편입니다</span>
          <div className={styles.bubble}>
            <IcBubble />
          </div>
        </div>

        <section className={styles.profileSection}>
          <div className={styles.myImgWrapper}>
            <Image src="/sechon.png" alt="내 프로필 사진" className={styles.profileImg} fill />
          </div>
          <h2 className={styles.nickname}>랑곰</h2>
        </section>

        <section className={styles.myInfoContainer}>
          <div className={styles.myInfoWrapper}>
            <div className={styles.myInfoBox}>
              <span className={styles.infoText1}>학교명</span>
              <h3 className={styles.infoText2}>경기대학교</h3>
            </div>
            <IcVerticalLine className={styles.verticalLine} />

            <div className={styles.myInfoBox}>
              <span className={styles.infoText1}>학년</span>
              <h3 className={styles.infoText2}>4학년</h3>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>

        <div className={styles.myActivityWrapper}>
          <span className={styles.myActivityText}>활동</span>
          {/*TODO: [나의 활동] 3가지 각각 클릭 시 페이지 이동 예정 */}

          <section className={styles.myActivitySection}>
            <button className={styles.activityButton.forSale}>
              <span className={styles.activityText}>판매중</span>
              <div className={styles.iconWrapper}>
                <IcForSale />
              </div>
            </button>
            <button className={styles.activityButton.soldOut}>
              <span className={styles.activityText}>거래완료</span>
              <div className={styles.iconWrapper}>
                <IcSoldout />
              </div>
            </button>
          </section>
        </div>
      </div>
      <NavBar />
    </>
  );
}
