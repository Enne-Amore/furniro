import localIcon from '../icons/local.svg';
import phoneIcon from '../icons/phone.svg';
import clockIcon from '../icons/clock.svg';
import styles from './Info.module.css'

export const Info = () => {
  return (
    <ul className={styles.container}>
      <article className={styles.info}>
        <img src={localIcon} alt="Local icon" />

        <div className={`${styles.texts} ${styles.address}`}>
          <h2 className={styles.title}>Address</h2>
          
          <span className={styles.data}>236 5th SE Avenue, New York NY10000, United States</span>
        </div>
      </article>
      
      <article className={styles.info}>
        <img src={phoneIcon} alt="Phone icon" />

        <div className={`${styles.texts} ${styles.phone}`}>
          <h2 className={styles.title}>Phone</h2>
          
          <span className={styles.data}>Mobile: +(84) 546-6789</span>
          
          <span className={styles.data}>Hotline: +(84) 456-6789</span>
        </div>
      </article>
      
      <article className={styles.info}>
        <img src={clockIcon} alt="Clock icon" />

        <div className={`${styles.texts} ${styles.time}`}>
          <h2 className={styles.title}>Working Time</h2>
          
          <span className={styles.data}>Monday-Friday: 9:00 - 22:00</span>
          
          <span className={styles.data}>Saturday-Sunday: 9:00 - 21:00</span>
        </div>
      </article>
    </ul>
  )
}
