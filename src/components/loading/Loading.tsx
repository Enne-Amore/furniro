import loadingImg from '../../assets/loading.webp';
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <figure className={styles.container}>
      <img src={loadingImg} alt="Loading ..." className={styles.loading} />
    </figure>
  );
};
