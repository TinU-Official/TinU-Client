"use client";

import IcHamburger from "@/assets/icons/ic_hamburger.svg";
import ImgLogoSmall from "@/assets/imgs/img_logo_small.svg";
import { Header } from "@/components/Common/Header/Header";
import { SearchBar } from "@/components/product-list/search-bar";
import * as styles from "./product-list.css";

import { FilterChip } from "@/components/product-list/filter-chip";
import { useState } from "react";

export default function page() {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <Header left={<ImgLogoSmall />} right={<IcHamburger />} />
      <section className={styles.searchBarSection}>
        <SearchBar searchText={searchText} handleChangeSearchText={handleChangeSearchText} />
      </section>
      <section className={styles.filterChipSection}>
        <div className={styles.filterChipScrollContainer}>
          <FilterChip filterText="전체 1" isSelected={true} />
          <FilterChip filterText="전체 2" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
          <FilterChip filterText="전체 3" isSelected={false} />
        </div>
      </section>
    </>
  );
}
