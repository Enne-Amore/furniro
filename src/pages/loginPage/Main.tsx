import { Advantages } from '../../components/advantages/Advantages'
import { Form } from './components/Form'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.container}>
      <Form />

      <Advantages />
    </main>
  )
}
