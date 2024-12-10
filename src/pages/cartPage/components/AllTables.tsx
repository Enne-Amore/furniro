import { useEffect, useState } from 'react';
import { CartTotals } from './CartTotals'
import { ProductsSelected } from './ProductsSelected'
import { productFetch } from '../../../api/config';
import { ProductType } from '../../../types/ProductType';
import styles from './AllTables.module.css'

export const AllTables = () => {
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
  }, [products]);

  return (
    <section className={styles.container}>
      <ProductsSelected products={products} setProducts={setProducts} />

      <CartTotals products={products} />
    </section>
  )
}
