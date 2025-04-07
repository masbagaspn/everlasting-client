import { api } from "@/lib/axiosInstance";
import { LoginCredentialsType, RegisterCredentialsType } from "@/schema/auth";

export const login = async (credentials: LoginCredentialsType) => {
  const response = await api.post("/auth/login", credentials);

  return response.data;
};

export const register = async (payload: RegisterCredentialsType) => {
  const response = await api.post("/auth/register", payload);

  return response.data;
};
