import { useForm } from "react-hook-form";
import { AGREE_DATA } from "@/constants";
import * as styles from "./terms.css";

import { useCallback, useMemo } from "react";
import Button from "@/components/Common/Button/Button";
import { TermCheckboxField } from "./TermCheckboxField/TermCheckboxField";
import { AllAgreeCheckboxField } from "./AllAgreeCheckboxField/AllAgreeCheckboxField";
import { MemoizedStepIcon } from "../StepIcon/StepIcon";

interface TermsFormData {
  agree1: boolean;
  agree2: boolean;
  agree3: boolean;
}

interface TermsProps {
  onNext: (terms: { agree1: boolean; agree2: boolean; agree3: boolean }) => void;
}

export function Terms({ onNext }: TermsProps) {
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
    onNext({ agree1, agree2, agree3 });
  };

  return (
    <>
      <MemoizedStepIcon step={1} />
      <h1 className={styles.title}>
        간편 회원가입을 위해 <br />
        약관 동의가 필요해요
      </h1>
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
        <div className={styles.fixedButtonWrapper}>
          <Button disabled={!isAllRequired}>다음</Button>
        </div>
      </form>
    </>
  );
}
