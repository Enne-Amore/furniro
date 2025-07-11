import { WherePage } from '../../components/wherePage/WherePage'
import { Catalog } from './components/Catalog'
import { Advantages } from '../../components/advantages/Advantages'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.container}>
      <WherePage namePage={'Shop'} />

      <Catalog />

      <Advantages />
    </main>
  )
}
