import * as styles from "./hashTag.css";

interface HashTagProps {
  text: string;
  isActive?: boolean;
}

export function HashTag({ text, isActive = false }: HashTagProps) {
  return <button className={styles.tag({ state: isActive ? "active" : "inactive" })}># {text}</button>;
}
