"use client";

import { ProductInfo } from "@/components/Chat/ProductInfo/ProductInfo";
import { BackButton } from "@/components/Common/BackButton/BackButton";
import Button from "@/components/Common/Button/Button";
import { Header } from "@/components/Common/Header/Header";
import * as styles from "./review.css";
import { ReviewSelector } from "@/components/review/reviewSelector/ReviewSelector";

import { useState } from "react";
import { EMOJI_OPTIONS } from "@/constants/text";
import { EmojiSelector } from "@/components/review/emojiSelector/EmojiSelector";

export default function ReviewPage() {
  const [emoji, setEmoji] = useState<(typeof EMOJI_OPTIONS)[number]["id"] | null>(null);

  const [reviews, setReviews] = useState<Record<string, string | null>>({
    conversation: null,
    punctuality: null,
    responseSpeed: null,
  });

  const isValid = emoji !== null && Object.values(reviews).every((value) => value !== null);

  return (
    <>
      <div className={styles.reviewWrapper}>
        <Header isSticky left={<BackButton />} center={<span className={styles.headerText}>거래 후기 보내기</span>} />
        <ProductInfo />

        <section className={styles.emojiSection}>
          <div className={styles.reviewSection}>
            <h1 className={styles.reviewText}>아리님과의 거래가 어떠셨나요?</h1>
            <EmojiSelector value={emoji} onChange={setEmoji} />
          </div>
        </section>

        <div className={styles.reviewScrollArea}>
          <ReviewSelector value={reviews} onChange={setReviews} />
        </div>
      </div>

      <div className={styles.fixedButtonWrapper}>
        <Button disabled={!isValid}>제출하기</Button>
      </div>
    </>
  );
}
