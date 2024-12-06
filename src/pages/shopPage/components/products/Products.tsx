import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import { productFetch } from "../../../../api/config";
import { ViewList } from "../../types/ViewList";
import styles from "./Products.module.css";

export const Products = ({ show }: ViewList) => {
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

  return (
    <div className={styles.container}>
      <ul className={styles.productsList}>
        {products.slice(0, show).map((product) => (
          <article key={product.id} className={styles.product}>
            {product.discount && (
              <span className={styles.detail}>{product.discount}%</span>
            )}

            <figure className={styles.productImg}>
              <img
                src={require(`../../../../assets/${product.img
                  .split("/")
                  .pop()}`)}
                alt={product.altImg}
              />
            </figure>

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
        ))}
      </ul>

      <div className={styles.btnList}>
        <Link to={"/shop/1"} className={`${styles.numBtn} ${styles.activeBtn}`}>
          1
        </Link>

        <Link to={"/shop/2"} className={`${styles.numBtn}`}>
          2
        </Link>

        <Link to={"/shop/3"} className={`${styles.numBtn}`}>
          3
        </Link>

        <button type="button" className={styles.nextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};
