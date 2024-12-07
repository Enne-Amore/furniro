import exampleImg from '../../../assets/example-img.png';
import styles from './ImgsProduct.module.css'

export const ImgsProduct = () => {
  return (
    <article className={styles.container}>
      <ul className={styles.imgList}>
        <figure className={styles.thumbnailImg}>
          <img src={exampleImg} alt="" />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img src={exampleImg} alt="" />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img src={exampleImg} alt="" />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img src={exampleImg} alt="" />
        </figure>
      </ul>

      <figure className={styles.imgSelected}>
        <img src={exampleImg} alt="" />
      </figure>
    </article>
  )
}
