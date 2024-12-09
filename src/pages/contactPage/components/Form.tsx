import { useNavigate } from "react-router-dom";
import { useFormsContact } from "../../../hooks/UseFormsContact";
import { FormContact } from "../../../schema/FormContact";
import styles from "./Form.module.css";

export const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useFormsContact();

  const onSubmit = (data: FormContact) => {
    console.table(data);
    
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Your name
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Abc"
            className={styles.input}
          />

          {errors.name && (
            <span className={styles.errors}>{errors.name?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Abc@def.com"
            className={styles.input}
          />

          {errors.email && (
            <span className={styles.errors}>{errors.email?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>

        <input
          type="text"
          id="subject"
          {...register("subject")}
          placeholder="This is an optional"
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>

        <div className={styles.withErrorsContainer}>
          <textarea
            id="message"
            {...register("message")}
            maxLength={300}
            placeholder="Hi! i’d like to ask about"
            className={`${styles.input} h-28 resize-none`}
          />

          {errors.message && (
            <span className={styles.errors}>{errors.message?.message}</span>
          )}
        </div>
      </div>

      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};
