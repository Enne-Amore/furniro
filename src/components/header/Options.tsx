import { Link } from "react-router-dom"
import personAlertIcon from '../../assets/person-alert.svg';
import shoppingCartIcon from '../../assets/shopping-cart.svg';
import styles from './Header.module.css';

export const Options = () => {
  return (
    <div className={styles.options}>
      <Link to={'/login'}>
        <img src={personAlertIcon} alt="Person alert icon" />
      </Link>

      <Link to={'/cart'}>
        <img src={shoppingCartIcon} alt="Shopping cart icon" />
      </Link>
    </div>
  )
}
