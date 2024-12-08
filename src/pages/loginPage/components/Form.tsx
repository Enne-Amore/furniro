import { useNavigate } from "react-router-dom";
import { useFormsLogin } from "../../../hooks/UseFormsLogin";
import { FormLogin } from "../../../schema/FormLogin";
import styles from "./Form.module.css";

export const Form = () => {
  const { register, handleSubmit, errors } = useFormsLogin();
  const navigate = useNavigate();

  const onSubmit = (data: FormLogin) => {
    navigate('/shop');
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Login Information</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>

          <div className={styles.withErrorsContainer}>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter your email address"
              className={styles.input}
            />
            
            {errors.email && (
              <span className={styles.errors}>{errors.email?.message}</span>
            )}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>

          <div className={styles.withErrorsContainer}>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              className={styles.input}
            />

            {errors.password && (
                <span className={styles.errors}>{errors.password?.message}</span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </section>
  );
};
