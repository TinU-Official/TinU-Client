import * as styles from "./hashTag.css";

interface HashTagProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function HashTag({ text, isActive = false, onClick }: HashTagProps) {
  return (
    <button className={styles.tag({ state: isActive ? "active" : "inactive" })} onClick={onClick}>
      # {text}
    </button>
  );
}
