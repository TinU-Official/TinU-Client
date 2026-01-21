import * as styles from "./divider.css";

interface DividerProps {
  height?: string;
}

export function Divider({ height = "1rem" }: DividerProps) {
  return <hr className={styles.divider} style={{ "--divider-height": height } as React.CSSProperties} />;
}
