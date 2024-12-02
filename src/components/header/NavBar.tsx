import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <Link to={'/'}>Home</Link>

        <Link to={'/shop'}>Shop</Link>

        <Link to={'/about'}>About</Link>

        <Link to={'/contact'}>Contact</Link>
      </ul>
    </nav>
  )
}
