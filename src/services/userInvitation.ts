import { userApi } from "@/lib/axiosInstance";

export const getUserInvitations = async () => {
  const response = await userApi.get("/user-invitations");
  return response.data;
};
