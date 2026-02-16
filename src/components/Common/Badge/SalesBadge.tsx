import * as styles from "./salesBadge.css";

interface SalesBadgeProps {
  isSoldOut: boolean;
}

function SalesBadge({ isSoldOut }: SalesBadgeProps) {
  return <div className={styles.badge({ isSoldOut })}>{isSoldOut ? "판매완료" : "판매중"}</div>;
}

export default SalesBadge;
