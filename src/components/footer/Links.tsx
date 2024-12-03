import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Links = () => {
  return (
    <div className={styles.links}>
      <h2 className={styles.secundaryTitle}>Links</h2>

      <ul className={styles.linksList}>
        <Link to={"/"} className={styles.link}>
          Home
        </Link>

        <Link to={"/shop"} className={styles.link}>
          Shop
        </Link>

        <Link to={"/about"} className={styles.link}>
          About
        </Link>

        <Link to={"/contact"} className={styles.link}>
          Contact
        </Link>
      </ul>
    </div>
  );
};
