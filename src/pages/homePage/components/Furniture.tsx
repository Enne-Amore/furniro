import styles from './Furniture.module.css'
import furnitureImg from '../../../assets/furnitures.png'

export const Furniture = () => {
  return (
    <section className={styles.furnitureContainer}>
      <span className={styles.legend}>Share your setup with</span>

      <h1 className={styles.title}>#FuniroFurniture</h1>

      <figure className={styles.furnitureImg}>
        <img src={furnitureImg} alt="Furnitures" />
      </figure>
    </section>
  )
}
