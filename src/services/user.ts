import { userApi } from "@/lib/axiosInstance";

export const getUser = async () => {
  const response = await userApi.get("/users");
  return response.data;
};
