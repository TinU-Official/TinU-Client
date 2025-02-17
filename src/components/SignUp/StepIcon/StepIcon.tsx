"use client";

import { memo } from "react";
import IcStep1 from "@/assets/icons/ic_step1.svg";
import IcStep2 from "@/assets/icons/ic_step2.svg";
import IcStep3 from "@/assets/icons/ic_step3.svg";
import IcStep4 from "@/assets/icons/ic_step4.svg";
import IcCheckTransparent from "@/assets/icons/ic_check_transparent.svg";
import IcGreyCircle from "@/assets/icons/ic_grey_circle.svg";
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
          return (
            <div className={styles.stepIconWrapper} key={index}>
              <StepComponent />
              <span className={styles.stepText}>{STEP_CONFIG[step].text}</span>
            </div>
          );
        }

        return currentStep < step ? <IcCheckTransparent key={index} /> : <IcGreyCircle key={index} />;
      });
  };

  return <div className={styles.stepIconContainer}>{renderIcons()}</div>;
}

export const MemoizedStepIcon = memo(StepIcon);
