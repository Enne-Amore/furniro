import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formCheckout, FormCheckout } from "../schema/FormCheckout";

export const useFormsCheckout = () => {
  const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormCheckout>({
    resolver: zodResolver(formCheckout)
  })

  return {register, setValue, handleSubmit, errors}
}
