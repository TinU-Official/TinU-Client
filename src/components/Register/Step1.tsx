import styled from "@emotion/styled";
import { IcBack, IcCheckGrey, IcCheckWhiteGrey, IcNext, IcCheckComplete, IcCheckMint } from "../../assets";
import Button from "../Common/Button/Button";
import { AGREE_DATA, REGISTER_TEXT } from "../../constant";
import { useState } from "react";
import CheckBox from "./CheckBox";
import StepIcon from "../../utils/StepIcon";
import { useNavigate } from "react-router-dom";

interface AgreeTextProps {
  isRequired: boolean;
}

function Step1() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleClickNextButton = () => {
    navigate("/register/step2");
  };

  // 전체 선택
  const handleAllChecked = (checked: boolean) => {
    setCheckedItems(checked ? AGREE_DATA.map((item) => item.key) : []);
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
        <TitleWrapper dangerouslySetInnerHTML={{ __html: REGISTER_TEXT.STEP1 }} />

        <AgreeContainer>
          <CheckBox
            onClick={() => handleAllChecked(checkedItems.length !== AGREE_DATA.length)}
            checked={checkedItems.length === AGREE_DATA.length}
          >
            {checkedItems.length === AGREE_DATA.length ? <IcCheckComplete /> : <IcCheckWhiteGrey />}
          </CheckBox>

          <OptionalAgreeContainer>
            {AGREE_DATA.map((data) => (
              <OptionalAgreeWrapper
                key={data.text}
                onClick={() => handleSingleChecked(!checkedItems.includes(data.key), data.key)}
              >
                <AgreeWrapper>
                  {checkedItems.includes(data.key) ? <IcCheckMint /> : <IcCheckGrey />}
                  <AgreeText isRequired={data.key === "required"}>{data.text}</AgreeText>
                </AgreeWrapper>
                <IcNext />
              </OptionalAgreeWrapper>
            ))}
          </OptionalAgreeContainer>
        </AgreeContainer>

        <NextButton
          disabled={AGREE_DATA.some(({ key }) => key.includes("required") && !checkedItems.includes(key))}
          onClick={handleClickNextButton}
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

  color: ${({ theme, isRequired }) => (isRequired ? theme.colors.main_mint : theme.colors.gray_3)};
`;
