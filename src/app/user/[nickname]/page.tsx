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
        <section className={styles.oneLineIntroSection}>
          <span className={styles.oneLineIntroText}>사소한 물건도 소중하게 다루는 편입니다.</span>
          <div className={styles.bubble}>
            <IcBubble />
          </div>
        </section>

        <section className={styles.profileSection}>
          <div className={styles.myImgWrapper}>
            <Image src="/sechon.png" alt="내 프로필 사진" className={styles.profileImg} fill />
          </div>
          <h1 className={styles.nickname}>랑곰</h1>
        </section>

        <section className={styles.myInfoContainer}>
          <div className={styles.myInfoWrapper}>
            <div className={styles.myInfoItem}>
              <span className={styles.infoLabel}>학교명</span>
              <h2 className={styles.infoValue}>경기대학교</h2>
            </div>
            <IcVerticalLine className={styles.verticalLine} />
            <div className={styles.myInfoItem}>
              <span className={styles.infoLabel}>학년</span>
              <h2 className={styles.infoValue}>4학년</h2>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>

        <div className={styles.activityWrapper}>
          <span className={styles.activityText}>활동</span>
          {/*TODO: [활동] 2가지 각각 클릭 시 페이지 이동 예정 */}

          <section className={styles.activitySection}>
            <button className={styles.statusButton.forSale}>
              <span className={styles.statusLabel}>판매중</span>
              <div className={styles.iconAlignEnd}>
                <IcForSale />
              </div>
            </button>

            <button className={styles.statusButton.soldOut}>
              <span className={styles.statusLabel}>거래완료</span>
              <div className={styles.iconAlignEnd}>
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
