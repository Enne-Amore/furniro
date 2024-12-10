import { Link } from "react-router-dom";
import { ProductType } from "../../../types/ProductType";
import styles from "./CartTotals.module.css";

export const CartTotals = ({
  products
}: {
  products: ProductType[];
}) => {
  const subtotal: number = products.reduce(
    (subtotal, product) => subtotal + Number(product.currentPrice),
    0
  )

  const total: number = products.reduce(
    (total, product) => total + Number(product.currentPrice) * Number(product.qtd),
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart Totals</h1>

      <div className={styles.infoContainer}>
        <strong className={styles.strong}>Subtotal</strong>

        <span className={styles.dataSubtotal}>Rs. {subtotal}</span>
      </div>

      <div className={styles.infoContainer}>
        <strong className={styles.strong}>Total</strong>

        <span className={styles.dataTotal}>Rs. {total}</span>
      </div>

      <Link to={"/checkout"} className={styles.btn}>
        Check Out
      </Link>
    </div>
  );
};
