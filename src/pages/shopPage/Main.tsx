import { WherePage } from '../../components/wherePage/WherePage'
import { Advantages } from './components/Advantages'
import { Catalog } from './components/Catalog'
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
