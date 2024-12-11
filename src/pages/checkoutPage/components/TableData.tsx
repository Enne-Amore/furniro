import { useEffect, useState } from "react";
import { ProductType } from "../../../types/ProductType";
import { productFetch } from "../../../api/config";
import styles from "./TableData.module.css";

export const TableData = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const response = await productFetch.get("/cart");
      const data: ProductType[] = response.data;
      setProducts(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const subtotal: number = products.reduce(
    (subtotal, product) => subtotal + Number(product.currentPrice),
    0
  );

  const total: number = products.reduce(
    (total, product) =>
      total + Number(product.currentPrice) * Number(product.qtd),
    0
  );

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th className={`${styles.title} ${styles.product}`}>Product</th>

          <th className={`${styles.title} ${styles.subtotal}`}>Subtotal</th>
        </tr>
      </thead>

      <tbody className={styles.bodyTable}>
        {products && (
          products.map((product) => (
            <tr>
              <td className={styles.nameProduct}>
                {product.name} <strong>x {product.qtd}</strong>
              </td>

              <td className={`${styles.price} ${styles.subtotal}`}>Rs. {product.currentPrice}</td>
            </tr>
          ))
        )}

        <tr>
          <td className={styles.attribute}>Subtotal</td>

          <td className={`${styles.price} ${styles.subtotal}`}>Rs. {subtotal}</td>
        </tr>

        <tr>
          <td className={styles.attribute}>Total</td>

          <td className={`${styles.finalPrice} ${styles.subtotal}`}>Rs. {total}</td>
        </tr>
      </tbody>
    </table>
  );
};
