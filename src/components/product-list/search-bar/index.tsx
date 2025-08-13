import { IcSearch, IcSwap } from "@/assets/icons";
import { IconButton } from "@/components/Common/IconButton";
import * as styles from "./searchBar.css";

interface SearchBarProps {
  searchText: string;
  handleChangeSearchText: (text: string) => void;
}

export function SearchBar({ searchText, handleChangeSearchText }: SearchBarProps) {
  return (
    <div className={styles.searchBarWrapper}>
      <IcSearch />
      <input
        className={styles.searchBarInput}
        value={searchText}
        onChange={(e) => handleChangeSearchText(e.target.value)}
      />
      <IconButton icon={<IcSwap />} label="검색창 초기화 버튼" />
    </div>
  );
}
