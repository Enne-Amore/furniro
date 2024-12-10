import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <Link to={'/'} className={styles.link}>Home</Link>

        <Link to={'/shop'} className={styles.link}>Shop</Link>

        <Link to={''} className={styles.link}>About</Link>

        <Link to={'/contact'} className={styles.link}>Contact</Link>
      </ul>
    </nav>
  )
}
