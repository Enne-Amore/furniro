import { Logo } from './Logo';
import styles from './Header.module.css';
import { NavBar } from './NavBar';
import { Options } from './Options';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />      

      <NavBar />

      <Options />
    </div>
  )
}
