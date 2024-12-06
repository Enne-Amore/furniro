import { z } from "zod";

export const formLogin = z.object({
  email: z
    .string()
    .min(1, "Must have at least 1 character!")
    .email("Must be a valid email!"),
  password: z
    .string()
    .min(8, "Must have at least 8 character!")
});

export type FormLogin = z.infer<typeof formLogin>
