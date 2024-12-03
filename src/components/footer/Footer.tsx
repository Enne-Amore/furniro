import { Links } from "./Links";
import { InfoAdd } from "./InfoAdd";
import { Help } from "./Help";
import { Newsletter } from "./Newsletter";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lists}>
        <InfoAdd />

        <Links />

        <Help />

        <Newsletter />
      </div>

      <hr />

      <span className={styles.details}>2023 furino. All rights reverved</span>
    </div>
  );
};
