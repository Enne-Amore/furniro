import styles from "./WherePage.module.css";

export const WherePage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.wayName}>home</span>
      
      <strong className={styles.greaterSign}>{">"}</strong>
      
      <span className={styles.wayName}>shop</span>
      
      <strong className={styles.greaterSign}>{">"}</strong> |
      
      <strong className={styles.productName}>Asgaard sofa</strong>
    </div>
  );
};
