import * as styles from "./reviewSelector.css";
import { OptionButton } from "@/components/Common/OptionButton";

export const REVIEW_QUESTIONS = [
  {
    id: "conversation",
    question: "대화는 어땠나요?",
    options: ["아쉬웠어요", "친절했어요"],
  },
  {
    id: "punctuality",
    question: "시간 약속은 잘 지켰나요?",
    options: ["못 지켰어요", "잘 지켰어요"],
  },
  {
    id: "responseSpeed",
    question: "답장 속도는 어땠나요?",
    options: ["느렸어요", "빨랐어요"],
  },
];

type ReviewId = (typeof REVIEW_QUESTIONS)[number]["id"];
type ReviewValue = Record<ReviewId, string | null>;

interface ReviewSelectorProps {
  value: ReviewValue;
  onChange: (value: ReviewValue) => void;
}

export const ReviewSelector = ({ value, onChange }: ReviewSelectorProps) => {
  const handleOptionSelect = (id: ReviewId, option: string) => {
    onChange({
      ...value,
      [id]: option,
    });
  };

  return (
    <div className={styles.reviewSelectorWrapper}>
      {REVIEW_QUESTIONS.map(({ id, question, options }) => (
        <div key={id} className={styles.reviewSelector}>
          <h2 className={styles.questionText}>{question}</h2>

          <section className={styles.buttonSection}>
            {options.map((option) => (
              <OptionButton
                key={option}
                isSelected={value[id] === option}
                onClick={() => handleOptionSelect(id, option)}
              >
                {option}
              </OptionButton>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};
