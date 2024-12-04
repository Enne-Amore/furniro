import { Link } from "react-router-dom";
import roomImg from "../../../assets/bed-room-inspiration.png";
import styles from "./RoomsInspiration.module.css";

export const RoomsInspiration = () => {
  return (
    <section className={styles.roomsContainer}>
      <div className={styles.texts}>
        <h1 className={styles.title}>50+ Beautiful rooms inspiration</h1>

        <p className={styles.paragraph}>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>

        <Link to={"/shop"} className={styles.link}>
          Explore More
        </Link>
      </div>

      <div className={styles.roomsListContainer}>
        <ul className={styles.roomsList}>
          <article className={styles.room}>
            <figure className={styles.firstRoomImg}>
              <img src={roomImg} alt="Room inspiration" />
            </figure>

            <div className={styles.infoContainer}>
              <div className={styles.infoRoom}>
                <span className={styles.nameRoom}>01 - Bed Room</span>

                <h2 className={styles.titleRoom}>Inner Peace</h2>
              </div>

              <button type="button" className={styles.nextBtn}>
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </article>

          <article className={styles.room}>
            <figure className={styles.roomImg}>
              <img src={roomImg} alt="Next room" />
            </figure>

            <div className={styles.btnList}>
              <button type="button" className={`${styles.btn} ${styles.activeBtn}`}></button>

              <button type="button" className={styles.btn}></button>

              <button type="button" className={styles.btn}></button>

              <button type="button" className={styles.btn}></button>
            </div>
          </article>

          <figure className={styles.roomImg}>
            <img src={roomImg} alt="Next room" />
          </figure>

          <figure className={styles.roomImg}>
            <img src={roomImg} alt="Next room" />
          </figure>
        </ul>
      </div>
    </section>
  );
};
