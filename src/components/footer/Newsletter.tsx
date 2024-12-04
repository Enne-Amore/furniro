import { useForms } from "../../hooks/UseForms";
import { FormFooter } from "../../schema/FormFooter";
import styles from "./Footer.module.css";

export const Newsletter = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormFooter) => {};

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.secundaryTitle}>Newsletter</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.input}>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter Your Email Address"
          />

          {errors.email && (
            <span className={styles.errors}>{errors.email?.message}</span>
          )}
        </div>

        <button type="submit">subscribe</button>
      </form>
    </div>
  );
};
