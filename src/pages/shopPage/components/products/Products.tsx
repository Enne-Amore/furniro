import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../../../../types/ProductType";
import { productFetch } from "../../../../api/config";
import { ViewList } from "../../types/ViewList";
import { Loading } from "../../../../components/loading/Loading";
import shareIcon from "../../../../assets/share.svg";
import compareIcon from "../../../../assets/compare.svg";
import heartIcon from "../../../../assets/heart.svg";
import styles from "./Products.module.css";

export const Products = ({ show, startingPosition }: ViewList) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await productFetch.get("/products");
      const data: ProductType[] = response.data;
      setProducts(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.productsList}>
        {isLoading ? (
          <Loading />
        ) : (
          products.slice(startingPosition || 0, (startingPosition || 0) + show).map((product) => (
            <Link to={`/${product.id}`} key={product.id}>
              <article className={styles.product}>
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
                      Rp {product.currentPrice}
                    </span>
                
                    {product.oldPrice && (
                      <span className={styles.oldPrice}>Rp {product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
};
