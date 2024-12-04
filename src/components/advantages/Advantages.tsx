import thopyIcon from '../icons/trophy.svg';
import guaranteeIcon from '../icons/guarantee.svg';
import shippingIcon from '../icons/shipping.svg';
import customerSupportIcon from '../icons/customer-support.svg';
import styles from './Advantages.module.css'

export const Advantages = () => {
  return (
    <ul className={styles.advantagesList}>
      <article className={styles.advantagesList}>
        <span className={styles.icon}>
          <img src={thopyIcon} alt="Thopy icon" />
        </span>

        <div className={styles.texts}>
          <h2 className={styles.title}>High Quality</h2>

          <span className={styles.legend}>crafted from top materials</span>
        </div>
      </article>
      
      <article className={styles.advantagesList}>
        <span className={styles.icon}>
          <img src={guaranteeIcon} alt="Guarantee icon" />
        </span>

        <div className={styles.texts}>
          <h2 className={styles.title}>Warranty Protection</h2>

          <span className={styles.legend}>Over 2 years</span>
        </div>
      </article>
      
      <article className={styles.advantagesList}>
        <span className={styles.icon}>
          <img src={shippingIcon} alt="Shipping icon" />
        </span>

        <div className={styles.texts}>
          <h2 className={styles.title}>Free Shipping</h2>

          <span className={styles.legend}>Order over 150 $</span>
        </div>
      </article>
      
      <article className={styles.advantagesList}>
        <span className={styles.icon}>
          <img src={customerSupportIcon} alt="Customer support icon" />
        </span>

        <div className={styles.texts}>
          <h2 className={styles.title}>24 / 7 Support</h2>

          <span className={styles.legend}>Dedicated support</span>
        </div>
      </article>
    </ul>
  )
}
