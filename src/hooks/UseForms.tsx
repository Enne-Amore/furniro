import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formFooter, FormFooter } from "../schema/FormFooter";

export const useForms = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormFooter>({
    resolver: zodResolver(formFooter)
  })

  return {register, handleSubmit, errors}
}
