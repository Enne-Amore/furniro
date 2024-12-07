import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formContact, FormContact } from "../schema/FormContact";

export const useFormsContact = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormContact>({
    resolver: zodResolver(formContact)
  })

  return {register, handleSubmit, errors}
}
