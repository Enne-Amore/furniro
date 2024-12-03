import logo from "../../assets/logo.png";
import styles from './Header.module.css';

export const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src={logo} alt="Furniro logo" />

      <h1 className={styles.textLogo}>Furniro</h1>
    </figure>
  );
};
