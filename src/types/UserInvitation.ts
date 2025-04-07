import { User } from "@/types/User";

export type UserInvitation = {
  name: string;
  weddingDate: Date;
  invitationStatus: "inactive" | "active" | "expired";
  user: User;
};
