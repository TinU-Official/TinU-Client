import { FilterOption } from "@/types/chatListTypes";
import * as styles from "./filterButton.css";

interface FilterButtonProps {
  option: FilterOption;
  isSelected: boolean;
  handleClickFilterButton: (option: FilterOption) => void;
}

export const FilterButton = ({ option, isSelected, handleClickFilterButton }: FilterButtonProps) => {
  return (
    <button
      type="button"
      className={styles.filterButtonWrapper({ isSelected })}
      onClick={() => handleClickFilterButton(option)}
    >
      <span className={styles.filterButtonOption({ isSelected })}>{option}</span>
    </button>
  );
};
