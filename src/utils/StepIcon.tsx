import styled from "@emotion/styled";
import { memo } from "react";
import { IcStep1, IcStep2, IcStep3, IcStep4, IcCheckTransparent, IcGreyCircle } from "../assets";

interface StepIconProps {
  step: 1 | 2 | 3 | 4;
}

const STEP_CONFIG = {
  1: { text: "약관동의", Icon: IcStep1 },
  2: { text: "메일인증", Icon: IcStep2 },
  3: { text: "정보입력", Icon: IcStep3 },
  4: { text: "상세정보", Icon: IcStep4 },
} as const;

function StepIcon({ step }: StepIconProps) {
  const renderIcons = () => {
    return Array(4)
      .fill(null)
      .map((_, index) => {
        const currentStep = index + 1;

        if (currentStep === step) {
          const StepComponent = STEP_CONFIG[step].Icon;
          return (
            <StepIconWrapper key={index}>
              <StepComponent />
              <StepText>{STEP_CONFIG[step].text}</StepText>
            </StepIconWrapper>
          );
        }

        return currentStep < step ? <IcCheckTransparent key={index} /> : <IcGreyCircle key={index} />;
      });
  };
  return <StepIconContainer>{renderIcons()}</StepIconContainer>;
}

const StepIconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StepIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepText = styled.span`
  margin-top: 0.3rem;
  ${({ theme }) => theme.fonts.description3};
  color: ${({ theme }) => theme.colors.gray_3};
`;

export default memo(StepIcon);
