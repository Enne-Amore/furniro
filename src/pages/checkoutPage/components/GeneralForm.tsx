import { Inputs } from "./Inputs";
import { PurchaseDetails } from "./PurchaseDetails";
import { useFormsCheckout } from "../../../hooks/UseFormsCheckout";
import { FormCheckout } from "../../../schema/FormCheckout";
import styles from "./GeneralForm.module.css";

export const GeneralForm = () => {
  const { handleSubmit } = useFormsCheckout();

  const onSubmit = (data: FormCheckout) => {};

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Billing details</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.generalFormContainer}
      >
        <Inputs />

        <PurchaseDetails />
      </form>
    </section>
  );
};
