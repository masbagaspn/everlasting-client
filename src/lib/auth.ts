export function getAccessToken(): string | null {
  return sessionStorage.getItem("access_token");
}

export function setAccessToken(value: string) {
  return sessionStorage.setItem("access_token", value);
}

export function removeAccessToken() {
  return sessionStorage.removeItem("access_token");
}

export function isAuthenticated(): boolean {
  return getAccessToken() !== null;
}
