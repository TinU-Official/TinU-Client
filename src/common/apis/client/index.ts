import ky, { type Options } from "ky";

import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from "../constants/http";
import { accessTokenStore } from "../stores/token-store";
import { reissueToken } from "../utils/reissue";

interface ApiResponse<T> {
  code: string;
  message: string | null;
  status: number;
  data: T;
}

const baseApiClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
  hooks: {
    beforeRequest: [
      (request) => {
        const atk = accessTokenStore.get();
        if (atk != null) {
          request.headers.set("Authorization", `Bearer ${atk}`);
        }
      },
    ],
    afterResponse: [
      async (request, _options, response) => {
        if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
          try {
            // 토큰 재발급
            const newToken = await reissueToken();
            accessTokenStore.set(newToken);
            return baseApiClient(request);
          } catch {
            accessTokenStore.clear();
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }

            // 토큰 재발급 실패 시 커스텀 에러 객체 생성
            const reissueError = new Error("토큰 재발급에 실패했습니다. 다시 로그인해주세요.");
            reissueError.name = "TOKEN_REISSUE_ERROR";
            throw reissueError;
          }
        }

        return response;
      },
    ],
    beforeError: [
      async (error) => {
        // 토큰 재발급 실패 에러
        if (error.name === "TOKEN_REISSUE_ERROR") {
          return error;
        }

        const { response } = error;

        // HTTP 에러
        if (response) {
          const status = response.status;

          const customMessage =
            HTTP_ERROR_MESSAGE[status as keyof typeof HTTP_ERROR_MESSAGE] || `HTTP ${status} 오류가 발생했습니다.`;

          error.message = customMessage;
        } else {
          // 네트워크 에러
          error.message = HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.NETWORK_ERROR];
        }

        return error;
      },
    ],
  },
});

export const apiClient = {
  get: <T>(url: string, options?: Options) => baseApiClient.get(url, options).json<ApiResponse<T>>(),
  post: <T>(url: string, options?: Options) => baseApiClient.post(url, options).json<ApiResponse<T>>(),
  put: <T>(url: string, options?: Options) => baseApiClient.put(url, options).json<ApiResponse<T>>(),
  patch: <T>(url: string, options?: Options) => baseApiClient.patch(url, options).json<ApiResponse<T>>(),
  delete: <T>(url: string, options?: Options) => baseApiClient.delete(url, options).json<ApiResponse<T>>(),
};
