import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/ProductType";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./CartTotals.module.css";

export const CartTotals = ({
  products
}: {
  products: ProductType[];
}) => {
  const navigate = useNavigate();

  const subtotal: number = products.reduce(
    (subtotal, product) => subtotal + Number(product.currentPrice),
    0
  )

  const total: number = products.reduce(
    (total, product) => total + Number(product.currentPrice) * Number(product.qtd),
    0
  );

  const handleCheckout = () => {
    if(products.length > 0) {
        toast.success(`Success!`, {
          position: "top-center"
        })
        
        setTimeout(() => {
          navigate('/checkout', {state: {products}})
        }, 1000)

      } else {
        toast.error(`No purchases in the cart`, {
          position: "top-center"
        })
      }
  }

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

      <button type="button" onClick={handleCheckout} className={styles.btn}>
        Check Out
      </button>

      <ToastContainer />
    </div>
  );
};
