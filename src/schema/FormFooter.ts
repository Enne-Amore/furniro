import { z } from "zod";

export const formFooter = z.object({
  email: z
    .string()
    .min(1, "Must have at least 1 character!")
    .email("Must be a valid email!"),
});

export type FormFooter = z.infer<typeof formFooter>
