import { IcDownSmallGrey, IcDownSmallWhite } from "@/assets/icons";
import * as styles from "./filterChip.css";

interface FilterChipProps {
  filterText: string;
  isSelected: boolean;
}

export function FilterChip({ filterText, isSelected }: FilterChipProps) {
  return (
    <button type="button" className={styles.filterChipWrapper({ isSelected })}>
      {filterText}
      {isSelected ? <IcDownSmallWhite /> : <IcDownSmallGrey />}
    </button>
  );
}
