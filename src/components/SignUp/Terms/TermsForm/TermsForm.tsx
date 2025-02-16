"use client";

import { useForm } from "react-hook-form";
import IcCheckGrey from "@/assets/icons/ic_check-grey.svg";
import IcCheckMint from "@/assets/icons/ic_check-mint.svg";
import IcTermDetail from "@/assets/icons/ic_term-detail.svg";
import { AGREE_DATA } from "@/constants";
import Button from "@/components/Common/Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import * as styles from "./termsForm.css";
import { useRouter } from "next/navigation";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.agreeContainer}>
      <CheckBox
        onClick={() => handleAllChecked(agreements.length !== AGREE_DATA.length)}
        checked={agreements.length === AGREE_DATA.length}
      />
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
    </form>
  );
}
