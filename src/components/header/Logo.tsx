import logo from "../../assets/logo.png";
import styles from './Header.module.css';

export const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src={logo} alt="Furniro logo" />

      <figcaption className={styles.textLogo}>Furniro</figcaption>
    </figure>
  );
};
