import { Product } from './components/Product'
import { RelatedProducts } from './components/RelatedProducts'
import { WherePage } from './components/WherePage'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.container}>
      <WherePage />

      <Product />      

      <RelatedProducts />
    </main>
  )
}
