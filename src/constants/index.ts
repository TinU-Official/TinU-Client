export const REGISTER_TEXT = {
  STEP1: "간편 회원가입을 위해<br /> 약관 동의가 필요해요",
  STEP2: " 학교 계정 인증을 위한<br /> 이메일을 입력하세요",
  DESCRIPTION_STEP2: " 최초 1회 이메일 인증이 필요해요.",
  STEP3: "나만의 프로필을<br /> 설정하세요",
  DESCRIPTION_STEP3: "마이페이지에서 언제든 수정 가능해요.",
  STEP4: "추가적인 정보를<br /> 입력하세요",
  DESCRIPTION_STEP4: "추가정보를 입력하고 신뢰도를 높여보세요!",
} as const;

export const AGREE_DATA = [
  { id: 1, text: "[필수] TinU 서비스 이용약관", type: "required", detailLink: "" },
  { id: 2, text: "[필수] 개인정보 수집 및 이용 동의", type: "required", detailLink: "" },
  { id: 3, text: "[선택] 광고성 정보 수신 동의", type: "optional", detailLink: "" },
];
