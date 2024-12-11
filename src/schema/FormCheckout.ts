import { z } from "zod";

export const formCheckout = z.object({
  firstName: z.string().min(1, "Must have at least 1 character!"),
  lastName: z.string().min(1, "Must have at least 1 character!"),
  company: z.string(),
  zipCode: z.string().min(5, "Zip Code must be at least 5 characters!").max(9, "No more than 9 characters are allowed!"),
  country: z.string().min(1, "Must have at least 1 character!"),
  street: z.string().min(1, "Must have at least 1 character!"),
  city: z.string().min(1, "Must have at least 1 character!"),
  province: z.string().min(1, "Must have at least 1 character!"),
  addAddress: z.string(),
  email: z
    .string()
    .min(1, "Must have at least 1 character!")
    .email("Must be a valid email!"),
  addInfo: z.string(),
});

export type FormCheckout = z.infer<typeof formCheckout>;
