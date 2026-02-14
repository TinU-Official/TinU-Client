import * as styles from "./badge.css";

interface BadgeProps {
  status: "forSale" | "soldOut";
  children: React.ReactNode;
}

function Badge({ status, children }: BadgeProps) {
  return <div className={styles.badge({ status })}>{children}</div>;
}

export default Badge;
