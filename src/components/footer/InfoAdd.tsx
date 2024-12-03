import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

export const InfoAdd = () => {
  return (
    <div className={styles.infoAdd}>
      <h1 className={styles.primaryTitle}>Funiro.</h1>

      <p className={styles.paragraph}>
        400 University Drive Suite 200 Coral Gables,
        <br />
        FL 33134 USA
      </p>

      <ul className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/?locale=pt_BR"
          target="_blank"
          rel="external noreferrer"
        >
          <FaFacebookF />
        </a>
        
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="external noreferrer"
        >
          <FaInstagram />
        </a>
        
        <a
          href="https://x.com/?lang=pt-br"
          target="_blank"
          rel="external noreferrer"
        >
          <FaTwitter />
        </a>
        
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="external noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </ul>
    </div>
  );
};
