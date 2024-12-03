import styles from "./Range.module.css";
import diningImg from "../../../assets/dining-range.png";
import livingImg from "../../../assets/living-range.png";
import bedroomImg from "../../../assets/bedroom-range.png";

const Range = () => {
  return (
    <section className={styles.rangeContainer}>
      <h1 className={styles.title}>Browse The Range</h1>

      <span className={styles.legendTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>

      <ul className={styles.imgList}>
        <figure className={styles.comfortable}>
          <img
            src={diningImg}
            alt="Dining illustration"
            className={styles.img}
          />

          <figcaption className={styles.legendImg}>Dining</figcaption>
        </figure>

        <figure className={styles.comfortable}>
          <img
            src={livingImg}
            alt="Living illustration"
            className={styles.img}
          />

          <figcaption className={styles.legendImg}>Living</figcaption>
        </figure>

        <figure className={styles.comfortable}>
          <img
            src={bedroomImg}
            alt="Bedroom illustration"
            className={styles.img}
          />

          <figcaption className={styles.legendImg}>Bedroom</figcaption>
        </figure>
      </ul>
    </section>
  );
};

export default Range;
