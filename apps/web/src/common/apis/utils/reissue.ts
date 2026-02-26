import ky from "ky";

// ResponseType 몰라서 추가 못 한 상태
// export interface ReissueResponse {}

export async function reissueToken() {
  // apiClient 미사용 - afterResponse hook에서 무한 루프 발생 방지
  const response = await ky.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, {
    credentials: "include",
  });

  const authHeader = response.headers.get("Authorization") || response.headers.get("authorization");

  if (!authHeader) {
    throw new Error("accessToken 추출에 실패했습니다.");
  }

  const token = authHeader.replace(/^Bearer\s+/i, "");

  return token;
}
