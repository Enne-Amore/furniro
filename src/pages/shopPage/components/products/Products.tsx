import { Link } from 'react-router-dom'
import img from '../../../../assets/syltherine-item.png'
import styles from './Products.module.css'

export const Products = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.productsList}>
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
        
        <article className={styles.product}>
            <span className={styles.detail}>-30%</span>

            <figure className={styles.productImg}>
                <img src={img} alt="product" />
            </figure>

            <div className={styles.info}>
              <h2 className={styles.name}>Syltherine</h2>

              <h3 className={styles.legend}>Stylish cafe chair</h3>

              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>Rp 2.500.000</span>

                <span className={styles.oldPrice}>Rp 3.500.000</span>
              </div>
            </div>
        </article>
      </ul>

      <div className={styles.btnList}>
        <Link to={'/shop/1'} className={`${styles.numBtn} ${styles.activeBtn}`}>1</Link>
        
        <Link to={'/shop/2'} className={`${styles.numBtn}`}>2</Link>
        
        <Link to={'/shop/3'} className={`${styles.numBtn}`}>3</Link>
        
        <button type="button" className={styles.nextBtn}>Next</button>
      </div>
    </div>
  )
}
