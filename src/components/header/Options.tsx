import { Link } from "react-router-dom"
import styles from './Header.module.css';

export const Options = () => {
  return (
    <div className={styles.options}>
      <Link to={'/login'}>
        <span className={"material-symbols-outlined"}>person_alert</span>
      </Link>

      <Link to={'/carrinho'}>
        <span className={"material-symbols-outlined"}>shopping_cart</span>
      </Link>
    </div>
  )
}
