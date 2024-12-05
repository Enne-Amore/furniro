import styles from './CartTotals.module.css'

export const CartTotals = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart Totals</h1>

      <div className={styles.infoContainer}>
        <strong className={styles.strong}>Subtotal</strong>
        
        <span className={styles.data}>Rs. 250,000.00</span>
      </div>

      <div className={styles.infoContainer}>
        <strong className={styles.strong}>Total</strong>
        
        <span className={styles.data}>Rs. 250,000.00</span>
      </div>

      <button type="button" className={styles.btn}>Check Out</button>
    </div>
  )
}
