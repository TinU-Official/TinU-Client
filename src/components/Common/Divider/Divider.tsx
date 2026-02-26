import * as styles from "./divider.css";

interface DividerProps {
  height?: number;
}

export function Divider({ height = 1 }: DividerProps) {
  return <hr className={styles.divider} style={{ height: `${height}rem` }} />;
}
