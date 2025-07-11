import { Inputs } from "./Inputs";
import { PurchaseDetails } from "./PurchaseDetails";
import { useFormsCheckout } from "../../../hooks/UseFormsCheckout";
import { FormCheckout } from "../../../schema/FormCheckout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./GeneralForm.module.css";

export const GeneralForm = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, errors } = useFormsCheckout();

  const onSubmit = (data: FormCheckout) => {
    toast.success('Message sent successfully')

    setTimeout(() => {
      navigate("/");
    }, 1500)
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Billing details</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.generalFormContainer}
      >
        <Inputs register={register} setValue={setValue} errors={errors} />

        <PurchaseDetails />
      </form>
    </section>
  );
};
