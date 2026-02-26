import * as styles from "./emojiSelector.css";
import { IcGood, IcSad, IcSatisfied } from "@/assets/icons";

export const EMOJI_OPTIONS = [
  { id: "sad", label: "별로예요", Icon: IcSad },
  { id: "good", label: "좋아요", Icon: IcGood },
  { id: "satisfied", label: "만족해요", Icon: IcSatisfied },
];

type EmojiId = (typeof EMOJI_OPTIONS)[number]["id"];

interface EmojiSelectorProps {
  value: EmojiId | null;
  onChange: (id: EmojiId) => void;
}

export const EmojiSelector = ({ value, onChange }: EmojiSelectorProps) => {
  return (
    <section className={styles.emojiSection}>
      {EMOJI_OPTIONS.map(({ id, label, Icon }) => (
        <button key={id} type="button" className={styles.emojiWrapper} onClick={() => onChange(id)}>
          <div className={styles.emojiCircle({ selected: value === id })}>
            <Icon />
          </div>
          <span className={styles.emojiText}>{label}</span>
        </button>
      ))}
    </section>
  );
};
