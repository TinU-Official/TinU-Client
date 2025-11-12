import ky, { type Options } from "ky";

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
        if (response.status === 401) {
          try {
            const newToken = await reissueToken();
            accessTokenStore.set(newToken);
            return baseApiClient(request);
          } catch (error) {
            accessTokenStore.clear();
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }
            throw error;
          }
        }

        return response;
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
