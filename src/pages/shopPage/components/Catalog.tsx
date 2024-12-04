import { Options } from './products/Options'
import { Products } from './products/Products'
import styles from './Catalog.module.css'

export const Catalog = () => {
  return (
    <section className={styles.container}>
      <Options />

      <Products />
    </section>
  )
}
