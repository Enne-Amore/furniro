import { ImgsProduct } from './ImgsProduct'
import { InfoProduct } from './InfoProduct'
import { Description } from './Description'
import styles from './Product.module.css'

export const Product = () => {
  return (
    <section className={styles.container}>
      <div>
        <ImgsProduct />

        <InfoProduct />
      </div>

      <hr />

      <Description />
    </section>
  )
}
