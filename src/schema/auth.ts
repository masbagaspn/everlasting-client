import { z } from "zod";

export const LoginCredentials = z.object({
  username: z.string().min(8, { message: "Username min. 8 characters" }),
  password: z.string().min(8, { message: "Password min. 8 characters" }),
});

export type LoginCredentialsType = z.infer<typeof LoginCredentials>;

export const RegisterCredentials = z.object({
  username: z.string().min(8, { message: "Username min. 8 characters" }),
  password: z.string().min(8, { message: "Password min. 8 characters" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  roleId: z.number(),
});

export type RegisterCredentialsType = z.infer<typeof RegisterCredentials>;
