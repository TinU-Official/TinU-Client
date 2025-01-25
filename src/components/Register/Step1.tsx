import styled from "@emotion/styled";
import { IcAgree, IcBack, IcCheckGrey, IcCheckWhiteGrey, IcGreyCircle } from "../../assets";
import Button from "../Common/Button/Button";
import { Register } from "../../constant";

function Step1() {
  return (
    <Step1Container>
      <Step1Wrapper>
        <BackWrapper>
          <StyledIcBack />
        </BackWrapper>
        <RegisterIconWrapper>
          <StyledIcAgree />
          <StyledIcGreyCircle />
          <StyledIcGreyCircle />
          <StyledIcGreyCircle />
        </RegisterIconWrapper>
        <TitleWrapper dangerouslySetInnerHTML={{ __html: Register.TEXT_STEP1 }} />

        <AgreeContainer>
          <Button>
            <IcCheckWhiteGrey />
            <span>네, 모두 동의합니다</span>
          </Button>

          <OptionalAgreeContainer>
            {[
              { text: "[필수] TinU 서비스 이용약관", key: "necessary1" },
              { text: "[필수] 개인정보 수집 및 이용 동의", key: "necessary2" },
              { text: "[선택] 광고성 정보 수신 동의", key: "optional" },
            ].map(({ text, key }) => (
              <OptionalAgreeWrapper key={key}>
                <StyledIcCheckGrey />
                <AgreeText>{text}</AgreeText>
              </OptionalAgreeWrapper>
            ))}
          </OptionalAgreeContainer>
        </AgreeContainer>

        <NextButton disabled={true}>
          <span>다음</span>
        </NextButton>
      </Step1Wrapper>
    </Step1Container>
  );
}

export default Step1;

const Step1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: relative;
  box-sizing: border-box;
`;

const Step1Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 2rem;
`;

const BackWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const StyledIcBack = styled(IcBack)``;

const RegisterIconWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const StyledIcAgree = styled(IcAgree)``;

const StyledIcGreyCircle = styled(IcGreyCircle)``;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.fonts.title1};
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const NextButton = styled(Button)<{ disabled?: boolean }>``;

const OptionalAgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const OptionalAgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledIcCheckGrey = styled(IcCheckGrey)`
  margin-left: 2rem;
`;

const AgreeText = styled.div`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray_3};
`;
