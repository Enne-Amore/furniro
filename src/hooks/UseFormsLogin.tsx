import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormLogin, formLogin } from "../schema/FormLogin";

export const useFormsLogin = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormLogin>({
    resolver: zodResolver(formLogin)
  })

  return {register, handleSubmit, errors}
}
