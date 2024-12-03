import styles from "./Footer.module.css";

export const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.secundaryTitle}>Newsletter</h2>

      <div className={styles.form}>
        <input type="email" id="email" placeholder="Enter Your Email Address" />

        <button type="button">subscribe</button>
      </div>
    </div>
  );
};
