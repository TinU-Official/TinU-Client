"use client";

import { IcClose } from "@/assets/icons";
import { HashTag } from "@/components/Common/HashTag/HashTag";
import { Header } from "@/components/Common/Header/Header";
import Select from "@/components/Common/Select/Select";
import TextField from "@/components/Common/TextField/TextField";
import * as styles from "./product-new.css";

export default function page() {
  return (
    <>
      <Header center="판매하기" right={<IcClose />} isSticky />
      <main className={styles.mainWrapper}>
        <TextField placeholder="제목" />
        <TextField placeholder="가격" rightAddOn={<span className={styles.won}>원</span>} />
        <Select placeholder="카테고리 선택하기">
          <Select.Trigger />
          <Select.Main>
            <Select.Option value="사과">사과</Select.Option>
            <Select.Option value="귤">귤</Select.Option>
            <Select.Option value="포도">포도</Select.Option>
            <Select.Option value="망고">망고</Select.Option>
            <Select.Option value="수박">수박</Select.Option>
          </Select.Main>
        </Select>
        <textarea placeholder="내용을 입력하세요" className={styles.textarea} />

        <HashTag text="태그 입력(최대 30개)" />
      </main>
    </>
  );
}
