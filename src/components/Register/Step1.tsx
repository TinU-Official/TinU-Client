import styled from "@emotion/styled";
import { IcBack, IcCheckGrey, IcCheckWhiteGrey, IcNext, IcCheckMintWhite, IcCheckMint } from "../../assets";
import Button from "../Common/Button/Button";
import { Register } from "../../constant";
import { useState } from "react";
import CheckBox from "./CheckBox";
import StepIcon from "../../utils/StepIcon";
import { useNavigate } from "react-router-dom";

interface AgreeTextProps {
  isNecessary: boolean;
}

function Step1() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const data = [
    { text: "[필수] TinU 서비스 이용약관", key: "necessary1" },
    { text: "[필수] 개인정보 수집 및 이용 동의", key: "necessary2" },
    { text: "[선택] 광고성 정보 수신 동의", key: "optional" },
  ];

  const handleNextStep = () => {
    navigate("/register/step2");
  };

  // 전체 선택
  const handleAllChecked = (checked: boolean) => {
    setCheckedItems(checked ? data.map((item) => item.key) : []);
  };

  // 개별 선택
  const handleSingleChecked = (checked: boolean, key: string) => {
    setCheckedItems((prev) => (checked ? [...prev, key] : prev.filter((item) => item !== key)));
  };

  return (
    <Step1Container>
      <Step1Wrapper>
        <IcBack />
        <StepIcon step={1} />
        <TitleWrapper dangerouslySetInnerHTML={{ __html: Register.TEXT_STEP1 }} />

        <AgreeContainer>
          <CheckBox
            text="네, 모두 동의합니다."
            onClick={() => handleAllChecked(checkedItems.length !== data.length)}
            checked={checkedItems.length === data.length}
          >
            {checkedItems.length === data.length ? <IcCheckMintWhite /> : <IcCheckWhiteGrey />}
          </CheckBox>

          <OptionalAgreeContainer>
            {data.map(({ text, key }) => (
              <OptionalAgreeWrapper key={key} onClick={() => handleSingleChecked(!checkedItems.includes(key), key)}>
                <AgreeWrapper>
                  {checkedItems.includes(key) ? <IcCheckMint /> : <IcCheckGrey />}
                  <AgreeText isNecessary={key.includes("necessary")}>{text}</AgreeText>
                </AgreeWrapper>
                <IcNext />
              </OptionalAgreeWrapper>
            ))}
          </OptionalAgreeContainer>
        </AgreeContainer>

        <NextButton
          disabled={data.some(({ key }) => key.includes("necessary") && !checkedItems.includes(key))}
          onClick={handleNextStep}
        >
          <span>다음</span>
        </NextButton>
      </Step1Wrapper>
    </Step1Container>
  );
}

export default Step1;

const Step1Container = styled.div`
  height: 100dvh;

  padding: 2rem;
  position: relative;
`;

const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TitleWrapper = styled.div`
  margin-left: 1rem;
  ${({ theme }) => theme.fonts.title1};
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NextButton = styled(Button)<{ disabled?: boolean }>`
  width: calc(100% - 4rem);
  position: absolute;
  bottom: 3rem;
`;

const OptionalAgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 0 2rem;
`;

const OptionalAgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const AgreeText = styled.div<AgreeTextProps>`
  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme, isNecessary }) => (isNecessary ? theme.colors.main_mint : theme.colors.gray_3)};
`;
