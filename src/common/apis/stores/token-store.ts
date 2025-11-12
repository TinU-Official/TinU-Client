const SESSION_STORAGE_KEY = "ACCESS_TOKEN";

export const accessTokenStore = {
  get: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(SESSION_STORAGE_KEY);
  },
  set: (atk: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(SESSION_STORAGE_KEY, atk);
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  },
};
