import { Link } from "react-router-dom";
import styles from "./WherePage.module.css";

export const WherePage = () => {
  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.wayName}>home</Link>
      
      <strong className={styles.greaterSign}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
        </svg>
      </strong>
      
      <Link to={'/shop'} className={styles.wayName}>shop</Link>
      
      <strong className={styles.greaterSign}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
        </svg>
      </strong>
      
      <strong className={styles.productName}>Asgaard sofa</strong>
    </div>
  );
};
