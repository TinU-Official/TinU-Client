import { ReviewOption } from "@/types/reviewTypes";
import * as styles from "./reviewSelector.css";
import { OptionButton } from "@/components/Common/OptionButton";

const REVIEW_QUESTIONS: {
  id: ReviewOption;
  question: string;
  options: { label: string; value: boolean }[];
}[] = [
  {
    id: "isFriendly",
    question: "대화는 어땠나요?",
    options: [
      { label: "아쉬웠어요", value: false },
      { label: "친절했어요", value: true },
    ],
  },
  {
    id: "notLate",
    question: "시간 약속은 잘 지켰나요?",
    options: [
      { label: "못 지켰어요", value: false },
      { label: "잘 지켰어요", value: true },
    ],
  },
  {
    id: "respondedQuickly",
    question: "답장 속도는 어땠나요?",
    options: [
      { label: "느렸어요", value: false },
      { label: "빨랐어요", value: true },
    ],
  },
];

type ReviewValue = Record<ReviewOption, boolean | null>;

interface ReviewSelectorProps {
  value: ReviewValue;
  onChange: (value: ReviewValue) => void;
}

export const ReviewSelector = ({ value, onChange }: ReviewSelectorProps) => {
  const handleSelectOption = (id: ReviewOption, option: boolean) => {
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
            {options.map(({ label, value: optionValue }) => (
              <OptionButton
                key={label}
                isSelected={value[id] === optionValue}
                onClick={() => handleSelectOption(id, optionValue)}
              >
                {label}
              </OptionButton>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};
