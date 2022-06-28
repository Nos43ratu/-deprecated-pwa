const tokenKey = "authToken";

export const getToken = (): Record<
  "accessToken" | "refreshToken",
  string
> | null =>
  JSON.parse(window.localStorage.getItem("authToken") as string) || null;

export const isLoggedIn = (): boolean => !!getToken();

export const removeToken = (): void | null => {
  getToken() && window.localStorage.removeItem(tokenKey);
};

export const setToken = (token: {
  accessToken?: string;
  refreshToken?: string;
}): void => {
  window.localStorage.setItem(
    tokenKey,
    JSON.stringify({
      ...token,
    })
  );
};
