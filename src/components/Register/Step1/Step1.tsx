"use client"

import IcChevronLeft from "@/assets/icons/ic_chevron_left.svg";
import IcClose from "@/assets/icons/ic_close.svg";
import IcCheckGrey from "@/assets/icons/ic_check-grey.svg";
import IcTermDetail from "@/assets/icons/ic_term-detail.svg";
import IcCheckMint from "@/assets/icons/ic_check-mint.svg";
import { useState } from "react";
import * as styles from './step1.css';
import Button from "@/components/Common/Button/Button";
import { AGREE_DATA, REGISTER_TEXT } from "@/constants";
import { useRouter } from "next/navigation";
import CheckBox from "../CheckBox/CheckBox";
import { MemoizedStepIcon } from "../StepIcon/StepIcon";
import { Header } from "@/components/Common/Header/Header";

function Step1() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const router = useRouter();

  const handleClickNextButton = () => {
    router.push("/register/step2");
  };

  const handleAllChecked = (checked: boolean) => {
    setCheckedItems(checked ? AGREE_DATA.map((item) => item.key) : []);
  };

  const handleSingleChecked = (checked: boolean, key: string) => {
    setCheckedItems((prev) => (checked ? [...prev, key] : prev.filter((item) => item !== key)));
  };

  return (
    <>
    <Header left={<IcChevronLeft />}/>
    <div className={styles.step1Container}>
      <div className={styles.step1Wrapper}>
        <MemoizedStepIcon step={1} />
        <div
          className={styles.titleWrapper}
          dangerouslySetInnerHTML={{ __html: REGISTER_TEXT.STEP1 }}
        />
        <div className={styles.agreeContainer}>
          <CheckBox
            onClick={() => handleAllChecked(checkedItems.length !== AGREE_DATA.length)}
            checked={checkedItems.length === AGREE_DATA.length}
          />
          <div className={styles.optionalAgreeContainer}>
            {AGREE_DATA.map((data) => (
              <div
                key={data.text}
                className={styles.optionalAgreeWrapper}
                onClick={() => handleSingleChecked(!checkedItems.includes(data.key), data.key)}
              >
                <div className={styles.agreeWrapper}>
                  {checkedItems.includes(data.key) ? <IcCheckMint /> : <IcCheckGrey />}
                  <div className={styles.agreeText({ isRequired: data.key === "required" })}>
                    {data.text}
                  </div>
                </div>
                <IcTermDetail />
              </div>
            ))}
          </div>
        </div>
        <Button
           disabled={AGREE_DATA.some(
            ({ key }) => key.includes("required") && !checkedItems.includes(key)
           )}
          onClick={handleClickNextButton}
        >
          <span>다음</span>
        </Button>
      </div>
    </div>
    </>
  );
}

export default Step1;
