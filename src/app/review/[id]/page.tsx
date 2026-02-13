"use client";

import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import Button from "@/components/Common/Button/Button";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./review.css";
import { ReviewSelector } from "@/components/review/reviewSelector/ReviewSelector";

import { useState } from "react";
import { EMOJI_OPTIONS, EmojiSelector } from "@/components/review/emojiSelector/EmojiSelector";
import { ReviewOption } from "@/types/reviewTypes";

export default function ReviewPage() {
  const [emoji, setEmoji] = useState<(typeof EMOJI_OPTIONS)[number]["id"] | null>(null);
  const [reviews, setReviews] = useState<Record<ReviewOption, boolean | null>>({
    isFriendly: null,
    notLate: null,
    respondedQuickly: null,
  });

  const isValid = emoji !== null && Object.values(reviews).every((value) => value !== null);

  return (
    <>
      <div className={styles.reviewWrapper}>
        <Header isSticky left={<BackButton />} center={<span className={styles.headerText}>거래 후기 보내기</span>} />
        <ProductInfo />

        <section className={styles.emojiSection}>
          <div className={styles.emojiWrapper}>
            <h1 className={styles.questionText}>아리님과의 거래가 어떠셨나요?</h1>
            <EmojiSelector value={emoji} onChange={setEmoji} />
          </div>
        </section>

        <section className={styles.reviewSelectorWrapper}>
          <ReviewSelector value={reviews} onChange={setReviews} />
        </section>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button disabled={!isValid}>제출하기</Button>
      </div>
    </>
  );
}
