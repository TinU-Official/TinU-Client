"use client";

import { useForm } from "react-hook-form";
import IcCheckGrey from "@/assets/icons/ic_check-grey.svg";
import IcCheckMint from "@/assets/icons/ic_check-mint.svg";
import IcTermDetail from "@/assets/icons/ic_term-detail.svg";
// import { AGREE_DATA } from "@/constants";
import IcCheckComplete from "@/assets/icons/ic_check-complete.svg";
import IcCheckWhiteGrey from "@/assets/icons/ic_check-whitegrey.svg";
import Button from "@/components/Common/Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import * as styles from "./termsForm.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface TermsFormData {
  agreements: string[];
}

export function TermsForm() {
  const router = useRouter();
  const { watch, setValue, handleSubmit } = useForm<TermsFormData>({
    defaultValues: {
      agreements: [],
    },
  });

  const CheckBoxRef1 = useRef<HTMLInputElement>(null);
  const CheckBoxRef2 = useRef<HTMLInputElement>(null);
  const CheckBoxRef3 = useRef<HTMLInputElement>(null);

  const AGREE_DATA = [
    { text: "[필수] TinU 서비스 이용약관", key: "required", ref: CheckBoxRef1 },
    { text: "[필수] 개인정보 수집 및 이용 동의", key: "required", ref: CheckBoxRef2 },
    { text: "[선택] 광고성 정보 수신 동의", key: "optional", ref: CheckBoxRef3 },
  ];

  const agreements = watch("agreements");

  const handleAllChecked = (checked: boolean) => {
    setValue("agreements", checked ? AGREE_DATA.map((item) => item.key) : [], { shouldValidate: true });
  };

  const handleSingleChecked = (checked: boolean, key: string) => {
    setValue("agreements", checked ? [...agreements, key] : agreements.filter((item) => item !== key), {
      shouldValidate: true,
    });
  };

  const onSubmit = () => {
    router.push("/register/step2");
  };

  return (
    <div className={styles.agreeContainer}>
      <div className={styles.checkboxWrapper} onClick={onClick}>
        <div className={styles.checkboxContent}>
          <input type="checkbox" id="all-check" />
          <label htmlFor="all-check"> {checked ? <IcCheckComplete /> : <IcCheckWhiteGrey />}</label>
          <span className={styles.checkboxText}>네, 동의합니다.</span>
        </div>
      </div>
      <div className={styles.optionalAgreeContainer}>
        {AGREE_DATA.map((data) => (
          <div
            key={data.text}
            className={styles.optionalAgreeWrapper}
            onClick={() => handleSingleChecked(!agreements.includes(data.key), data.key)}
          >
            <div className={styles.agreeWrapper}>
              {agreements.includes(data.key) ? <IcCheckMint /> : <IcCheckGrey />}
              <div className={styles.agreeText({ isRequired: data.key === "required" })}>{data.text}</div>
            </div>
            <IcTermDetail />
          </div>
        ))}
      </div>
      <Button
        type="submit"
        disabled={AGREE_DATA.some(({ key }) => key.includes("required") && !agreements.includes(key))}
      >
        <span>다음</span>
      </Button>
    </div>
  );
}
