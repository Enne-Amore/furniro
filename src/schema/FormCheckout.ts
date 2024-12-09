import { z } from "zod";

export const formCheckout = z.object({
  firstName: z.string().min(1, "Must have at least 1 character!"),
  lastName: z.string().min(1, "Must have at least 1 character!"),
  zipCode: z.string().min(1, "Must have at least 1 character!"),
  country: z.string().min(1, "Must have at least 1 character!"),
  street: z.string().min(1, "Must have at least 1 character!"),
  city: z.string().min(1, "Must have at least 1 character!"),
  province: z.string().min(1, "Must have at least 1 character!"),
  email: z
    .string()
    .min(1, "Must have at least 1 character!")
    .email("Must be a valid email!"),
});

export type FormCheckout = z.infer<typeof formCheckout>;
