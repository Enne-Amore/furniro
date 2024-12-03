import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Help = () => {
  return (
    <div className={styles.help}>
      <h2 className={styles.secundaryTitle}>Help</h2>

      <ul className={styles.linksList}>
        <Link to={"/"} className={styles.link}>
          Payment Options
        </Link>
        <Link to={"/"} className={styles.link}>
          Returns
        </Link>
        <Link to={"/"} className={styles.link}>
          Privacy Policies
        </Link>
      </ul>
    </div>
  );
};
