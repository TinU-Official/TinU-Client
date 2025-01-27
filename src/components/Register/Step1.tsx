import styled from "@emotion/styled";
import { IcStep1, IcBack, IcCheckGrey, IcCheckWhiteGrey, IcGreyCircle, IcNext, IcCheckMintWhite } from "../../assets";
import Button from "../Common/Button/Button";
import { Register } from "../../constant";
import { useState } from "react";
import CheckBox from "../Common/CheckBox";

interface AgreeTextProps {
  isNecessary: boolean;
}

function Step1() {
  //const [checkItems, setCheckItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // // 체크박스 전체 선택
  // const handleClickAllCheck = (isChecked) => {
  //   if(isChecked) {
  //     // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
  //     const idArray = [];
  //     data.forEach((item) => idArray.push(item.id));
  //     setCheckItems(idArray);
  //   }
  //   else {
  //     setCheckItems([]);
  //   }
  // }

  // // 체크박스 단일 선택
  // const handleClickSingleCheck = (id, isChecked) => {
  //   if (isChecked) {
  //     setCheckItems(prev => [...prev, id]);
  //   } else {
  //     setCheckItems(checkItems.filter((item) => item !== id));
  //   }
  // };

  return (
    <Step1Container>
      <Step1Wrapper>
        <IcBack />
        <RegisterIconWrapper>
          <IcStep1 />
          <IcGreyCircle />
          <IcGreyCircle />
          <IcGreyCircle />
        </RegisterIconWrapper>
        <TitleWrapper dangerouslySetInnerHTML={{ __html: Register.TEXT_STEP1 }} />

        <AgreeContainer>
          <CheckBox
            text="네, 모두 동의합니다."
            children={isChecked ? <IcCheckMintWhite /> : <IcCheckWhiteGrey />}
            onClick={() => {
              setIsChecked(true);
              setIsModalOpen(true);
            }}
          ></CheckBox>

          <OptionalAgreeContainer>
            {[
              { text: "[필수] TinU 서비스 이용약관", key: "necessary1" },
              { text: "[필수] 개인정보 수집 및 이용 동의", key: "necessary2" },
              { text: "[선택] 광고성 정보 수신 동의", key: "optional" },
            ].map(({ text, key }) => (
              <OptionalAgreeWrapper key={key}>
                <AgreeWrapper>
                  <IcCheckGrey />
                  <AgreeText isNecessary={key.includes("necessary")}>{text}</AgreeText>
                </AgreeWrapper>
                <IcNext />
              </OptionalAgreeWrapper>
            ))}
          </OptionalAgreeContainer>
        </AgreeContainer>

        <NextButton disabled={true}>
          <span>다음</span>
        </NextButton>
      </Step1Wrapper>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h1>[전체] 이용약관</h1>
            <p>이용약관에 대한 설명입니다다ㅏ다ㅏ다다닫다다</p>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Step1Container>
  );
}

export default Step1;

const Step1Container = styled.div`
  width: 100vw;
  height: 100dvh;

  padding: 2rem;
  position: relative;
`;

const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const RegisterIconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.fonts.title1};
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NextButton = styled(Button)<{ disabled?: boolean }>`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
`;

const OptionalAgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 0 2rem;
`;

const OptionalAgreeWrapper = styled.div`
  display: flex;
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

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30rem;
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  animation: slide-up 0.5s ease-out;

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const CloseButton = styled.button`
  padding: 1rem;
  margin-top: 1.5rem;

  background-color: ${({ theme }) => theme.colors.light_2};
  border-radius: 0.5rem;
`;
