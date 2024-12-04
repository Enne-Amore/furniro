import styles from './Options.module.css'

export const Options = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSide}>
        <button type="button" className={styles.container}>
          <span className={`${styles.icon}`}></span>

          <span className={styles.label}>Filter</span>
        </button>

        <button type="button" className={`${styles.icon}`}></button>

        <button type="button" className={`${styles.icon}`}></button>

        <span className={styles.line}>|</span>

        <span className={styles.infoAdd}>Showing 1–16 of 32 results</span>
      </div>

      <div className={styles.secondSide}>
        <div>
          <span>Show</span>

          <input type="number" id="show" />
        </div>

        <div>
          <span>Short by</span>

          <input type="text" id="shortBuy" value={'default'} />
        </div>
      </div>
    </div>
  )
}
