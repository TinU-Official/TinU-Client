import styled from "@emotion/styled";
import React from "react";
import { IcStep1, IcStep2, IcStep3, IcStep4, IcCheckTransparent, IcGreyCircle } from "../assets";

interface StepIconProps {
  step: 1 | 2 | 3 | 4;
}

const StepIcon: React.FC<StepIconProps> = ({ step }) => {
  return (
    <StepIconContainer>
      {step === 1 && (
        <>
          <StepIconWrapper>
            <IcStep1 />
            <StepText>약관동의</StepText>
          </StepIconWrapper>
          <IcGreyCircle />
          <IcGreyCircle />
          <IcGreyCircle />
        </>
      )}
      {step === 2 && (
        <>
          <IcCheckTransparent />
          <StepIconWrapper>
            <IcStep2 />
            <StepText>메일인증</StepText>
          </StepIconWrapper>
          <IcGreyCircle />
          <IcGreyCircle />
        </>
      )}
      {step === 3 && (
        <>
          <IcCheckTransparent />
          <IcCheckTransparent />
          <StepIconWrapper>
            <IcStep3 />
            <StepText>정보입력</StepText>
          </StepIconWrapper>
          <IcGreyCircle />
        </>
      )}
      {step === 4 && (
        <>
          <IcCheckTransparent />
          <IcCheckTransparent />
          <IcCheckTransparent />
          <StepIconWrapper>
            <IcStep4 />
            <StepText>상세정보</StepText>
          </StepIconWrapper>
        </>
      )}
    </StepIconContainer>
  );
};

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

export default StepIcon;
