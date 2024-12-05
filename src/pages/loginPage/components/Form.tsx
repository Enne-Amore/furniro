import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.btn}>Login</button>
    </form>
  );
};
