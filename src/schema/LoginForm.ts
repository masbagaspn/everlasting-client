import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(8, { message: "Username min. 8 characters" }),
  password: z.string().min(8, { message: "Password min. 8 characters" }),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
