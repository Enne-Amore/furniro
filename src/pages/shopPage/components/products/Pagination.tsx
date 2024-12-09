import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  return (
    <div className={styles.btnList}>
      <Link to={"/shop/1"} className={`${styles.numBtn} ${styles.activeBtn}`}>
        1
      </Link>

      <Link to={"/shop/2"} className={`${styles.numBtn}`}>
        2
      </Link>

      <Link to={"/shop/3"} className={`${styles.numBtn}`}>
        3
      </Link>

      <button type="button" className={styles.nextBtn}>
        Next
      </button>
    </div>
  );
};
