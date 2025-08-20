import { IcForSale, IcHamburger, IcHidden, IcPencil, IcSoldout, IcVerticalLine } from "@/assets/icons";
import { Header } from "@/components/Common/Header/Header";
import React from "react";
import * as styles from "./mypage.css";
import { ImgBubble } from "@/assets/imgs";
import Image from "next/image";
import { NavBar } from "@/components/Common/NavBar/NavBar";
import { IconButton } from "@/components/Common/IconButton";

export default function page() {
  return (
    <>
      <div className={styles.mypageWrapper}>
        <Header center={<span className={styles.mypageText}>마이</span>} right={<IcHamburger />} isSticky />
        <div className={styles.oneLineIntro}>
          {/* TODO: 한줄소개 글자수 제한 추가 */}
          <span className={styles.oneLineIntroText}>사소한 물건도 소중하게 다루는 편입니다</span>
          <ImgBubble />
        </div>

        <section className={styles.profileSection}>
          <div className={styles.myImgWrapper}>
            {/* TODO: 프로필 사진 수정 기능 추가 예정*/}
            <Image src="/sechon.png" alt="내 프로필 사진" className={styles.profileImg} fill />
            <IconButton icon={<IcPencil />} label="프로필 사진 수정 버튼" className={styles.pencil} />
          </div>
          <span className={styles.nickname}>세숑</span>
        </section>

        <section className={styles.myInfoContainer}>
          <div className={styles.myInfoWrapper}>
            <div className={styles.myInfoBox}>
              <h2 className={styles.infoText1}>학교명</h2>
              <h3 className={styles.infoText2}>경기대학교</h3>
            </div>
            <IcVerticalLine className={styles.verticalLine} />

            <div className={styles.myInfoBox}>
              <h2 className={styles.infoText1}>학년</h2>
              <h3 className={styles.infoText2}>4학년</h3>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>

        <span className={styles.myactivityText}>나의 활동</span>
        {/*TODO: [나의 활동] 3가지 각각 클릭 시 페이지 이동 예정 */}

        <section className={styles.myActivitySection}>
          <button className={styles.activityButton.forSale}>
            <span className={styles.activityText}>판매중</span>
            <div className={styles.iconWrapper}>
              <IcForSale />
            </div>
          </button>
          <button className={styles.activityButton.soldout}>
            <span className={styles.activityText}>거래완료</span>
            <div className={styles.iconWrapper}>
              <IcSoldout />
            </div>
          </button>
          <button className={styles.activityButton.hidden}>
            <span className={styles.activityText}>숨김</span>
            <div className={styles.iconWrapper}>
              <IcHidden />
            </div>
          </button>
        </section>
      </div>
      <NavBar />
    </>
  );
}
