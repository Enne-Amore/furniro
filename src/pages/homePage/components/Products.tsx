import styles from './Products.module.css';
import img from '../../../assets/syltherine-item.png'

export const Products = () => {
  return (
    <section className={styles.productsContainer}>
      <h1 className={styles.title}>Our Products</h1>

      <ul className={styles.productsList}>
        <article className={styles.product}>
            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <h2 className={styles.name}>Syltherine</h2>

            <h3 className={styles.legend}>Stylish cafe chair</h3>

            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>Rp 2.500.000</span>

              <span className={styles.oldPrice}>Rp 3.500.000</span>
            </div>
        </article>
        
        <article className={styles.product}>
            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <h2 className={styles.name}>Syltherine</h2>

            <h3 className={styles.legend}>Stylish cafe chair</h3>

            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>Rp 2.500.000</span>

              <span className={styles.oldPrice}>Rp 3.500.000</span>
            </div>
        </article>
        
        <article className={styles.product}>
            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <h2 className={styles.name}>Syltherine</h2>

            <h3 className={styles.legend}>Stylish cafe chair</h3>

            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>Rp 2.500.000</span>

              <span className={styles.oldPrice}>Rp 3.500.000</span>
            </div>
        </article>
        
        <article className={styles.product}>
            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <h2 className={styles.name}>Syltherine</h2>

            <h3 className={styles.legend}>Stylish cafe chair</h3>

            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>Rp 2.500.000</span>

              <span className={styles.oldPrice}>Rp 3.500.000</span>
            </div>
        </article>
      </ul>

      <button type='button' className={styles.btn}>Show More</button>
    </section>
  )
}
