// Stack 라우트 파라미터 타입 - 새 네이티브 스크린 추가 시 여기에
export type RootStackParamList = {
  Webview: undefined;
  Chat: { userId: string; userName: string };
  CreatePost: undefined;
};

// Web → Native 메시지 타입 - 새 메시지 추가 시 유니온으로 연결
export type WebToNativeMessage =
  | { type: "NAVIGATE_TO_CHAT"; payload: { userId: string; userName: string } }
  | { type: "NAVIGATE_TO_CREATE_POST"; payload?: undefined };
