"use client";

import { useForm } from "react-hook-form";
import { AGREE_DATA } from "@/constants";
import { useRouter } from "next/navigation";
import * as styles from "./termsForm.css";

import { useCallback, useMemo } from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { TermCheckboxField } from "../TermCheckboxField/TermCheckboxField";
import { AllAgreeCheckboxField } from "../AllAgreeCheckboxField/AllAgreeCheckboxField";

interface TermsFormData {
  agree1: boolean;
  agree2: boolean;
  agree3: boolean;
}

export function TermsForm() {
  const router = useRouter();
  const { watch, setValue, handleSubmit } = useForm<TermsFormData>({
    defaultValues: {
      agree1: false,
      agree2: false,
      agree3: false,
    },
  });

  const agree1 = watch("agree1");
  const agree2 = watch("agree2");
  const agree3 = watch("agree3");

  const handleClickAllCheckBox = useCallback(() => {
    const formData = watch();
    const allChecked = Object.values(formData).every(Boolean);
    const newValue = !allChecked;

    (Object.keys(formData) as Array<keyof TermsFormData>).forEach((key) => {
      setValue(key, newValue, { shouldValidate: true });
    });
  }, [setValue, watch]);

  const handleSingleChecked = useCallback(
    (id: number, checked: boolean) => {
      const fieldName = `agree${id}` as keyof TermsFormData;
      setValue(fieldName, !checked, { shouldValidate: true });
    },
    [setValue],
  );

  const isAllRequired = useMemo(() => agree1 && agree2, [agree1, agree2]);

  const isAllChecked = useMemo(() => [agree1, agree2, agree3].every(Boolean), [agree1, agree2, agree3]);

  const onSubmit = () => {
    router.push("/register/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.termsFormWrapper}>
      <div>
        <AllAgreeCheckboxField isAllChecked={isAllChecked} onClick={handleClickAllCheckBox} />
        <div className={styles.termCheckboxListContainer}>
          {AGREE_DATA.map((data) => (
            <TermCheckboxField
              key={data.id}
              id={data.id}
              text={data.text}
              isChecked={watch(`agree${data.id}` as keyof TermsFormData)}
              isRequired={data.type === "required"}
              detailLink={data.detailLink}
              onChangeChecked={handleSingleChecked}
            />
          ))}
        </div>
      </div>
      <SubmitButton disabled={!isAllRequired} />
    </form>
  );
}
