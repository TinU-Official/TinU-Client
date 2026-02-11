import { REVIEW_QUESTIONS } from "@/constants/text";
import Button from "@/components/Common/Button/Button";
import * as styles from "./reviewSelector.css";

interface ReviewSelectorProps {
  value: Record<string, string | null>;
  onChange: (value: Record<string, string | null>) => void;
}

export const ReviewSelector = ({ value, onChange }: ReviewSelectorProps) => {
  return (
    <div className={styles.reviewSelectorWrapper}>
      {REVIEW_QUESTIONS.map(({ id, question, options }) => (
        <div key={id} className={styles.reviewSelector}>
          <h2 className={styles.questionText}>{question}</h2>

          <div className={styles.button}>
            {options.map((option) => (
              <Button
                key={option}
                className={styles.optionButton({
                  state: value[id] === option ? "selected" : "default",
                })}
                onClick={() =>
                  onChange({
                    ...value,
                    [id]: option,
                  })
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
