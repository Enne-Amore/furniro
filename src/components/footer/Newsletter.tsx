import { toast } from "react-toastify";
import { useFormsFooter } from "../../hooks/UseFormsFooter";
import { FormFooter } from "../../schema/FormFooter";
import styles from "./Footer.module.css";

export const Newsletter = () => {
  const { register, handleSubmit, errors } = useFormsFooter();

  const onSubmit = (data: FormFooter) => {
    toast.success('Email sent successfully', {
      position: "top-center",
      autoClose: 1500
    })
  };

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
