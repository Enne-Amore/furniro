import styles from './AllTables.module.css'
import { CartTotals } from './CartTotals'
import { ProductsSelected } from './ProductsSelected'

export const AllTables = () => {
  return (
    <section className={styles.container}>
      <ProductsSelected />

      <CartTotals />
    </section>
  )
}
