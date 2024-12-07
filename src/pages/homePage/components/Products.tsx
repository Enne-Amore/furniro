import { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import { productFetch } from "../../../api/config";
import shareIcon from "../../../assets/share.svg";
import compareIcon from "../../../assets/compare.svg";
import heartIcon from "../../../assets/heart.svg";
import styles from "./Products.module.css";
import { Loading } from "../../../components/loading/Loading";

export const Products = () => {
  const [show, setShow] = useState<number>(8);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await productFetch.get("/products");
      const data: Product[] = response.data;
      setProducts(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  const showMore = () => {
    setShow(12);
  };

  return (
    <section className={styles.productsContainer}>
      <h1 className={styles.title}>Our Products</h1>

      <ul className={styles.productsList}>
        {products.length === 0 ? (
          <Loading />
        ) : (
          products.slice(0, show).map((product) => (
            <article key={product.id} className={styles.product}>
              {product.discount && (
                <span className={styles.detail}>{product.discount}%</span>
              )}

              <figure className={styles.productImg}>
                <img
                  src={require(`../../../assets/${product.img
                    .split("/")
                    .pop()}`)}
                  alt={product.altImg}
                />
              </figure>

              <div className={styles.overlay}>
                <button type="button" className={styles.addToCart}>
                  Add to cart
                </button>

                <div className={styles.options}>
                  <button type="button" className={styles.op}>
                    <figure>
                      <img src={shareIcon} alt="Share icon" />
                    </figure>

                    <span className={styles.label}>Share</span>
                  </button>

                  <button type="button" className={styles.op}>
                    <figure>
                      <img src={compareIcon} alt="Compare icon" />
                    </figure>

                    <span className={styles.label}>Compare</span>
                  </button>

                  <button type="button" className={styles.op}>
                    <figure>
                      <img src={heartIcon} alt="Heart icon" />
                    </figure>

                    <span className={styles.label}>Like</span>
                  </button>
                </div>
              </div>

              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>

                <h3 className={styles.legend}>{product.legend}</h3>

                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>
                    {product.currentPrice}
                  </span>

                  {product.oldPrice && (
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </ul>

      {show === 8 && (
        <button type="button" onClick={showMore} className={styles.btn}>
          Show More
        </button>
      )}
    </section>
  );
};
