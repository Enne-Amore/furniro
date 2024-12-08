import styles from "./TableData.module.css";

export const TableData = () => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th className={`${styles.title} ${styles.product}`}>Product</th>

          <th className={`${styles.title} ${styles.subtotal}`}>Subtotal</th>
        </tr>
      </thead>

      <tbody className={styles.bodyTable}>
        <tr>
          <td className={styles.nameProduct}>
            Asgaard sofa <strong>x 1</strong>
          </td>

          <td className={`${styles.price} ${styles.subtotal}`}>Rs. 250,000.00</td>
        </tr>

        <tr>
          <td className={styles.attribute}>Subtotal</td>

          <td className={`${styles.price} ${styles.subtotal}`}>Rs. 250,000.00</td>
        </tr>

        <tr>
          <td className={styles.attribute}>Total</td>

          <td className={`${styles.finalPrice} ${styles.subtotal}`}>Rs. 250,000.00</td>
        </tr>
      </tbody>
    </table>
  );
};
