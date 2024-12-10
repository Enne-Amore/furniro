import { ProductType } from "../../../types/ProductType";
import { productFetch } from "../../../api/config";
import { Dispatch, SetStateAction } from "react";
import itemImg from "../../../assets/asgaard-sofa-cart.png";
import deleteIcon from "../icons/remove.svg";
import styles from "./ProductsSelected.module.css";

export const ProductsSelected = ({
  products,
  setProducts,
}: {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}) => {
  const deletePurchase = async (id: string) => {
    await productFetch.delete(`/cart/${id}`);

    const filteredProducts = products.filter((product) => product.id !== id);

    setProducts(filteredProducts);
  };

  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.headerRowContainer}>
          <th className={styles.imgContainer}>{/* img */}</th>

          <th className={styles.title}>Product</th>

          <th className={styles.title}>Price</th>

          <th className={`${styles.titleQtd}`}>Quantity</th>

          <th className={styles.title}>Subtotal</th>

          <th className={styles.iconContainer}>{/* remove option */}</th>
        </tr>
      </thead>

      <tbody>
        {products &&
          products.map((product) => (
            <tr className={styles.bodyRowContainer}>
              <td className={styles.imgContainer}>
                <img
                  src={`../../${product.img}` || itemImg}
                  alt="Item selected"
                  onError={(e) => (e.currentTarget.src = itemImg)}
                />
              </td>

              <td className={styles.data}>{product.name}</td>

              <td className={styles.data}>Rs. {product.currentPrice}</td>

              <td className={styles.inputContainer}>
                <input
                  type="number"
                  id="qtd"
                  defaultValue={product.qtd}
                  min={1}
                />
              </td>

              <td className={styles.dataSubtotal}>
                Rs. {Number(product.currentPrice) * Number(product.qtd)}
              </td>

              <td className={styles.iconContainer}>
                <img
                  src={deleteIcon}
                  alt="Delete icon"
                  onClick={() => deletePurchase(product.id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
