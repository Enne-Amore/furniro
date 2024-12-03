import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section className={styles.containerIntro}>
      <article className={styles.intro}>
        <span className={styles.detail}>New Arrival</span>

        <h1 className={styles.title}>Discover Our New Collection</h1>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <Link to={"/shop"} className={styles.link}>
          buy now
        </Link>
      </article>
    </section>
  );
};
