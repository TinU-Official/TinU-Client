"use client";

import {
  IcBubble,
  IcFavorite,
  IcForSale,
  IcHamburger,
  IcHidden,
  IcPencil,
  IcSoldout,
  IcVerticalLine,
} from "@/assets/icons";
import { Header } from "@/components/Common/Header/Header";
import { IconButton } from "@/components/Common/IconButton";
import { NavBar } from "@/components/Common/NavBar/NavBar";
import Image from "next/image";
import * as styles from "./mypage.css";
import { ChangeEvent, useState } from "react";

export default function MyPage() {
  const [inputText, setInputText] = useState("");
  const MAX_LENGTH = 50; // 자기소개 글자수 최대 50자

  const handleChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.length > MAX_LENGTH) return;
    setInputText(value);
  };

  return (
    <>
      <div className={styles.mypageWrapper}>
        <Header center={<span className={styles.mypageText}>마이</span>} right={<IcHamburger />} isSticky />
        <section className={styles.oneLineIntro}>
          <textarea
            className={styles.oneLineIntroText}
            value={inputText}
            onChange={handleChangeInputText}
            maxLength={50}
            placeholder="사소한 물건도 소중하게 다루는 편입니다."
          ></textarea>
          <div className={styles.bubble}>
            <IcBubble />
          </div>
        </section>

        <section className={styles.profileSection}>
          <div className={styles.myImgWrapper}>
            {/* TODO: 프로필 사진 수정 기능 추가 예정*/}
            <Image src="/sechon.png" alt="내 프로필 사진" className={styles.profileImg} fill />
            <IconButton icon={<IcPencil />} label="프로필 사진 수정 버튼" className={styles.pencil} />
          </div>
          <h2 className={styles.nickname}>세숑</h2>
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
          <span className={styles.myActivityText}>나의 활동</span>
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
            <button className={styles.activityButton.favorite}>
              <span className={styles.activityText}>관심상품</span>
              <div className={styles.iconWrapper}>
                <IcFavorite />
              </div>
            </button>
            <button className={styles.activityButton.hidden}>
              <span className={styles.activityText}>숨김목록</span>
              <div className={styles.iconWrapper}>
                <IcHidden />
              </div>
            </button>
          </section>
        </div>
      </div>
      <NavBar />
    </>
  );
}
