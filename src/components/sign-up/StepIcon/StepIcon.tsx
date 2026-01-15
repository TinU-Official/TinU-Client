"use client";

import { memo } from "react";

import { IcCheckTransparent, IcGreyCircle, IcStep1, IcStep2, IcStep3, IcStep4 } from "@/assets/icons";
import * as styles from "./stepIcon.css";

interface StepIconProps {
  step: 1 | 2 | 3 | 4;
}

const STEP_CONFIG = {
  1: { text: "약관동의", Icon: IcStep1 },
  2: { text: "메일인증", Icon: IcStep2 },
  3: { text: "정보입력", Icon: IcStep3 },
  4: { text: "상세정보", Icon: IcStep4 },
} as const;

export function StepIcon({ step }: StepIconProps) {
  const renderIcons = () => {
    return Array(4)
      .fill(null)
      .map((_, index) => {
        const currentStep = index + 1;

        if (currentStep === step) {
          const StepComponent = STEP_CONFIG[step].Icon;
          return <StepComponent key={currentStep} />;
        }

        return currentStep < step ? <IcCheckTransparent key={currentStep} /> : <IcGreyCircle key={currentStep} />;
      });
  };

  return (
    <div className={styles.stepIconWrapper}>
      <div className={styles.stepIconListContainer}>{renderIcons()}</div>
      <span className={styles.stepText({ step })}>{STEP_CONFIG[step].text}</span>
    </div>
  );
}

export const MemoizedStepIcon = memo(StepIcon);
