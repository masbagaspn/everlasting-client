// public id!: string;
//   public name!: string;
//   public weddingDate!: Date;
//   public invitationStatus!: "inactive" | "active" | "expired";
//   public userId!: string;

import { z } from "zod";

const invitationStatus = ["inactive", "active", "expired"] as const;

export const UserInvitationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  weddingDate: z.date(),
  invitationStatus: z.enum(invitationStatus),
});

export type UserInvitationSchemaType = z.infer<typeof UserInvitationSchema>;
