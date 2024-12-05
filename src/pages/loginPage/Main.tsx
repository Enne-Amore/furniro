import { Advantages } from '../../components/advantages/Advantages'
import { Form } from './components/Form'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.container}>
      <h1>Login Information</h1>

      <Form />

      <Advantages />
    </main>
  )
}
