import styled from "@emotion/styled";
import { IcAgree, IcBack, IcCheckGrey, IcCheckWhiteGrey, IcGreyCircle } from "../../assets";
import Button from "../Common/Button/Button";

function Step1() {
  // const [isDisabled, setIsDisabled] = useState(true);

  // const handleClickButton = () => {
  //   setIsDisabled(false);
  // };

  return (
    <Step1Container>
      <BackWrapper>
        <StyledIcBack />
      </BackWrapper>
      <RegisterIconWrapper>
        <StyledIcAgree />
        <StyledIcGreyCircle />
        <StyledIcGreyCircle />
        <StyledIcGreyCircle />
      </RegisterIconWrapper>
      <TitleWrapper>Register.TEXT_STEP1</TitleWrapper>

      <AgreeContainer>
        {/* <AgreeButton>
          <StyledIcWhiteGrey />
          <span>네, 모두 동의합니다</span>
        </AgreeButton> */}
        <Button>
          <IcCheckWhiteGrey />
          <span>네, 모두 동의합니다</span>
        </Button>

        <OptionalAgreeContainer>
          <OptionalAgreeWrapper>
            <StyledIcCheckGrey />
            <AgreeText>[필수] TinU 서비스 이용약관</AgreeText>
          </OptionalAgreeWrapper>
          <OptionalAgreeWrapper>
            <StyledIcCheckGrey />
            <AgreeText>[필수] 개인정보 수집 및 이용 동의</AgreeText>
          </OptionalAgreeWrapper>
          <OptionalAgreeWrapper>
            <StyledIcCheckGrey />
            <AgreeText>[선택] 광고성 정보 수신 동의</AgreeText>
          </OptionalAgreeWrapper>
        </OptionalAgreeContainer>
        <NextButton>
          <span>다음</span>
        </NextButton>
      </AgreeContainer>
    </Step1Container>
  );
}

export default Step1;

const Step1Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;

  border: 1px solid grey;
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
`;
