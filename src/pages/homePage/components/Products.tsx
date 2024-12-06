import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Product } from "../../../types/Product";
import { productFetch } from "../../../api/config";

export const Products = () => {
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
    <section className={styles.productsContainer}>
      <h1 className={styles.title}>Our Products</h1>

      <ul className={styles.productsList}>
        {products.slice(0, 8).map((product) => (
            <article key={product.id} className={styles.product}>
              {product.discount && <span className={styles.detail}>{product.discount}%</span>}

              <figure className={styles.productImg}>
                <img src={require(`../../../assets/${product.img.split('/').pop()}`)} alt={product.altImg} />
              </figure>

              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>

                <h3 className={styles.legend}>{product.legend}</h3>

                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>{product.currentPrice}</span>

                  {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
                </div>
              </div>
            </article>
          ))}
      </ul>

      <button type="button" className={styles.btn}>
        Show More
      </button>
    </section>
  );
};
