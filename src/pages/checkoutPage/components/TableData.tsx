import styles from "./TableData.module.css";

export const TableData = () => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th className={styles.title}>Product</th>

          <th className={styles.title}>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={styles.nameProduct}>
            Asgaard sofa <strong>x 1</strong>
          </td>

          <td className={styles.price}>Rs. 250,000.00</td>
        </tr>

        <tr>
          <td className={styles.attribute}>Subtotal</td>

          <td className={styles.price}>Rs. 250,000.00</td>
        </tr>

        <tr>
          <td className={styles.attribute}>Total</td>

          <td className={styles.finalPrice}>Rs. 250,000.00</td>
        </tr>
      </tbody>
    </table>
  );
};
