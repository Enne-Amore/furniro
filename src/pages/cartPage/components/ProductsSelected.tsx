import itemImg from '../../../assets/asgaard-sofa-cart.png';
import deleteIcon from '../icons/remove.svg';
import styles from './ProductsSelected.module.css';

export const ProductsSelected = () => {
  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.headerRowContainer}>
          <th className={styles.imgContainer}>{/* img */}</th>

          <th className={styles.title}>Product</th>

          <th className={styles.title}>Price</th>

          <th className={`${styles.titleQtd}`}>Quantity</th>

          <th className={styles.title}>Subtotal</th>

          <th className={styles.iconContainer}>{/* remove option */}</th>
        </tr>
      </thead>

      <tbody>
        <tr className={styles.bodyRowContainer}>
          <td className={styles.imgContainer}>
            <img src={itemImg} alt="Item selected" />
          </td>

          <td className={styles.data}>
            Asgaard sofa
          </td>

          <td className={styles.data}>
            Rs. 250,000.00
          </td>

          <td className={styles.inputContainer}>
            <input type="number" id="qtd" defaultValue={1} min={1} />
          </td>
            
          <td className={styles.dataSubtotal}>
            Rs. 250,000.00
          </td>
            
          <td className={styles.iconContainer}>
            <img src={deleteIcon} alt="Delete icon" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
