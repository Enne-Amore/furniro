import { z } from "zod";

export const formContact = z.object({
  name: z.string().min(1, "Must have at least 1 character!"),
  email: z
    .string()
    .min(1, "Must have at least 1 character!")
    .email("Must be a valid email!"),
  subject: z.string(),
  message: z.string().min(1, "Must have at least 1 character!"),
});

export type FormContact = z.infer<typeof formContact>;
