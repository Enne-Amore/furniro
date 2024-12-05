import { Advantages } from '../../components/advantages/Advantages'
import { WherePage } from '../../components/wherePage/WherePage'
import { GeneralForm } from './components/GeneralForm'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.container}>
      <WherePage namePage={'Cart'} />

      <GeneralForm />      

      <Advantages />
    </main>
  )
}
